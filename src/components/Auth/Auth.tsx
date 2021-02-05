import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import style from './Auth.module.scss';

import { Block } from '../Block';
import { Input } from '../Input';

import { ROUTE } from '../../screen/config';
import { GITHUB_API_TOKEN } from '../../api';
import { setToken } from '../../helpers';

const Auth: React.FC = () => {
  const [value, setValue] = useState('');

  const history = useHistory();

  const setValueHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setValue(e.target.value);
  };

  const setTokenHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (value.length <= 5) return;

    setToken(GITHUB_API_TOKEN, value);
    history.push(ROUTE.home);
  };

  return (
    <div className={style.Auth}>
      <Block>
        <div className={style.head}>
          <h3 className={style.text}>
            Authentication is required for normal operation, enter
            your token..
          </h3>
          <span className={style.description}>
            Learn more
            <a href="https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token">
              {' '}
              here
            </a>
          </span>
        </div>
        <form onSubmit={setTokenHandler}>
          <Input
            value={value}
            onChangeHandler={setValueHandler}
            placeholder="Input yor token"
          />
        </form>
      </Block>
    </div>
  );
};

export { Auth };
