import React, {useState, Fragment} from 'react';
import {Redirect} from 'react-router-dom';
import Header from '../layout/Header';
import {connect} from 'react-redux';
import {resetPassword} from '../../actions/auth';
import PropTypes from 'prop-types';
import Alerting from '../layout/Alerting'
import './auth.css';

const ForgotPassword = ({ resetPassword, isReset}) => {

    const [formData, setFormData] = useState({
        email: ""
    });

    const {email} = formData;

    const onChange = e => setFormData({
        ...formData,
        [e.target.name] : e.target.value
    });

    const onSubmit = e => {
        e.preventDefault();
        resetPassword(email);
    };

    if(isReset){
        return <Redirect to='/login' />
    }
    return(
        <Fragment>
        <Header page="Login" />
        <br />
        <Alerting />
            <div className="login-page" onSubmit={e => onSubmit(e)}>
            <h1 className="auth-header">Reset you password</h1>
                <div className="form">
                    <form className="login-form">
                    <input type="email" name="email" value={email} onChange={e => onChange(e)} placeholder="email"/>
                    <button>Reset your password</button>
                    </form>
                </div>
                </div>
        </Fragment>
    );
}

ForgotPassword.propTypes = {
    resetPassword: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
    }

const mapStateToProps = state => ({
    isReset: state.auth.isReset
});

export default connect(mapStateToProps, {resetPassword})(ForgotPassword);