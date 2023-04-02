import React, { FC, MutableRefObject, ReactNode } from 'react';
import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import cls from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page: FC<PageProps> = React.memo((props) => {
  const { className, children, onScrollEnd } = props;
  const triggerRef = React.useRef() as MutableRefObject<HTMLDivElement>;
  const wrapperRef = React.useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  return (
    <section ref={wrapperRef} className={classNames(cls.pageWrapper, {}, [className])}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
});
