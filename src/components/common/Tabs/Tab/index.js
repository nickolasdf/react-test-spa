import React from 'react';
import { useHistory } from 'react-router';

import './index.scss';

const Tab = ({ title, link }) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(link);
    };

    return (
        <div className="tab card">
            <button className="tab__button" onClick={handleClick}>{title}</button>
        </div>
    );
};

export default Tab;
