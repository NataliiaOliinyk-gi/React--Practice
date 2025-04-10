import { useDispatch } from "react-redux";

import {
    addNoteToStore,
    deleteNoteFromStore,
    editNoteInStore,
    toggleNoteImportantInStore,
} from "../redux/actions";

export const useNoteActions = () => {

    const dispatch = useDispatch();

    const addNote = (data) => {
        dispatch(addNoteToStore(data));
    };

    const deleteNote = (id) => {
        dispatch(deleteNoteFromStore(id));
    };

    const editNote = payload => {
        dispatch(editNoteInStore(payload));
    }

    const toggleNoteImportant = (id) => {
        dispatch(toggleNoteImportantInStore(id));
    };

    return {
        addNote,
        deleteNote,
        editNote,
        toggleNoteImportant
    }

};