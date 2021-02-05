import React from 'react';
import style from './UserProfile.module.scss';

import { UserProfileHead } from './UserProfileHead';

import { ROUTE } from '../../../screen/config';
import { UsersDetailType } from '../types';
import { useHistory } from 'react-router-dom';
import { UserProfileBio } from './UserProfileBio';
import { UserProfileRepo } from './UserProfileRepo';

const UserProfile: React.FC = () => {
  const history = useHistory();

  // @ts-ignore
  const { state }: UsersDetailType = history.location;

  const goToHomePage = () => {
    history.push(ROUTE.home);
  };

  return (
    <main className={style.UserProfile}>
      <UserProfileHead {...{ state }} />
      <UserProfileBio {...{ state }} />
      <UserProfileRepo {...{ state }} />
      <button className={style.btn} onClick={goToHomePage}>
        {'<'}
      </button>
    </main>
  );
};

export { UserProfile };
