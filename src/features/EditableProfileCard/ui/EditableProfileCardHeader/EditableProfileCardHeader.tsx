import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { profileActions } from '../../model/slice/profileSlice'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getUserAuthData } from '@/entities/User'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { Button as ButtonDeprecated, ButtonVariables } from '@/shared/ui/deprecated/Button'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { ToggleFeaturesComponent } from '@/shared/lib/features'
import { Text } from '@/shared/ui/redesigned/Text'
import { Button } from '@/shared/ui/redesigned/Button'
import { Card } from '@/shared/ui/redesigned/Card'

interface EditableProfileCardHeaderProps {
  className?: string
}

export const EditableProfileCardHeader: FC<EditableProfileCardHeaderProps> = React.memo((props) => {
  const { className } = props
  const { t } = useTranslation('profile')
  const authData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileData)
  const canEdit = authData?.id === profileData?.id
  const readonly = useSelector(getProfileReadOnly)

  const dispatch = useAppDispatch()

  const onEdit = React.useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = React.useCallback(() => {
    dispatch(profileActions.cancelEditProfile())
  }, [dispatch])

  const onSave = React.useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  const deprecatedContent = (
    <HStack max justify="between" className={classNames('', {}, [className])}>
      <TextDeprecated title={t('Профиль')} />
      {canEdit && (
        <div>
          {readonly ? (
            <ButtonDeprecated
              data-testid="EditableProfileCardHeader.EditButton"
              theme={ButtonVariables.OUTLINE}
              onClick={onEdit}
            >
              {t('Редактировать')}
            </ButtonDeprecated>
          ) : (
            <HStack gap="16">
              <ButtonDeprecated
                data-testid="EditableProfileCardHeader.CancelButton"
                theme={ButtonVariables.OUTLINE_RED}
                onClick={onCancelEdit}
              >
                {t('Отменить')}
              </ButtonDeprecated>
              <ButtonDeprecated
                data-testid="EditableProfileCardHeader.SaveButton"
                theme={ButtonVariables.OUTLINE}
                onClick={onSave}
              >
                {t('Сохранить')}
              </ButtonDeprecated>
            </HStack>
          )}
        </div>
      )}
    </HStack>
  )

  const redesignedContent = (
    <Card max padding="24">
      <HStack max justify="between" className={classNames('', {}, [className])}>
        <Text title={t('Профиль')} />
        {canEdit && (
          <div>
            {readonly ? (
              <Button data-testid="EditableProfileCardHeader.EditButton" variant="outline" onClick={onEdit}>
                {t('Редактировать')}
              </Button>
            ) : (
              <HStack gap="16">
                <Button data-testid="EditableProfileCardHeader.CancelButton" variant="red" onClick={onCancelEdit}>
                  {t('Отменить')}
                </Button>
                <Button data-testid="EditableProfileCardHeader.SaveButton" variant="outline" onClick={onSave}>
                  {t('Сохранить')}
                </Button>
              </HStack>
            )}
          </div>
        )}
      </HStack>
    </Card>
  )

  return <ToggleFeaturesComponent featureName="isAppRedesigned" on={redesignedContent} off={deprecatedContent} />
})
