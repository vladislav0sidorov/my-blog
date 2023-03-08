import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select';
import React, { memo } from 'react';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}
const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Georgia, content: Country.Georgia },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Ukraine, content: Country.Ukraine },
];
export const CountrySelect: React.FC<CountrySelectProps> = memo((props) => {
  const {
    className, value, onChange, readonly,
  } = props;
  const { t } = useTranslation('profile');

  const onChangeHandler = React.useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange],
  );

  return (
    <Select
      className={classNames('', {}, [className])}
      label={t('Укажите cтрану')}
      value={value}
      onChange={onChangeHandler}
      options={options}
      readonly={readonly}
    />
  );
});
