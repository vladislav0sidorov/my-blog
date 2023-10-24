import { useTranslation } from 'react-i18next'

import cls from './ProfileCardDeprecated.module.scss'
import { ProfileCardProps } from '../ProfileCard/ProfileCard'

import { classNames, Mods } from '@/shared/lib/ClassNames/ClassNames'
import { CurrencySelect } from '@/entities/Currency'
import { CountrySelect } from '@/entities/Country'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Avatar } from '@/shared/ui/deprecated/Avatar'
import { Input } from '@/shared/ui/deprecated/Input'
import { TextTheme, TextAling, Text } from '@/shared/ui/deprecated/Text/ui/Text'
import { Loader } from '@/shared/ui/deprecated/Loader'

export const ProfileCardDeprecatedLoader = () => (
  <HStack max justify="center" className={classNames(cls.ProfileCard, {}, [cls.loading])}>
    <Loader />
  </HStack>
)

export const ProfileCardDeprecatedError = () => {
  const { t } = useTranslation('profile')

  return (
    <HStack max justify="center" className={classNames(cls.ProfileCard, {}, [cls.error])}>
      <Text
        theme={TextTheme.ERROR}
        aling={TextAling.CENTER}
        title={t('Произошла ошибка при загрузке профиля')}
        text={t('Мы уже работаем, не переживайте')}
      />
    </HStack>
  )
}

export const ProfileCardDeprecated = (props: ProfileCardProps) => {
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

  const mods: Mods = {
    [cls.editing]: !readonly,
  }

  return (
    <VStack gap="16" max className={classNames(cls.ProfileCard, mods, [className])}>
      {data?.avatar && (
        <HStack max justify="center">
          <Avatar size={150} src={data?.avatar} />
        </HStack>
      )}
      <Input
        data-testid="ProfileCard.FirstName"
        value={data?.firstname}
        placeholder={t('Имя')}
        onChange={onChangeFirstname}
        readonly={readonly}
      />
      <Input
        data-testid="ProfileCard.LastName"
        value={data?.lastname}
        placeholder={t('Фамилия')}
        onChange={onChangeLastname}
        readonly={readonly}
      />
      <Input
        data-testid="ProfileCard.Age"
        value={data?.age}
        placeholder={t('Возраст')}
        onChange={onChangeAge}
        readonly={readonly}
      />
      <Input
        data-testid="ProfileCard.Username"
        value={data?.username}
        placeholder={t('Имя пользователя')}
        onChange={onChangeUsername}
        readonly={readonly}
      />
      <Input
        data-testid="ProfileCard.City"
        value={data?.city}
        placeholder={t('Город')}
        onChange={onChangeCity}
        readonly={readonly}
      />
      <Input
        data-testid="ProfileCard.Avatar"
        value={data?.avatar}
        placeholder={t('Фото профиля')}
        onChange={onChangeAvatar}
        readonly={readonly}
      />
      <CurrencySelect value={data?.currency} onChange={onChangeCurrency} readonly={readonly} />
      <CountrySelect value={data?.country} onChange={onChangeCountry} readonly={readonly} />
    </VStack>
  )
}
