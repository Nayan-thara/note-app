import Note from "./Note";
import AddNote from "../AddNote";

// destructuring props to get the passed notes
const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
    return (
        <div className="notes-list">
            {notes.map((note) => (
                <Note id={note.id} 
                      text={note.text} 
                      date={note.date}
                      handleDeleteNote={handleDeleteNote}/> //passing to note compont
            ))}

            {/* passing to ADDnote compont */}
            <AddNote handleAddNote={handleAddNote} />

        </div>
    )
};

export default NotesList;