import React from 'react';

import { UsersType } from '../types';
import { UserCard } from '../UserCard';

type Props = {
  users: UsersType[],
};

const UserList: React.FC<Props> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} {...{ user }} />
      ))}
    </div>
  );
};

export { UserList };
