import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select';
import React, { memo } from 'react';
import { ListBox } from 'shared/ui/ListBox';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}
const options = [
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.GEL, content: Currency.GEL },
];
export const CurrencySelect: React.FC<CurrencySelectProps> = memo((props) => {
  const {
    className, value, onChange, readonly,
  } = props;
  const { t } = useTranslation('profile');

  const onChangeHandler = React.useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange],
  );

  return (
    <ListBox className={classNames('', {}, [className])} items={options} label={t('Укажите валюту')} onChange={onChangeHandler} value={value} readonly={readonly} direction="top" />
  );

  // return (
  // <Select
  //     className={classNames('', {}, [className])}
  //     label={t('Укажите валюту')}
  //     value={value}
  //     onChange={onChangeHandler}
  //     options={options}
  //     readonly={readonly}
  //   />
  // );
});
