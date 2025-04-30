import { useForm, Controller } from 'react-hook-form';
// import { useId } from 'react';
import { Input, Button, Form } from 'rsuite';
import FormGroup from 'rsuite/esm/FormGroup';

const ToDoListForm = ({ submitForm }) => {

    // const todoId = useId();
    // const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const defaultValues = { todo: '' };
    const { control, handleSubmit, reset } = useForm({ defaultValues });

    const onSubmit = values => {
        submitForm(values);
        reset();
    }
    return (
        <Form onSubmit={handleSubmit(onSubmit)} >

            <FormGroup>
                <Controller
                    name="todo"
                    control={control}
                    render={({ field }) => (
                        <Input
                            id={field.name}
                            value={field.value}
                            onChange={value => field.onChange(value)}
                            placeholder="Enter new todo"
                        />
                    )}
                />
                {/* <Form.ControlLabel id={todoId}>New todo</Form.ControlLabel>
                <Input
                    {...register("todo", {
                        required: "Todo must be exist",
                    })}
                    placeholder="Enter new todo"
                    id={todoId}
                /> */}



                <Button appearance="primary" type="submit">
                    Add todo
                </Button>
            </FormGroup>


        </Form>
    )
};

export default ToDoListForm;