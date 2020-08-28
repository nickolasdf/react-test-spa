import React from 'react';
import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { updateUsers } from '../../../reducers/Users/actions';

const UsersList = ({ data = [] }) => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.Users.data.results);

    const handleClickMark = id => () => {
        const newList = users.map(user => {
            if (user.login.uuid === id) {
                return {
                    ...user,
                    marked: true
                };
            } else {
                return user;
            }
        });
        dispatch(updateUsers(newList));
    };

    return (
        <div className="card">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Avatar</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(user => {

                        return (
                            <tr key={user.login.uuid}>
                                <th className="align-middle" scope="row">{user.login.uuid}</th>
                                <td className="align-middle">
                                    <img alt="avatar" src={user.picture.thumbnail}/>
                                </td>
                                <td className="align-middle">{user.name.first}</td>
                                <td className="align-middle">{user.name.last}</td>
                                <td className="align-middle">
                                    <button
                                        className={`btn btn-primary`}
                                        onClick={handleClickMark(user.login.uuid)}
                                    >
                                        Mark
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default UsersList;
