import React from 'react';
import style from './Input.module.scss';

type Props = {
  value: string,
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
  placeholder: string,
};

const Input: React.FC<Props> = ({
  value,
  onChangeHandler,
  placeholder,
}) => {
  return (
    <input
      type="text"
      value={value}
      className={style.Input}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export { Input };
