import React, { useState } from 'react';
import ColorPicker from './ColorPicker.jsx';

function TodoCreate() {
    const [notes, setNotes] = useState([]); // State where we will store the notes
    const [noteText, setNoteText] = useState(''); // Textarea content
    const [noteColor, setNoteColor] = useState('#ffffff'); // Picked color
    const [searchTerm, setSearchTerm] = useState(''); // For searching state

    // Add new note function 
    const addNote = () => {
        if (noteText.trim()) { // If note is not empty, add
            setNotes([...notes, {text: noteText, color: noteColor}]);
            setNoteText(''); // Clear textarea
        }
    };

    // Function that calculates filtered grades
    const filteredNotes = notes.filter(note =>
        note.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <input type='text'className='search-button' placeholder='Search...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            <div className='note-container'>
                <textarea placeholder='Enter your note here...' value={noteText} onChange={(e) => setNoteText(e.target.value)}/>                
                <div className='color-button'>
                    {/* Add ColorPicker component */}
                    <ColorPicker onColorSelect={setNoteColor} />
                    <button onClick={addNote} className='add-button'>ADD</button>
                </div>
            </div>
            <div className='notes-list'>
                {filteredNotes.map((note, index) => (
                    <div key={index} className='note-item' style={{backgroundColor: note.color}} >
                        {note.text}
                    </div>
                ))}
            </div>
        </>        
    );
}

export default TodoCreate;