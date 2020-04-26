import React, {useState, Fragment} from 'react';
import {Link} from 'react-router-dom';
import Header from '../layout/Header';
import './auth.css';

const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const {email, password} = formData;

    const onChange = e => setFormData({
        ...formData,
        [e.target.name] : e.target.value
    });

    const onSubmit = e => {
        e.preventDefault();
        console.log("SUCCESS");
    }
    return(
        <Fragment>
        <Header />
            <div className="login-page" onSubmit={e => onSubmit(e)}>
                <div className="form">
                    <form className="login-form">
                    <input type="email" name="email" value={email} onChange={e => onChange(e)} placeholder="email"/>
                    <input type="password" name="password" value={password} onChange={e => onChange(e)} placeholder="password"/>
                    <button>login</button>
                    <p className="message">Not registered? <Link to="/register">Create an account</Link></p>
                    </form>
                </div>
                </div>
        </Fragment>
    );
}

export default Login;