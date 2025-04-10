import { useState } from "react";
import { useSelector } from "react-redux";

import MyNotesForm from "./MyNotesForm/MyNotesForm";
import NoteList from "./NoteList/NoteList";

import { useNoteActions } from "../../hooks/useNoteActions";


import styles from "./MyNotes.module.css";

const MyNotes = () => {
  const notes = useSelector((store) => store.notes);
  const [defaultValues, setDefaultValues] = useState({});

  const { addNote: onAddNote, deleteNote, editNote, toggleNoteImportant } = useNoteActions();

  const onStartEditNote = id => {
    const editNote = notes.find(item => item.id === id);
    setDefaultValues(editNote);
  }

  const onEditNote = (payload) => {
    editNote(payload);
    setDefaultValues({});
  }

  const isFormEdit = Boolean(Object.keys(defaultValues).length);

  return (
    <div className={styles.wrapper}>
      <div>
        <MyNotesForm
          submitForm={isFormEdit ? onEditNote : onAddNote}
          defaultValues={defaultValues}
          edit={isFormEdit} />
      </div>
      <div>
        <NoteList
          items={notes}
          onDeleteNote={deleteNote}
          onToggleNoteImportant={toggleNoteImportant}
          edit
          onEditNote={onStartEditNote}
        />
      </div>
    </div>
  );
};

export default MyNotes;