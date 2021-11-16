import React from "react";

const Note = (props) => {
  const { title, author, description } = props.page;
  return (
    <>
      <h1>{title}</h1>
      <p>{author}</p>
      <p>{description}</p>
    </>
  );
};
export default Note;