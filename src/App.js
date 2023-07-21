import React, { useState } from "react";

import Header from './Components/Header';
import Note from './Components/Note';
import Footer from './Components/Footer';
import CreateArea from "./Components/CreateArea";

// import notes from './notes';

// function createNotes(noteItem){
//   return <Note
//     key = {noteItem.key}
//     title = {noteItem.title}
//     content = {noteItem.content}
//   />;
// }

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote]
    })
  }
  
  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea
        onAdd={addNote}
      />
      {notes.map((noteItem, index) => {
        return <Note
          key = {index}
          id = {index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete = {deleteNote}
        />
      })}
      {/* {notes.map(createNotes)} */}
      <Footer />
    </div>

  );
}

export default App;
