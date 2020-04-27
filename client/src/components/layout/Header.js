import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Header = ({auth: {isAuthenticated, loading}, logout}) => {
    const authLinks = (
        <ul className="navbar-nav">
             <li className="nav-item"><a href="#!" className="icon-button"><AccountCircleIcon /></a></li>
             <li className="nav-item"><a href="#!" onClick={logout} className="icon-button"><ExitToAppIcon /></a></li>
         </ul>  
            
    );

    const notAuthLinks = (
        <ul className="navbar-nav">
             <li className="nav-item"><Link to="/login" className="navlink">Login</Link></li>
             <li className="nav-item"><Link to="/register" className="navlink">Register</Link></li>
         </ul>  
    );

    return(
        <div>
        <nav className="navbar">
        <h1 className="heading">Keeper</h1>
        {!loading && (<Fragment>{isAuthenticated ? authLinks : notAuthLinks}</Fragment>)}
        </nav>
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