import React from "react"

const Notes = (props) => {
  const renderNotes = () =>{
    return props.notes.map((note) => {
      return <p> {note.title} </p>
    })
}
  console.log(props)
  return (
    <div> Hello World 
    {renderNotes()}
    </div>
    
  )

}

export default Notes