import React, { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BrowserView, MobileView } from 'react-device-detect'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { Text } from '@/shared/ui/deprecated/Text'
import { Input } from '@/shared/ui/deprecated/Input'
import { VStack, HStack } from '@/shared/ui/Stack'
import { Button, ButtonVariables } from '@/shared/ui/deprecated/Button'
import { ButtonSizes } from '@/shared/ui/deprecated/Button/ui/Button'
import { Card } from '@/shared/ui/deprecated/Card'
import { Drawer } from '@/shared/ui/deprecated/Drawer'
import { Modal } from '@/shared/ui/deprecated/Modal'
import { StarRating } from '@/shared/ui/deprecated/StarRating'

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
    <>
      <Text title={feedbackTitle} />
      <Input
        data-testid="ArticleDetailsPage.RatingCart.FeedbackInput"
        value={feedback}
        onChange={setFeedback}
        placeholder={t('Ваш отзыв')}
      />
    </>
  )

  return (
    <Card data-testid="ArticleDetailsPage.RatingCart" max className={classNames('', {}, [className])}>
      <VStack max align="center">
        <Text title={starsCount ? successfulTitle : title} />
        <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
      </VStack>
      <BrowserView>
        <Modal isOpen={isModalOpen}>
          <VStack max gap="32">
            {modalContent}
            <HStack max gap="16" justify="end">
              <Button
                data-testid="ArticleDetailsPage.RatingCart.Close"
                onClick={cancelHandler}
                theme={ButtonVariables.OUTLINE_RED}
              >
                {t('Закрыть')}
              </Button>
              <Button data-testid="ArticleDetailsPage.RatingCart.Send" onClick={acceptHandler}>
                {t('Отправить')}
              </Button>
            </HStack>
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} onClose={cancelHandler} lazy>
          <VStack gap="32">
            {modalContent}
            <Button fullWidth size={ButtonSizes.L}>
              {t('Отправить')}
            </Button>
          </VStack>
        </Drawer>
      </MobileView>
    </Card>
  )
})
