import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice'
import { getAddCommnetFormError } from '../../model/selectors/getAddCommnetFormError/getAddCommnetFormError'
import { getAddCommnetFormText } from '../../model/selectors/getAddCommnetFormText/getAddCommnetFormText'
import cls from './AddCommentForm.module.scss'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { HStack } from '@/shared/ui/Stack'
import { Input } from '@/shared/ui/deprecated/Input'
import { Button, ButtonVariables } from '@/shared/ui/deprecated/Button'

export interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const AddCommentForm: FC<AddCommentFormProps> = React.memo((props) => {
  const { className, onSendComment } = props
  const { t } = useTranslation('comment')
  const dispatch = useAppDispatch()
  const text = useSelector(getAddCommnetFormText)
  const error = useSelector(getAddCommnetFormError)

  const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
  }

  const onCommentTextChange = React.useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value))
    },
    [dispatch],
  )

  const onSendHandler = React.useCallback(() => {
    onSendComment(text || '')
    onCommentTextChange('')
  }, [onCommentTextChange, onSendComment, text])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <HStack
        data-testid="ArticleDetailsPage.AddCommentForm"
        max
        className={classNames(cls.AddCommentForm, {}, [className])}
      >
        <Input
          data-testid="ArticleDetailsPage.AddCommentForm.Input"
          className={cls.input}
          onChange={onCommentTextChange}
          value={text}
          placeholder={t('Введите текст комментария')}
        />
        <Button
          data-testid="ArticleDetailsPage.AddCommentForm.Button"
          onClick={onSendHandler}
          theme={ButtonVariables.OUTLINE}
        >
          {t('Отправить')}
        </Button>
      </HStack>
    </DynamicModuleLoader>
  )
})

export default AddCommentForm
