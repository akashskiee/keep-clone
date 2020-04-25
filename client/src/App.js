import React, {Fragment} from 'react';
import Login from '../src/components/auth/Login';
import Register from '../src/components/auth/Register';

function App() {
  const isLoggedIn = false;
  return (
    <Fragment>
    {isLoggedIn ? <Login /> : <Register/>}
    </Fragment>
  );
}

export default App;
