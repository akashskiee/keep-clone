import React, {useState, Fragment} from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {createKeep} from '../../actions/keep';
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";
import Collapse from "@material-ui/core/Collapse";

const InputArea = ({createKeep}) => {
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  })

  const {title, content} = formData;

  const onChange = (e) => setFormData({
    ...formData,
    [e.target.name] : e.target.value
  })
  
const onSubmit = (e) => {
  e.preventDefault();
  createKeep(formData);
}

const [isExpanded, setExpand] = useState(false);

function handleExpand(){
  setExpand(true);
}

  return (
    <Fragment>
      <form onSubmit={e => onSubmit(e)} className="create-note">
      <Collapse in={isExpanded}>
        <input name="title" value={title} onChange={e => onChange(e)} autoComplete="off" placeholder="Title" />
        </Collapse>
        <textarea name="content"  onClick={handleExpand} value={content} onChange={e => onChange(e)} placeholder="Take a note..." rows={isExpanded ? "3" : "1"} />
        <Zoom in={isExpanded}>
        <Fab type="submit"><AddIcon /></Fab>
        </Zoom>
        
      </form>
    </Fragment>
  );
}

InputArea.propTypes = {
  createKeep : PropTypes.func.isRequired
}

export default connect(null, {createKeep})(InputArea);