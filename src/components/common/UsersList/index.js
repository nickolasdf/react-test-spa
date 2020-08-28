import React, { useState } from 'react';

import './index.scss';
import MarkCell from './MarkCell';
import Filter from './Filter';
import { useHistory } from 'react-router';

const filters = [
    {
        label: 'First name',
        field: 'firstName'
    },
    {
        label: 'Last Name',
        field: 'lastName'
    }
];

const UsersList = ({ data = [] }) => {
    const [filterValues, setFilterValues] = useState({});
    const history = useHistory();

    const handleFilterChange = values => {
        setFilterValues(values);
    };

    const handleRowClick = id => () => {
        history.push(`/users/${id}`);
    };

    return (
        <div>
            <Filter filters={filters} onFilterChange={handleFilterChange}/>
            <div className="card">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Avatar</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col"/>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(user => {
                            return (
                                <tr key={user.login.uuid} onClick={handleRowClick(user.login.uuid)}>
                                    <th className="align-middle" scope="row">{user.login.uuid}</th>
                                    <td className="align-middle">
                                        <img alt="avatar" src={user.picture.thumbnail}/>
                                    </td>
                                    <td className="align-middle">{user.name.first}</td>
                                    <td className="align-middle">{user.name.last}</td>
                                    <td className="align-middle">
                                        {user.marked ?
                                            <MarkCell user={user} btnClass="success" text="Marked"/> :
                                            <MarkCell user={user}/>}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersList;
