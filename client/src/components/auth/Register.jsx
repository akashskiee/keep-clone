import React, {useState, Fragment} from 'react';
import {Link} from 'react-router-dom';
import Header from '../layout/Header';
import {connect} from 'react-redux';
import {setAlert} from '../../actions/alert';
import PropTypes from 'prop-types';
import Alerting from '../layout/Alerting'
import './auth.css';

const Register = ({setAlert}) => {
    const [formData, setFormData] = useState({
        name : "",
        email: "",
        password: "",
        password2: ""
    });

    const {name, email, password, password2} = formData;

    const onChange = e => setFormData({...formData, [e.target.name] : e.target.value});

    const onSubmit = async e => {
        e.preventDefault();
        if(password !== password2){
            setAlert("Passwords don't match, Please try again!", "error");
        } else {
            console.log("SUCCESS")
        }
    }

    return(
        <Fragment>
        <Header />
        <br />
            <Alerting />
            <div className="login-page">
                <div className="form">
                    <form className="register-form" onSubmit={e => onSubmit(e)}>
                    <input type="text" name="name" value={name} onChange={e => onChange(e)} placeholder="name" required/>
                    <input type="email" name="email" value={email} onChange={e => onChange(e)} placeholder="email address" required/>
                    <input type="password" name="password" value={password} onChange={e => onChange(e)} placeholder="password" required/>
                    <input type="password" name="password2" value={password2} onChange={e => onChange(e)} placeholder="confirm password" required/>
                    <button>create</button>
                    <p className="message">Already registered? <Link to="/login">Sign In</Link></p>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

Register.propTypes = {
setAlert: PropTypes.func.isRequired
}

export default connect(null, {setAlert})(Register);