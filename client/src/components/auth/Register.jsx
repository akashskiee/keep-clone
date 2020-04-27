import React, {useState, Fragment} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Header from '../layout/Header';
import {connect} from 'react-redux';
import {setAlert} from '../../actions/alert';
import {register} from '../../actions/auth';
import PropTypes from 'prop-types';
import Alerting from '../layout/Alerting'
import './auth.css';

const Register = ({setAlert, register, isAuthenticated}) => {
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
            register({name, email, password});
        }
    };

    if(isAuthenticated){
        return <Redirect to='/' />
    }

    return(
        <Fragment>
        <Header />
        <br />
            <Alerting />
            <div className="login-page">
                <div className="form">
                    <form className="register-form" onSubmit={e => onSubmit(e)}>
                    <input type="text" name="name" value={name} onChange={e => onChange(e)} placeholder="name" />
                    <input type="email" name="email" value={email} onChange={e => onChange(e)} placeholder="email address" />
                    <input type="password" name="password" value={password} onChange={e => onChange(e)} placeholder="password" />
                    <input type="password" name="password2" value={password2} onChange={e => onChange(e)} placeholder="confirm password" />
                    <button>SIGN UP</button>
                    <p className="message">Already registered? <Link to="/login">Sign In</Link></p>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

Register.propTypes = {
setAlert: PropTypes.func.isRequired,
register: PropTypes.func.isRequired,
isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {setAlert, register})(Register);