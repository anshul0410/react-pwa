import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import history from './history';

import App from '../App';
import DashboardContainer from '../screen/containers/Dashboard';
import DetailContainer from '../screen/containers/Detail';
import WelcomeContainer from '../screen/containers/Welcome';

const Root = props => {
    return (
        <Provider store={props.store}>
            <Router history={history}>
                <App>
                    <Switch>
                        <Route path="/" exact component={WelcomeContainer} />
                        <Route path="/coffee/:id" component={DetailContainer} />
                        <Route path="/coffee" component={DashboardContainer} />
                    </Switch>
                </App>
            </Router>
        </Provider>
    )
}

export default Root