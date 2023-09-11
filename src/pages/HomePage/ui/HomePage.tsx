import { useTranslation } from 'react-i18next'

import { Page } from '@/widgets/Page'
import { RatingCart } from '@/entities/Rating'
import { Text } from '@/shared/ui/deprecated/Text'

const HomePage = () => {
  const { t } = useTranslation('home')

  return (
    <Page data-testid="HomePage">
      <Text text={t('Домашняя страница')} />
      <RatingCart hasFeedback feedbackTitle={t('Как вам сервис?')} />
    </Page>
  )
}

export default HomePage
