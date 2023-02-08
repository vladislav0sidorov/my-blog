import { useTranslation } from 'react-i18next';
import { ClassNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/ui/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = (props) => {
  const { className } = props;

  const { t, i18n } = useTranslation();

  const switchLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={switchLanguage}
      className={ClassNames(cls.langSwitcher, {}, [className])}>
      {t('Русский')}
    </Button>
  );
};
