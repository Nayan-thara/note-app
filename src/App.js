import { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from 'nanoid'
import Search from "./components/Search";

const App = () => {
  // we r activily changind data so using state  &  storing notes as arry
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'NOTE 1',
      date: '15/9/2012',
    },
    {
      id: nanoid(),
      text: 'NOTE 2',
      date: '17/9/2012',
    },
  ]);



  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data'));
    if(savedNotes){
      setNotes(savedNotes);
    }
  },[]);
  //save note to LS
  useEffect(() => {
    localStorage.setItem('react-notes-app-data', 
    JSON.stringify(notes));
  }, [notes]);


  

  const addNote = (text) => {
    // console.log(text);
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  //creating hook for search elemnt
  const [searchText, setSearchText] = useState('');



  //delete note
  const deleteNote = (id) => {
    const newNotes = notes.filter((notes) => notes.id !== id);  // except the note with specified id all other notes are saved to newNotes
    setNotes(newNotes)
  }

  return <div className="container">

    <h1>NOTES : </h1>

    <Search handleSearchNote={setSearchText} />

    {/* prop  -> notelist.js 
     passing fn addNote  to noteslist as a prop*/}
    <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
      handleAddNote={addNote}
      handleDeleteNote={deleteNote} />
  </div>
};


export default App;