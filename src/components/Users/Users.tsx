import React, {useEffect, useState} from 'react';
import style from './Users.module.scss';
import {useHistory} from "react-router-dom";

import {UserList} from "./UserList";
import {Block} from "../Block";
import {Input} from "../Input";

import {BASE_URL, GITHUB_API_TOKEN, QUERY_URL, SEARCH_URL} from '../../api';
import {ROUTE} from "../../screen/config";
import {ResponseType, UsersType} from './types';
import {getData, setToken} from '../../helpers';
import {useToken} from "../../hooks/useToken";

const Users: React.FC = () => {
  // eslint-disable-next-line prettier/prettier
  const [users, setUsers] = useState<UsersType[]>([]);
  const [query, setQuery] = useState('');

  const token = useToken();
  const history = useHistory();

  useEffect(() => {
    let canceled = false;
    if (canceled || !query) return;

    const users = '/users';
    const url = `${BASE_URL}${SEARCH_URL}${users}${QUERY_URL}${query}`;

    const timeOutID = setTimeout(() => {
      getData(url, token)
        .then(({items}: ResponseType) => {
          setUsers(items);
        })
        .catch((err) => {
          console.error('Users', err);

          if (err === 401) {
            setToken(GITHUB_API_TOKEN, '');
            history.push(ROUTE.auth)
          }
        });
    }, 500)
    return () => {
      canceled = true;
      clearTimeout(timeOutID);
    }
  }, [query]);

  const setValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  return (
    <div className={style.Users}>
      <Block>
        <h2 className={style.headline}>Search users</h2>
        <Input value={query} onChangeHandler={setValueHandler} placeholder="Search for Users"/>
      </Block>
      <UserList {...{users}} />
    </div>
  );
};

export {Users};
