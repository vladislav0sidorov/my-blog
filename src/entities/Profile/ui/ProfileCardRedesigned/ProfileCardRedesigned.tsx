import { useTranslation } from 'react-i18next'

import { ProfileCardProps } from '../ProfileCard/ProfileCard'

import { CurrencySelect } from '@/entities/Currency'
import { CountrySelect } from '@/entities/Country'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Input } from '@/shared/ui/redesigned/Input'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Card } from '@/shared/ui/redesigned/Card'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { Text } from '@/shared/ui/redesigned/Text'
import { UiDesignSwitcher } from '@/features/UiDesignSwitcher'

export const SkeletonProfileCardRedesigned = () => (
  <Card padding="24" max>
    <VStack gap="32">
      <HStack max justify="center">
        <Skeleton width={150} height={150} border="50%" />
      </HStack>
      <HStack gap="32" max>
        <VStack gap="24" max>
          <Skeleton width="100%" height={38} />
          <Skeleton width="100%" height={38} />
          <Skeleton width="100%" height={38} />
          <Skeleton width="100%" height={38} />
        </VStack>

        <VStack gap="24" max>
          <Skeleton width="100%" height={38} />
          <Skeleton width="100%" height={38} />
          <Skeleton width="100%" height={38} />
          <Skeleton width="100%" height={38} />
        </VStack>
      </HStack>
    </VStack>
  </Card>
)

export const ProfileCardRedesignedError = () => {
  const { t } = useTranslation('profile')

  return (
    <HStack max justify="center">
      <Text
        variant="error"
        align="center"
        title={t('Произошла ошибка при загрузке профиля')}
        text={t('Мы уже работаем, не переживайте')}
      />
    </HStack>
  )
}

export const ProfileCardRedesigned = (props: ProfileCardProps) => {
  const {
    className,
    data,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeUsername,
    onChangeCity,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props
  const { t } = useTranslation('profile')

  return (
    <Card max padding="24">
      <VStack gap="32" max>
        {data?.avatar && (
          <HStack max justify="center">
            <Avatar size={150} src={data?.avatar} />
          </HStack>
        )}
        <HStack max gap="24">
          <VStack max gap="16">
            <Input
              data-testid="ProfileCard.FirstName"
              value={data?.firstname}
              label={t('Имя')}
              onChange={onChangeFirstname}
              readonly={readonly}
            />
            <Input
              data-testid="ProfileCard.LastName"
              value={data?.lastname}
              label={t('Фамилия')}
              onChange={onChangeLastname}
              readonly={readonly}
            />
            <Input
              data-testid="ProfileCard.Age"
              value={data?.age}
              label={t('Возраст')}
              onChange={onChangeAge}
              readonly={readonly}
            />
            <Input
              data-testid="ProfileCard.City"
              value={data?.city}
              label={t('Город')}
              onChange={onChangeCity}
              readonly={readonly}
            />
          </VStack>

          <VStack max gap="16">
            <Input
              data-testid="ProfileCard.Username"
              value={data?.username}
              label={t('Имя пользователя')}
              onChange={onChangeUsername}
              readonly={readonly}
            />
            <Input
              data-testid="ProfileCard.Avatar"
              value={data?.avatar}
              label={t('Фото профиля')}
              onChange={onChangeAvatar}
              readonly={readonly}
            />
            <CurrencySelect value={data?.currency} onChange={onChangeCurrency} readonly={readonly} />
            <CountrySelect value={data?.country} onChange={onChangeCountry} readonly={readonly} />
          </VStack>
        </HStack>
        <HStack gap="8">
          <Text text={t('Выбран дизайн:')} />
          <UiDesignSwitcher />
        </HStack>
      </VStack>
    </Card>
  )
}
