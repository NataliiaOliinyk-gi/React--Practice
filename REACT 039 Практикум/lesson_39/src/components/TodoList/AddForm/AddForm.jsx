import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { useId } from 'react';


const AddForm = ({ onAddTasks }) => {

    const taskId = useId();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = values => {
        onAddTasks(values);
        reset();
    }

    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ display: 'flex', gap: "10px", padding: "5px", alignItems: "center" }}>
                <TextField {...register("task", { required: "Task requared" })} fullWidth id={taskId}
                    placeholder='Enter a Task' variant="outlined"
                    error={Boolean(errors.task)} helperText={errors.task?.message} />
                <Button variant="contained" type='submit'>ADD</Button>

            </Box>

        </form>
    )
};

export default AddForm;