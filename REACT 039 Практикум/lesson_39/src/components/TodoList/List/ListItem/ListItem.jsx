import { Box } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const ListItem = ({ id, task, onDeleteTask }) => {


    return (
        <Box sx={{ display: 'flex', justifyContent: "space-between", margin: "5px" }}>
            <FormControlLabel control={<Checkbox />} label={task} />
            <Button onClick={() => onDeleteTask(id)} variant="text">Delete</Button>
        </Box>
    )
};

export default ListItem;