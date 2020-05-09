import React, {useState, Fragment} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Header from '../layout/Header';
import {connect} from 'react-redux';
import {login} from '../../actions/auth';
import PropTypes from 'prop-types';
import Alerting from '../layout/Alerting';
import './auth.css';

const Login = ({ login, isAuthenticated}) => {

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
        login(email, password);
    };

    if(isAuthenticated){
        return <Redirect to='/' />
    }
    return(
        <Fragment>
        <Header page="Register" />
        <br />
        <Alerting />
            <div className="login-page" onSubmit={e => onSubmit(e)}>
                <div className="form">
                    <form className="login-form">
                    <input type="email" name="email" value={email} onChange={e => onChange(e)} placeholder="email"/>
                    <input type="password" name="password" value={password} onChange={e => onChange(e)} placeholder="password"/>
                    <button>login</button>
                    <p className="message">Not registered? <Link to="/register">Create an account</Link></p>
                    <p className=""> </p>
                    <Link to="/forgot-password"><p className="message">Forgot your password?</p></Link>
                    </form>
                </div>
                </div>
        </Fragment>
    );
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
    }

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {login})(Login);