import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { Button as ButtonDeprecated, ButtonVariables } from '@/shared/ui/deprecated/Button'
import { ToggleFeaturesComponent } from '@/shared/lib/features'
import { Button } from '@/shared/ui/redesigned/Button'

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher: React.FC<LangSwitcherProps> = memo((props) => {
  const { className, short } = props

  const { t, i18n } = useTranslation()

  const switchLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  const deprecatedContent = (
    <ButtonDeprecated
      theme={ButtonVariables.CLEAR_THIRD}
      onClick={switchLanguage}
      className={classNames('', {}, [className])}
    >
      {t(short ? 'Короткий язык' : 'Русский')}
    </ButtonDeprecated>
  )

  const redesignedContent = (
    <Button variant="clear" onClick={switchLanguage} className={classNames('', {}, [className])}>
      {t(short ? 'Короткий язык' : 'Русский')}
    </Button>
  )

  return <ToggleFeaturesComponent featureName="isAppRedesigned" on={redesignedContent} off={deprecatedContent} />
})
