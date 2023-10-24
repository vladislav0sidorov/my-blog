import { useTranslation } from 'react-i18next'
import React, { memo } from 'react'

import { Country } from '../../model/types/country'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { ListBox } from '@/shared/ui/redesigned/Popups/ui/ListBox/ListBox'
import { Select } from '@/shared/ui/deprecated/Select'
import { ToggleFeaturesComponent } from '@/shared/lib/features'

interface CountrySelectProps {
  className?: string
  value?: Country
  onChange?: (value: Country) => void
  readonly?: boolean
}
const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Georgia, content: Country.Georgia },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Ukraine, content: Country.Ukraine },
]
export const CountrySelect = memo((props: CountrySelectProps) => {
  const { className, value, onChange, readonly } = props
  const { t } = useTranslation('profile')

  const onChangeHandler = React.useCallback(
    (value: string) => {
      onChange?.(value as Country)
    },
    [onChange],
  )

  const deprecatedContent = (
    <Select
      className={classNames('', {}, [className])}
      options={options}
      label={t('Укажите страну')}
      onChange={onChangeHandler}
      value={value}
      readonly={readonly}
    />
  )

  const redesignedContent = (
    <ListBox
      className={classNames('', {}, [className])}
      items={options}
      label={t('Укажите страну')}
      onChange={onChangeHandler}
      value={value}
      readonly={readonly}
      direction="top right"
    />
  )

  return <ToggleFeaturesComponent featureName="isAppRedesigned" on={redesignedContent} off={deprecatedContent} />
})
