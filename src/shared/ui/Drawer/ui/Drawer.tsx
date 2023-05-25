import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/ClassNames/ClassNames';
// eslint-disable-next-line ylquiorra-plugin/path-checker
import { Portal } from 'shared/ui/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
// eslint-disable-next-line ylquiorra-plugin/path-checker
import { Overlay } from 'shared/ui/Overlay';
import { useAnimationLibs } from 'shared/lib/components/AnimationProvider';
import cls from './Drawer.module.scss';

interface DrawerProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  children?: ReactNode;
  lazy?: boolean;
}

const height = window.innerHeight - 100;

export const DrawerContent = React.memo((props: DrawerProps) => {
  const {
    className, isOpen, onClose, children, lazy,
  } = props;
  const { t } = useTranslation();
  const { theme } = useTheme();
  const { Spring, Gesture } = useAnimationLibs();
  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

  const openDrawer = React.useCallback(() => {
    api.start({ y: 0, immediate: false });
  }, [api]);

  React.useEffect(() => {
    if (isOpen) {
      openDrawer();
    }
  }, [api, isOpen, openDrawer]);

  const close = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose,
    });
  };

  const bind = Gesture.useDrag(
    ({
      last, velocity: [, vy], direction: [, dy], movement: [, my], cancel,
    }) => {
      if (my < -70) cancel();

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close();
        } else {
          openDrawer();
        }
      } else {
        api.start({ y: my, immediate: true });
      }
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    },
  );

  const display = y.to((py) => (py < height ? 'block' : 'none'));

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.Drawer, {}, [className, theme, 'app_drawer'])}>
        <Overlay onClick={close} flexAling="end" />
        <Spring.a.div className={cls.sheet} style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }} {...bind()}>
          {children}
        </Spring.a.div>
      </div>
    </Portal>
  );
});

export const Drawer = React.memo((props: DrawerProps) => {
  const { isLoaded } = useAnimationLibs();

  if (!isLoaded) {
    return null;
  }

  return <DrawerContent {...props} />;
});
