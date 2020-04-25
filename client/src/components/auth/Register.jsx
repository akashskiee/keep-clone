import React, {useState, Fragment} from 'react';
import './auth.css';

const Register = () => {
    return(
        <Fragment>
             
            <div className="login-page">
                <div className="form">
                    <form className="register-form">
                    <input type="text" placeholder="name"/>
                    <input type="email" placeholder="email address"/>
                    <input type="password" placeholder="password"/>
                    <button>create</button>
                    <p className="message">Already registered? <a href="#!">Sign In</a></p>
                    </form>
                </div>
                </div>
        </Fragment>
    );
}

export default Register;