import React, {Fragment, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';
import Homepage from './components/layout/Homepage';
import PrivateRoute from './components/routing/PrivateRoute';
import {Provider} from 'react-redux';
import store from './store'
import {loadUser} from './actions/auth';
import setAuthToken from './utils/setAuthToken'

if(localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
    <Router>
    <Fragment>
    <Switch>
    <Route exact path='/register' component={Register} />
    <Route exact path='/login' component={Login}/>
    <Route exact path='/forgot-password' component={ForgotPassword}/>
    <PrivateRoute exact path='/' component={Homepage} />
    </Switch>
    </Fragment>
    </Router>
    </Provider>
  );
}

export default App;
