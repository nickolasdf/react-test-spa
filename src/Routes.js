import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/common/Layout';

import NotFoundPage from './pages/NotFoundPage';
import UsersPage from './pages/UsersPage';
import SelectedUsersPage from './pages/SelectedUsersPage';
import UserPage from './pages/UserPage';

const WithLayout = ({ children, ...rest }) => {
    return (
        <Route {...rest}>
            <Layout>
                {children}
            </Layout>
        </Route>
    );
};

const Routes = () => {
    return (
        <Router>
            <Switch>
                <WithLayout exact path="/">
                    <h1>Main Page</h1>
                </WithLayout>
                <WithLayout exact path="/users">
                    <UsersPage/>
                </WithLayout>
                <WithLayout exact path="/users/:id">
                    <UserPage/>
                </WithLayout>
                <WithLayout exact path="/selected-users">
                    <SelectedUsersPage/>
                </WithLayout>
                <Route exact path="*">
                    <NotFoundPage/>
                </Route>
            </Switch>
        </Router>
    );
};

export default Routes;
