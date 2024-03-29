import React from 'react'
import { useTranslation } from 'react-i18next'

import cls from './PageError.module.scss'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { Button, ButtonVariables } from '@/shared/ui/deprecated/Button'

interface PageErrorProps {
  className?: string
}

export const PageError: React.FC<PageErrorProps> = (props) => {
  const { className } = props
  const { t } = useTranslation('page-error')

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload()
  }

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button theme={ButtonVariables.BACKGROUND} onClick={reloadPage} type="button">
        {t('Обновить страницу')}
      </Button>
    </div>
  )
}
