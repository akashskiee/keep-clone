import React, {useState, Fragment} from 'react';
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
        console.log(formData);
    }
    return(
        <Fragment>
            <div className="login-page" onSubmit={e => onSubmit(e)}>
                <div className="form">
                    <form className="login-form">
                    <input type="email" name="email" value={email} onChange={e => onChange(e)} placeholder="email"/>
                    <input type="password" name="password" value={password} onChange={e => onChange(e)} placeholder="password"/>
                    <button>login</button>
                    <p className="message">Not registered? <a href="#!">Create an account</a></p>
                    </form>
                </div>
                </div>
        </Fragment>
    );
}

export default Login;