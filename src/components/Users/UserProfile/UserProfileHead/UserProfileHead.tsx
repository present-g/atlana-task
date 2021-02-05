import React from 'react';
import style from './UserProfileHead.module.scss';

import { Block } from '../../../Block';
import { UsersDetailType } from '../../types';

type Props = {
  state: UsersDetailType,
};

const UserProfileHead: React.FC<Props> = ({ state }) => {
  return (
    <Block>
      <header className={style.UserProfileHead}>
        <img
          src={state.avatar_url}
          alt={state.name}
          className={style.avatar}
        />
        <ul className={style.info}>
          <li>
            <span>Name:</span> <b>{state.name}</b>
          </li>
          <li>
            <span>Email:</span> <b>{state.email}</b>
          </li>
          <li>
            <span>Location:</span> <b>{state.location}</b>
          </li>
          <li>
            <span>Join Date:</span>{' '}
            <b>{new Date(state.created_at).toLocaleDateString()}</b>
          </li>
          <li>
            <span>Followers:</span> <b>{state.followers}</b>
          </li>
          <li>
            <span>Following:</span> <b>{state.following}</b>
          </li>
        </ul>
      </header>
    </Block>
  );
};

export { UserProfileHead };
