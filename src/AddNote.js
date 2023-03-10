import { useState } from "react";


const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');
    const charlimit=200;

    const handleChange = (event) => {
        // checking the text hasnt reached the character limit
        if(charlimit - event.target.value.length>=0){
            setNoteText(event.target.value);
        }
    }

    //to save
    const handleSaveClick = () => {
        //checking user typed a valid note before we add it to state.trim removes the white space at strt and end
        if(noteText.trim().length>0){
            handleAddNote(noteText)  //can acess addNote{handleaddnote} in app.js
        //resteing the form
        setNoteText('');
        }
     }



    return (
        <div className="note new ">
            <textarea rows='8' cols='10' placeholder="Type to add ..."
                value={noteText}
                onChange={handleChange}>
            </textarea>

            <div className="note-footer">
                <small className="small">{charlimit-noteText.length} remining</small>
                <button className="save" onClick={handleSaveClick}>ADD</button>
            </div>
        </div>
    )
}

export default AddNote;