import { Heading } from "rsuite";

import CompletedTodoList from "../../modules/ToDoList/CompletedTodoList/CompletedTodoList";

const CompletedPage = () => {
    return (
        <main>
            <Heading level={1}>Completed To Do</Heading>
            <CompletedTodoList />
        </main>
    )
};

export default CompletedPage;