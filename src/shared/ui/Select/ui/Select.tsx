import { classNames, Mods } from 'shared/lib/ClassNames/ClassNames';
import { useTranslation } from 'react-i18next';
import React, { ChangeEvent } from 'react';
import cls from './Select.module.scss';

export interface SelectOption {
  value: string;
  content: string
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select: React.FC<SelectProps> = (props) => {
  const {
    className,
    label,
    options,
    value,
    readonly,
    onChange,
  } = props;
  const { t } = useTranslation();
  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  const optionList = React.useMemo(
    () => options?.map((opt) => (<option className={cls.option} key={opt.value} value={opt.value}>{opt.content}</option>)),
    [options],
  );

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      {label && <span className={cls.label}>{`${label} >`}</span>}
      <select
        disabled={readonly}
        onChange={onChangeHandler}
        value={value}
        className={classNames(cls.select, mods, [])}
      >
        {optionList}
      </select>
    </div>

  );
};
