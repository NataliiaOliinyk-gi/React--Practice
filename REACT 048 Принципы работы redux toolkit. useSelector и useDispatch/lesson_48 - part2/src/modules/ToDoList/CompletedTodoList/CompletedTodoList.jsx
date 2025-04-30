import { useSelector } from "react-redux";

import ToDoListItems from "../ToDoListItems/ToDoListItems";

import { selectCompletedTodo } from "../../../redux/todo/todo-selector";

const CompletedTodoList = () => {

    const items = useSelector(selectCompletedTodo);

    return (
        <section>
            <ToDoListItems items={items} />
        </section>
    )
};

export default CompletedTodoList;