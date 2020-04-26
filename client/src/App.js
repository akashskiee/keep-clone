import React, {Fragment, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Homepage from './components/layout/Homepage';

import {Provider} from 'react-redux';
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
    <Router>
    <Fragment>
    <Route exact path='/' component={Homepage} />
    <Switch>
    <Route exact path='/register' component={Register} />
    <Route exact path='/login' component={Login}/>
    </Switch>
    </Fragment>
    </Router>
    </Provider>
  );
}

export default App;
