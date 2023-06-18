import { useTranslation } from 'react-i18next';
import React, { ChangeEvent } from 'react';

import cls from './Select.module.scss';

import { classNames, Mods } from '@/shared/lib/ClassNames/ClassNames';

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const {
    className, label, options, value, readonly, onChange,
  } = props;
  const { t } = useTranslation();
  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  const optionList = React.useMemo(
    () => options?.map((opt) => (
      <option className={cls.option} key={opt.value} value={opt.value}>
        {opt.content}
      </option>
    )),
    [options],
  );

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  };

  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      {label && <span className={cls.label}>{`${label} >`}</span>}
      <select disabled={readonly} onChange={onChangeHandler} value={value} className={classNames(cls.select, mods, [])}>
        {optionList}
      </select>
    </div>
  );
};
