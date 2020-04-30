import React from "react";


const Note = ({keep : {title, content}}) => {
    return (
    <div className="note">
        <h1>{title}</h1>
        <p>{content}</p>
        <button>X</button>
    </div>
    )
}

export default Note;