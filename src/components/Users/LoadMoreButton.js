import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../reducers/Users/actions';

const LoadMoreButton = () => {
    const dispatch = useDispatch();
    const { info } = useSelector(state => state.Users.data);

    const handleClick = () => {
        dispatch(fetchUsers({ results: 20, page: info.page + 1 }));
    };

    return (
        <button className="btn btn-primary" type="button" onClick={handleClick}>Load More</button>
    );
};

export default LoadMoreButton;
