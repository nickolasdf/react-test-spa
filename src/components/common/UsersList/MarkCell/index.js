import React from 'react';
import { updateUsers } from '../../../../reducers/Users/actions';
import { useDispatch, useSelector } from 'react-redux';

const formatDate = date => {
    return date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
};

const MarkCell = ({ user, btnClass = 'primary', text = 'Mark' }) => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.Users.data.results);

    const handleToggleMark = id => () => {
        const newList = users.map(user => {
            if (user.login.uuid === id) {
                if (user.marked) {
                    return {
                        ...user,
                        marked: false,
                        addTime: null
                    };
                } else {
                    return {
                        ...user,
                        marked: true,
                        addTime: formatDate(new Date())
                    };
                }
            } else {
                return user;
            }
        });
        dispatch(updateUsers(newList));
    };

    const userDate = user.marked && <div className="mark-date mt-2">Added: {user.addTime}</div>;

    return (
        <div className="mark-cell">
            <button
                className={`btn btn-${btnClass}`}
                onClick={handleToggleMark(user.login.uuid)}
            >
                {text}
            </button>
            {userDate}
        </div>
    );
};

export default MarkCell;
