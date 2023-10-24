import { Profile } from '../../model/types/profile'
import {
  ProfileCardRedesigned,
  ProfileCardRedesignedError,
  SkeletonProfileCardRedesigned,
} from '../ProfileCardRedesigned/ProfileCardRedesigned'
import {
  ProfileCardDeprecated,
  ProfileCardDeprecatedError,
  ProfileCardDeprecatedLoader,
} from '../ProfileCardDeprecated/ProfileCardDeprecated'

import { Currency } from '@/entities/Currency'
import { Country } from '@/entities/Country'
import { ToggleFeaturesComponent } from '@/shared/lib/features'

export interface ProfileCardProps {
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

  const propsForComponents: ProfileCardProps = {
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
  }

  if (isLoading) {
    return (
      <ToggleFeaturesComponent
        featureName="isAppRedesigned"
        on={<SkeletonProfileCardRedesigned />}
        off={<ProfileCardDeprecatedLoader />}
      />
    )
  }

  if (error) {
    return (
      <ToggleFeaturesComponent
        featureName="isAppRedesigned"
        on={<ProfileCardRedesignedError />}
        off={<ProfileCardDeprecatedError />}
      />
    )
  }

  return (
    <ToggleFeaturesComponent
      featureName="isAppRedesigned"
      on={<ProfileCardRedesigned {...propsForComponents} />}
      off={<ProfileCardDeprecated {...propsForComponents} />}
    />
  )
}
