import React from 'react';
import Tab from './Tab';

import './index.scss';

const tabList = [
    {
        title: 'Users',
        link: '/users'
    },
    {
        title: 'Selected users',
        link: '/selected-users'
    }
];

const Tabs = () => {
    return (
        <div className="tabs">
            {tabList.map(tab => {
                return (
                    <Tab key={tab.link} title={tab.title} link={tab.link}/>
                );
            })}
        </div>
    );
};

export default Tabs;
