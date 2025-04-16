import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const TodoListHeader = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        To-Do List
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default TodoListHeader;