import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Page } from '@/widgets/Page'
import { Text } from '@/shared/ui/deprecated/Text'

// import cls from './ForbiddenPage.module.scss';

interface ForbiddenPageProps {
  className?: string
}

export const ForbiddenPage: FC<ForbiddenPageProps> = React.memo((props) => {
  const { className } = props
  const { t } = useTranslation('forbidden-page')

  return (
    <Page data-testid="ForbiddenPage">
      <Text title={t('У вас нет доступа к этой странице.')} />
    </Page>
  )
})
