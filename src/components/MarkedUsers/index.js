import React from 'react';
import { useSelector } from 'react-redux';

import UsersList from '../common/UsersList';

const MarkedUsers = () => {
    const users = useSelector(state => state.Users.data.results);

    const getMarkedUsers = (users) => {
        return users.filter(user => {
            return user.marked;
        });
    };

    return (
        <UsersList data={getMarkedUsers(users)}/>
    );
};

export default MarkedUsers;
