import { useForm } from "react-hook-form";
import { useId } from "react";

import styles from "./MovieAddForm.module.css";

const MovieAddForm = ({ submitForm }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const titleId = useId();
    const directorId = useId();
    const releaseYearId = useId();
    const favoriteId = useId();
    const genreId = useId();

    const onSubmit = values => {
        console.log(values);
        submitForm(values);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.block}>
                <label htmlFor={titleId}>Movie title:</label>
                <input
                    {...register("title", { required: "Title required" })}
                    placeholder="Movie title"
                    type="text" id={titleId}
                />
                {errors.title && <p className={styles.error}>{errors.title.message}</p>}
            </div>
            <div className={styles.block}>
                <label htmlFor={directorId}>Movie director:</label>
                <input
                    {...register("director")}
                    placeholder="Movie Director"
                    type="text" id={directorId}
                />
            </div>
            <div className={styles.block}>
                <label htmlFor={releaseYearId}>Movie release year:</label>
                <input
                    {...register("releaseYear")}
                    placeholder="Movie release year"
                    type="number" id={releaseYearId}
                />
            </div>
            <div className={styles.block}>
                <label htmlFor={favoriteId}>Movie favorite:</label>
                <input
                    {...register("favorite")}
                    type="checkbox" id={favoriteId}
                />
            </div>
            <div className={styles.block}>
                <label htmlFor={genreId}>Movie genre:</label>
                <select
                    {...register("genre")} id={genreId}>
                    <option value="film">Film</option>
                    <option value="serial">Serial</option>
                    <option value="cartoon">Cartoon</option>
                </select>
            </div>

            <button type="submit">Add movie</button>
        </form>
    )
};

export default MovieAddForm;