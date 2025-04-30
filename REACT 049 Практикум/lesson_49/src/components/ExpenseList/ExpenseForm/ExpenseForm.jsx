import { useForm } from "react-hook-form";

const ExpenseForm = ({ submitForm }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (values) => {
        // console.log(values)
        submitForm(values);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: "Name required" })}
                type="text" placeholder="Name" />
            {errors.name &&
                <p style={{ color: "red" }}>
                    {errors.name.message}
                </p>}
            <input {...register("amount", { required: "Name required" })}
                type="text" placeholder="Amount" />
            {errors.amount &&
                <p style={{ color: "red" }}>
                    {errors.amount.message}
                </p>}
            <button>Add Expence</button>
        </form>
    )
};

export default ExpenseForm;