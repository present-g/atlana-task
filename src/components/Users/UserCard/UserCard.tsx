import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import style from './UserCard.module.scss';

import { UsersDetailType, UsersType } from '../types';
import { Block } from '../../Block';

import { getData } from '../../../helpers';
import { BASE_URL } from '../../../api';
import { useToken } from '../../../hooks/useToken';
import { ROUTE } from '../../../screen/config';

type Props = {
  user: UsersType,
};

type StateType = UsersDetailType | Record<string, never>;

const UserCard: React.FC<Props> = ({ user }) => {
  const initialState: StateType = {};
  const [detailUser, setDetailUser] = useState(initialState);

  const history = useHistory();
  const token = useToken();

  useEffect(() => {
    let canceled = false;
    if (canceled) return;

    const users = '/users';
    const url = `${BASE_URL}${users}/${user.login.toLowerCase()}`;

    getData(url, token)
      .then((data) => {
        setDetailUser(data);
      })
      .catch((err) => console.error('UsersCard', err));
    return () => {
      canceled = true;
    };
  }, []);

  const showUserProfileHandler = () => {
    history.push({
      pathname: ROUTE.profile,
      state: detailUser,
      hash: user.id.toString(),
    });
  };

  return (
    <div className={style.UserCard} onClick={showUserProfileHandler}>
      <Block>
        <div className={style.row}>
          <div className={style.present}>
            <img
              src={user.avatar_url}
              alt={user.login}
              className={style.avatar}
            />
            <span className={style.login}>{user.login}</span>
          </div>
          <span className={style.link}>
            Repo: {detailUser.public_repos}
          </span>
        </div>
      </Block>
    </div>
  );
};

export { UserCard };
