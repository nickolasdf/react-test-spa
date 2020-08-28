import React, { useEffect, useState } from 'react';
import User from '../components/User';
import { useHistory, useParams } from 'react-router';
import { useSelector } from 'react-redux';

const findUserById = (id, users) => {
    let foundUser = null;
    users.forEach(user => {
        if (user.login.uuid === id) {
            foundUser = user;
        }
    });
    return foundUser;
};

const UserPage = () => {
    const [user, setUser] = useState({});

    const history = useHistory();
    const users = useSelector(state => state.Users.data.results);
    const params = useParams();

    useEffect(() => {
        const foundUser = findUserById(params.id, users);

        if (foundUser) {
            setUser(foundUser);
        } else {
            history.push('/users');
        }

    }, []);

    return (
        <div>
            <User user={user}/>
        </div>
    );
};

export default UserPage;
