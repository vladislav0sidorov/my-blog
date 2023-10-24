import { useTranslation } from 'react-i18next'
import React, { memo } from 'react'

import { Currency } from '../../model/types/currency'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { ListBox } from '@/shared/ui/redesigned/Popups/ui/ListBox/ListBox'
import { ToggleFeaturesComponent } from '@/shared/lib/features'
import { Select } from '@/shared/ui/deprecated/Select'

interface CurrencySelectProps {
  className?: string
  value?: Currency
  onChange?: (value: Currency) => void
  readonly?: boolean
}
const options = [
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.GEL, content: Currency.GEL },
]
export const CurrencySelect: React.FC<CurrencySelectProps> = memo((props) => {
  const { className, value, onChange, readonly } = props
  const { t } = useTranslation('profile')

  const onChangeHandler = React.useCallback(
    (value: string) => {
      onChange?.(value as Currency)
    },
    [onChange],
  )

  const deprecatedContent = (
    <Select
      className={classNames('', {}, [className])}
      options={options}
      label={t('Укажите валюту')}
      onChange={onChangeHandler}
      value={value}
      readonly={readonly}
    />
  )

  const redesignedContent = (
    <ListBox
      className={classNames('', {}, [className])}
      items={options}
      label={t('Укажите валюту')}
      onChange={onChangeHandler}
      value={value}
      readonly={readonly}
      direction="top right"
    />
  )

  return <ToggleFeaturesComponent featureName="isAppRedesigned" on={redesignedContent} off={deprecatedContent} />
})
