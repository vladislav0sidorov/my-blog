import { useTranslation } from 'react-i18next'
import { memo, useCallback, useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'

import { saveJsonSettings, useJsonUserSettings } from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Text } from '@/shared/ui/deprecated/Text'
import { Drawer } from '@/shared/ui/redesigned/Drawer'
import { Modal } from '@/shared/ui/redesigned/Modal'

export const ArticlePageGetting = memo(() => {
  const { t } = useTranslation('articles-page')

  const [isOpen, setIsOpen] = useState(false)
  const { isArticlePageWasOpen } = useJsonUserSettings()
  const dispatch = useAppDispatch()

  const text = (
    <Text
      title={t('Добро пожаловать на страницу статей!')}
      text={t('Здесь вы можете просматривать и искать статьи на различные темы.')}
    />
  )

  useEffect(() => {
    if (!isArticlePageWasOpen) {
      setIsOpen(true)
      dispatch(saveJsonSettings({ isArticlePageWasOpen: true }))
    }
  }, [dispatch, isArticlePageWasOpen])

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  if (isMobile) {
    return (
      <Drawer onClose={onClose} isOpen={isOpen}>
        {text}
      </Drawer>
    )
  }
  return (
    <Modal lazy onClose={onClose} isOpen={isOpen}>
      {text}
    </Modal>
  )
})
