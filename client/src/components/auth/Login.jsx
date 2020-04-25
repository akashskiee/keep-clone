import React, {useState, Fragment} from 'react';
import './auth.css';

const Login = () => {
    return(
        <Fragment>
            <div className="login-page">
                <div className="form">
                    <form class="login-form">
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <button>login</button>
                    <p className="message">Not registered? <a href="#!">Create an account</a></p>
                    </form>
                </div>
                </div>
        </Fragment>
    );
}

export default Login;