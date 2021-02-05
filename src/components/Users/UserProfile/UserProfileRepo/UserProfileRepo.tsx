import React, {useEffect, useState} from 'react';
import style from './UserProfileRepo.module.scss';
import {useHistory} from 'react-router-dom';

import {Input} from '../../../Input';
import {Block} from "../../../Block";

import {ROUTE} from '../../../../screen/config';
import {GITHUB_API_TOKEN} from '../../../../api';
import {UserRepo, UsersDetailType} from '../../types';
import {getData, setToken} from '../../../../helpers';
import {useToken} from '../../../../hooks/useToken';

type Props = {
  state: UsersDetailType,
};

const UserProfileRepo: React.FC<Props> = ({state}) => {
  const [query, setQuery] = useState('');
  // eslint-disable-next-line prettier/prettier
  const [repo, setRepo] = useState<UserRepo[]>([]);
  const [repoView, setRepoView] = useState<UserRepo[]>([]);

  const token = useToken();
  const history = useHistory();

  useEffect(() => {
    let canceled = false;
    if (canceled) return;

    getData(state.repos_url, token)
      .then((response) => {
        setRepo(response);
        setRepoView(response);
      })
      .catch((err) => {
        console.error('Users', err);

        if (err === 401) {
          setToken(GITHUB_API_TOKEN, '');
          history.push(ROUTE.auth);
        }
      });
    return () => {
      canceled = true;
    };
  }, []);

  useEffect(() => {
    searchRepoHandler(query);
  }, [query])

  const setValueHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setQuery(e.target.value);
  };

  const searchRepoHandler = (str: string) => {
    const filterRepo = repo.filter(item => item.name.includes(str));
    setRepoView(filterRepo);
  }

  const goToGithubRepo = (url: string) => {
    window.open(url, '_blank');
  }

  return (
    <div className={style.UserProfileRepo}>
      <Block>
        <Input
          value={query}
          onChangeHandler={setValueHandler}
          placeholder="Search for User's Repositories"
        />
      </Block>
      {repoView.map(item => (
        <Block key={item.id}>
          <div className={style.repo} onClick={() => goToGithubRepo(item.html_url)}>
            <span className={style.name}>{item.name}</span>
            <div className={style.wrap}>
              <p className={style.fork}>Forks: {item.forks}</p>
              <p className={style.fork}>Stars: {item.stargazers_count}</p>
            </div>
          </div>
        </Block>
      ))}
    </div>
  );
};

export {UserProfileRepo};
