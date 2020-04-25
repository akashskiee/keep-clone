import React from "react";

const InputArea = () => {
  return (
    <div>
      <form className="create-note">
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="Take a note..." rows="3" />
        <button>+</button>
      </form>
    </div>
  );
}

export default InputArea;