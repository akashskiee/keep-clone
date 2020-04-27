import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth';

const Header = ({auth: {isAuthenticated, loading}, logout}) => {
    const authLinks = (
        <header>
                <h1>Keep</h1>
                <a onClick={logout} href="#!">Logout</a>
            </header>
    );

    const notAuthLinks = (
        <header>
                <h1>Keep</h1>
            </header>
    );

    return(
        <div>
            {!loading && (<Fragment>{isAuthenticated ? authLinks : notAuthLinks}</Fragment>)}
        </div>
    )};

Header.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});


export default connect(mapStateToProps, {logout})(Header);