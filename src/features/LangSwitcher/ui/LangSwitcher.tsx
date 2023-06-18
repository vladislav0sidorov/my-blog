import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { Button, ButtonVariables } from '@/shared/ui/Button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = memo((props) => {
  const { className, short } = props;

  const { t, i18n } = useTranslation();

  const switchLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button theme={ButtonVariables.CLEAR_THIRD} onClick={switchLanguage} className={classNames('', {}, [className])}>
      {t(short ? 'Короткий язык' : 'Русский')}
    </Button>
  );
});
