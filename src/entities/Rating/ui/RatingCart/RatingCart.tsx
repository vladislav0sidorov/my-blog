import React, { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BrowserView, MobileView } from 'react-device-detect'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import { VStack, HStack } from '@/shared/ui/redesigned/Stack'
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button'
import { ButtonSizes, ButtonVariables } from '@/shared/ui/deprecated/Button/ui/Button'
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card'
import { Drawer } from '@/shared/ui/redesigned/Drawer'
import { Modal } from '@/shared/ui/redesigned/Modal'
import { StarRating as StarRatingDeprecated } from '@/shared/ui/deprecated/StarRating'
import { ToggleFeaturesComponent } from '@/shared/lib/features'
import { Text } from '@/shared/ui/redesigned/Text'
import { Input } from '@/shared/ui/redesigned/Input'
import { Button } from '@/shared/ui/redesigned/Button'
import { Card } from '@/shared/ui/redesigned/Card'
import { StarRating } from '@/shared/ui/redesigned/StarRating'

interface RatingCartProps {
  className?: string
  title?: string
  feedbackTitle?: string
  successfulTitle?: string
  hasFeedback?: boolean
  onCancel?: (starsCount: number) => void
  onAccept?: (starsCount: number, feedback?: string) => void
  rate?: number
}

export const RatingCart = React.memo((props: RatingCartProps) => {
  const { className, title, feedbackTitle, successfulTitle, hasFeedback, onCancel, onAccept, rate = 0 } = props
  const { t } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [starsCount, setStarsCount] = useState(rate)
  const [feedback, setFeedback] = useState('')

  const onSelectStars = useCallback(
    (selectStarsCount: number) => {
      setStarsCount(selectStarsCount)

      console.log(selectStarsCount)

      if (hasFeedback) {
        setIsModalOpen(true)
      } else {
        onAccept?.(selectStarsCount)
      }
    },
    [hasFeedback, onAccept],
  )

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false)
    onAccept?.(starsCount, feedback)
  }, [feedback, onAccept, starsCount])

  const cancelHandler = useCallback(() => {
    setIsModalOpen(false)
    onAccept?.(starsCount)
  }, [onAccept, starsCount])

  const modalContent = (
    <ToggleFeaturesComponent
      featureName="isAppRedesigned"
      on={
        <>
          <Text title={feedbackTitle} />
          <Input
            data-testid="ArticleDetailsPage.RatingCart.FeedbackInput"
            value={feedback}
            onChange={setFeedback}
            placeholder={t('Ваш отзыв')}
          />
        </>
      }
      off={
        <>
          <TextDeprecated title={feedbackTitle} />
          <InputDeprecated
            data-testid="ArticleDetailsPage.RatingCart.FeedbackInput"
            value={feedback}
            onChange={setFeedback}
            placeholder={t('Ваш отзыв')}
          />
        </>
      }
    />
  )

  const mainContent = (
    <>
      <VStack max align="center">
        <ToggleFeaturesComponent
          featureName="isAppRedesigned"
          on={
            <>
              <Text title={starsCount ? successfulTitle : title} />
              <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
            </>
          }
          off={
            <>
              <TextDeprecated title={starsCount ? successfulTitle : title} />
              <StarRatingDeprecated selectedStars={starsCount} size={40} onSelect={onSelectStars} />
            </>
          }
        />
      </VStack>
      <BrowserView>
        <Modal isOpen={isModalOpen}>
          <VStack max gap="32">
            {modalContent}
            <HStack max gap="16" justify="end">
              <ToggleFeaturesComponent
                featureName="isAppRedesigned"
                on={
                  <>
                    <Button data-testid="ArticleDetailsPage.RatingCart.Close" onClick={cancelHandler} variant="red">
                      {t('Закрыть')}
                    </Button>
                    <Button data-testid="ArticleDetailsPage.RatingCart.Send" onClick={acceptHandler}>
                      {t('Отправить')}
                    </Button>
                  </>
                }
                off={
                  <>
                    <ButtonDeprecated
                      data-testid="ArticleDetailsPage.RatingCart.Close"
                      onClick={cancelHandler}
                      theme={ButtonVariables.OUTLINE_RED}
                    >
                      {t('Закрыть')}
                    </ButtonDeprecated>
                    <ButtonDeprecated data-testid="ArticleDetailsPage.RatingCart.Send" onClick={acceptHandler}>
                      {t('Отправить')}
                    </ButtonDeprecated>
                  </>
                }
              />
            </HStack>
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} onClose={cancelHandler} lazy>
          <VStack gap="32">
            {modalContent}
            <ToggleFeaturesComponent
              featureName="isAppRedesigned"
              on={
                <Button fullWidth size={ButtonSizes.L}>
                  {t('Отправить')}
                </Button>
              }
              off={
                <ButtonDeprecated fullWidth size={ButtonSizes.L}>
                  {t('Отправить')}
                </ButtonDeprecated>
              }
            />
          </VStack>
        </Drawer>
      </MobileView>
    </>
  )
  return (
    <ToggleFeaturesComponent
      featureName="isAppRedesigned"
      on={
        <Card data-testid="ArticleDetailsPage.RatingCart" max className={classNames('', {}, [className])}>
          {mainContent}
        </Card>
      }
      off={
        <CardDeprecated data-testid="ArticleDetailsPage.RatingCart" max className={classNames('', {}, [className])}>
          {mainContent}
        </CardDeprecated>
      }
    />
  )
})
