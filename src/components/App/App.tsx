import React from 'react';
import style from './App.module.scss';

import { Switch, Route } from 'react-router-dom';
import { SearchScreen } from '../../screen/SearchScreen';
import { ProfileScreen } from '../../screen/ProfileScreen';
import { ROUTE } from '../../screen/config';
import { AuthScreen } from '../../screen/AuthScreen';

const App: React.FC = () => {
  return (
    <div className={style.App}>
      <Switch>
        <Route exact path={ROUTE.home}>
          <SearchScreen />
        </Route>
        <Route path={ROUTE.profile}>
          <ProfileScreen />
        </Route>
        <Route path={ROUTE.auth}>
          <AuthScreen />
        </Route>
      </Switch>
    </div>
  );
};

export { App };
