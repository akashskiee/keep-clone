import React from "react";
import {deleteKeep} from '../../actions/keep';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


const Note = ({keep : {_id, title, content}, deleteKeep}) => {
    return (
    <div className="note">
        <h1>{title}</h1>
        <p>{content}</p>
        <button onClick={e => deleteKeep(_id)}>X</button>
    </div>
    )
}

Note.propTypes = {
    deleteKeep : PropTypes.func.isRequired
}


export default connect(null,{deleteKeep})(Note);