import React, {Fragment, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Homepage from './components/layout/Homepage';

const App = () => {
  return (
    <Router>
    <Fragment>
    <Route exact path='/' component={Homepage} />
    <Switch>
    <Route exact path='/register' component={Register} />
    <Route exact path='/login' component={Login}/>
    </Switch>
    </Fragment>
    </Router>
  );
}

export default App;
