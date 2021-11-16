import React from "react";

const NoteNew = () => {
  return (
    <>
      <h1>New Note</h1>
      <form>
        <p>Title</p>
        <input />
        <p>Author </p>
        <input />
        <p>Body</p>
        <textarea />
        <br />
        <button type="submit">add</button>
      </form>
    </>
  );
};
export default NoteNew;