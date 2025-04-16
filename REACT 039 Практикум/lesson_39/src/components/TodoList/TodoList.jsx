import { useState } from 'react';
import { nanoid } from 'nanoid';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import TodoListHeader from "./TodoListHeader/TodoListHeader";
import AddForm from "./AddForm/AddForm";
import List from "./List/List";

// import styles from './TodoList.module.css';

const TodoList = () => {

const [taskItems, setTaskItems] = useState([]);

const onAddTasks = (newTask)=>{
    setTaskItems(prevTasks => [...prevTasks, {...newTask, id: nanoid()}])
}

const onDeleteTask = id =>{
    setTaskItems(prevTasks => prevTasks.filter(item => item.id !== id))
}

    return (
        <main>
            <TodoListHeader />
            <Container>
                <Paper elevation={3} >
                    <Typography variant="h5">Add a New Task</Typography>
                    <AddForm onAddTasks={onAddTasks}/>
                    <List taskItems={taskItems} onDeleteTask={onDeleteTask}/>
                </Paper>
            </Container>
        </main>
    )
};

export default TodoList;