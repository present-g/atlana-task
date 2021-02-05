import React from 'react';
import style from './UserProfileBio.module.scss';
import { UsersDetailType } from '../../types';
import { Block } from '../../../Block';

type Props = {
  state: UsersDetailType,
};

const UserProfileBio: React.FC<Props> = ({ state }) => {
  return (
    <Block>
      <div className={style.UserProfileBio}>
        <p>{state.bio}</p>
      </div>
    </Block>
  );
};

export { UserProfileBio };
