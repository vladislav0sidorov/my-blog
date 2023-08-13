import { useTranslation } from 'react-i18next'

import cls from './ProfileCard.module.scss'
import { Profile } from '../../model/types/profile'

import { Text } from '@/shared/ui/Text'
import { classNames, Mods } from '@/shared/lib/ClassNames/ClassNames'
import { Input } from '@/shared/ui/Input'
import { Loader } from '@/shared/ui/Loader'
import { TextAling, TextTheme } from '@/shared/ui/Text/ui/Text'
import { Avatar } from '@/shared/ui/Avatar'
import { Currency, CurrencySelect } from '@/entities/Currency'
import { Country, CountrySelect } from '@/entities/Country'
import { HStack, VStack } from '@/shared/ui/Stack'

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
  readonly?: boolean
  onChangeFirstname?: (value: string) => void
  onChangeLastname?: (value: string) => void
  onChangeAge?: (value: string) => void
  onChangeUsername?: (value: string) => void
  onChangeCity?: (value: string) => void
  onChangeAvatar?: (value: string) => void
  onChangeCurrency?: (currency: Currency) => void
  onChangeCountry?: (country: Country) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
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

  if (isLoading) {
    return (
      <HStack max justify="center" className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Loader />
      </HStack>
    )
  }

  if (error) {
    return (
      <HStack max justify="center" className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          aling={TextAling.CENTER}
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Мы уже работаем, не переживайте')}
        />
      </HStack>
    )
  }

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
        placeholder={t('Ваше имя')}
        onChange={onChangeFirstname}
        readonly={readonly}
      />
      <Input
        data-testid="ProfileCard.LastName"
        value={data?.lastname}
        placeholder={t('Ваша фамилия')}
        onChange={onChangeLastname}
        readonly={readonly}
      />
      <Input
        data-testid="ProfileCard.Age"
        value={data?.age}
        placeholder={t('Ваш возраст')}
        onChange={onChangeAge}
        readonly={readonly}
      />
      <Input
        data-testid="ProfileCard.Username"
        value={data?.username}
        placeholder={t('Ваше имя пользователя')}
        onChange={onChangeUsername}
        readonly={readonly}
      />
      <Input
        data-testid="ProfileCard.City"
        value={data?.city}
        placeholder={t('Ваш город')}
        onChange={onChangeCity}
        readonly={readonly}
      />
      <Input
        data-testid="ProfileCard.Avatar"
        value={data?.avatar}
        placeholder={t('Ваше фото профиля')}
        onChange={onChangeAvatar}
        readonly={readonly}
      />
      <CurrencySelect value={data?.currency} onChange={onChangeCurrency} readonly={readonly} />
      <CountrySelect value={data?.country} onChange={onChangeCountry} readonly={readonly} />
    </VStack>
  )
}
