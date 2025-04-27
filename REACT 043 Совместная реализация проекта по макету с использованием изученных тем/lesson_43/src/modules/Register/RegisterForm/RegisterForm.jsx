/** @jsxImportSource @emotion/react */
import { useForm } from "react-hook-form";

import TextField from "../../../shared/components/TextField/TextField";
import Button from "../../../shared/components/Button/Button";

import fields from "./fields";

import { formWrapperStyle } from "./styles"


const RegisterForm = ({ submitForm }) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = values => {
        submitForm(values);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} css={formWrapperStyle}>
            <TextField
                {...fields.username}
                register={register}
                error={errors.username}
            />
            <TextField
                {...fields.email}
                register={register}
                error={errors.email}
            />
            <TextField
                {...fields.password}
                register={register}
                error={errors.password}
            />

            {/* <TextField
                as="textarea"
                name="description"
                register={register}
                placeholder="Description"
            /> */}
            <Button>Register</Button>
        </form>
    )
};

export default RegisterForm;