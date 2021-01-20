import React, {useState} from "react";
import Footer from "./Footer.jsx"
import Header from "./Header.jsx"
import Note from "./Note.jsx"
// import notes from "../notes.js"
import CreateArea from './CreateArea.jsx'

function App() {

  const [notes, setNotes] = useState([])

  function addNotes(note)
  {
    // console.log(note)
    setNotes(prevNotes => {
      return [...prevNotes, note]
    })
  }

  function deleteNotes(id)
  {
    //console.log('delete triggered '+ id)

    setNotes(prevNotes=>{
      return prevNotes.filter((noteItem, index)=>{
        return id!==index
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea add = {addNotes} />
      {notes.map((note, index)=>{
        return ( 
          <Note key={index} id={index} title={note.title} delete={deleteNotes} content={note.content}/>
        );
      })} 
      <Footer />
    </div>
  );
}

export default App;
