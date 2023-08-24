import { useTranslation } from 'react-i18next'

import { Page } from '@/widgets/Page'
import { Text } from '@/shared/ui/Text'
import { RatingCart } from '@/entities/Rating'

const HomePage = () => {
  const { t } = useTranslation('home')
  // const isArticleRaitingEnabled = getFeatureFlag('isArticleRaitingEnebled')

  return (
    <Page data-testid="HomePage">
      <Text text={t('Домашняя страница')} />
      {/* {isArticleRaitingEnabled && >} */}
      <RatingCart hasFeedback feedbackTitle={t('Как вам сервис?')} />
    </Page>
  )
}

export default HomePage
