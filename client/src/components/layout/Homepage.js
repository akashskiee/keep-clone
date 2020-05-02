import React, {Fragment, useEffect} from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import InputArea from './InputArea';
import Note from './Note';
import Alerting from '../layout/Alerting';
import PropTypes from 'prop-types';
import {getKeeps} from '../../actions/keep';
import Skeleton from '@material-ui/lab/Skeleton';


const Homepage = ({getKeeps, keep : {keeps , loading }, auth: {user}}) => {
   
    useEffect(() => {
        if(user && user._id) {
        getKeeps(user._id);
        }
    }, [getKeeps, user]);
    return(
        <Fragment>
            <Header />
            <Alerting />
            <InputArea />
            {loading ? (
                <Fragment>
                <Skeleton className="note-skeleton" varient="rect" width={240} height={118} animation="wave" />
                <Skeleton className="note-skeleton" varient="rect" width={240} height={118} animation="wave" />
                <Skeleton className="note-skeleton" varient="rect" width={240} height={118} animation="wave" />
                <Skeleton className="note-skeleton" varient="rect" width={240} height={118} animation="wave" />
                 </Fragment>) : (<Fragment>
                {(keeps.map(keep => (
               <Note key={keep._id} keep={keep} />
                )))}
            </Fragment>)}
        </Fragment>
    );
}


Homepage.propTypes = {
getKeeps: PropTypes.func.isRequired,
keep: PropTypes.object.isRequired,
auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    keep : state.keep,
    auth: state.auth
});

export default connect(mapStateToProps, {getKeeps})(Homepage);
