import React from 'react';
import { useSelector } from 'react-redux';
import UsersList from '../common/UsersList';
import LoadMoreButton from './LoadMoreButton';

import './index.scss';

const Users = () => {
    const users = useSelector(state => state.Users.data.results);

    return (
        <div className="users">
            <div className="users__item">
                <UsersList data={users}/>
            </div>
            <div className="users__item d-flex justify-content-center">
                <LoadMoreButton/>
            </div>
        </div>
    );
};

export default Users;
