import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../Header';
import Tabs from '../Tabs';
import Footer from '../Footer';
import Preloader from '../Preloader';

import './index.scss';
import { fetchUsers } from '../../../reducers/Users/actions';

const Layout = ({ children }) => {
    const { isLoading } = useSelector(state => state.App);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers({ results: 20 }));
    }, [dispatch]);

    const content = isLoading ? <Preloader/> : children;

    return (
        <div className="layout">
            <Header/>
            <section className="section-mg">
                <Tabs/>
            </section>
            <section className="content section-mg">
                {content}
            </section>
            <Footer/>
        </div>
    );
};

export default Layout;
