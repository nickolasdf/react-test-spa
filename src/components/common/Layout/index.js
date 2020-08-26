import React from 'react';
import Header from '../Header';
import Tabs from '../Tabs';
import Footer from '../Footer';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header/>
            <Tabs/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;
