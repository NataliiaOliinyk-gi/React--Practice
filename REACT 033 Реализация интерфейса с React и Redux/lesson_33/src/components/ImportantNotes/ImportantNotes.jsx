import { useSelector } from "react-redux";

import NoteList from "../MyNotes/NoteList/NoteList";

import { useNoteActions } from "../../hooks/useNoteActions";

const ImportantNotes = () => {

  const importantNotes = useSelector((store) =>
    store.notes.filter((item) => item.important)
  );

  const { deleteNote, toggleNoteImportant } = useNoteActions();

  return <NoteList
    items={importantNotes}
    onDeleteNote={deleteNote}
    onToggleNoteImportant={toggleNoteImportant}
  />;
};

export default ImportantNotes;