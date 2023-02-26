import React from 'react';
import { classNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  type?: string;
}

export const Input: React.FC<InputProps> = React.memo((props) => {
  const {
    className, value, onChange, type, placeholder, autoFocus, ...otherProps
  } = props;

  const [isFocused, setIsFocused] = React.useState(false);
  const [caretPosition, setCaretPosition] = React.useState(0);
  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autoFocus]);

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };
  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      { placeholder && (
        <div className={cls.placeholder}>
          {`${placeholder} >`}
        </div>
      )}
      <div className={cls.caretWrapper}>
        <input
          ref={ref}
          className={cls.input}
          onBlur={onBlur}
          onFocus={onFocus}
          type={type}
          value={value}
          onChange={onChangeHandler}
          onSelect={onSelect}
          {...otherProps}
        />
        {isFocused && <span style={{ left: `${caretPosition * 7.34}px` }} className={cls.caret} />}
      </div>
    </div>

  );
});
