import { GITHUB_API_TOKEN } from '../api';
import { useHistory } from 'react-router-dom';
import { ROUTE } from '../screen/config';
import { getToken } from '../helpers';

const useToken = (): null | string => {
  const token = getToken(GITHUB_API_TOKEN);

  if (!token) {
    const history = useHistory();
    history.push(ROUTE.auth);
    return null;
  }

  return token;
};

export { useToken };
