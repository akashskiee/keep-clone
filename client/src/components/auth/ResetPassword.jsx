import React, {useState, Fragment} from 'react';
import {Redirect} from 'react-router-dom';
import Header from '../layout/Header';
import {connect} from 'react-redux';
import {resetPassword} from '../../actions/auth';
import PropTypes from 'prop-types';
import Alerting from '../layout/Alerting'
import './auth.css';

const ResetPassword = ({ resetPassword, isReset}) => {

    const [formData, setFormData] = useState({
        newPassword: "",
        password2: ''
    });

    const {newPassword, password2} = formData;

    const onChange = e => setFormData({
        ...formData,
        [e.target.name] : e.target.value
    });

    const onSubmit = e => {
        e.preventDefault();
        resetPassword(newPassword);
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
                    <input type="password" name="newPassword" value={newPassword} onChange={e => onChange(e)} placeholder="New password"/>
                     <input type="password" name="password2" value={password2} onChange={e => onChange(e)} placeholder="Retype password"/>
                    <button>Reset your password</button>
                    </form>
                </div>
                </div>
        </Fragment>
    );
}

ResetPassword.propTypes = {
    resetPassword: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
    }

const mapStateToProps = state => ({
    isReset: state.auth.isReset
});

export default connect(mapStateToProps, {resetPassword})(ResetPassword);