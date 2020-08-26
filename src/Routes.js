import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/common/Layout';

import NotFoundPage from './pages/NotFoundPage';

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
                    <h1>Users</h1>
                </WithLayout>
                <WithLayout exact path="/selected-users">
                    <h1>Selected users</h1>
                </WithLayout>
                <Route exact path="*">
                    <NotFoundPage/>
                </Route>
            </Switch>
        </Router>
    );
};

export default Routes;
