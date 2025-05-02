import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import MovieAddForm from "./MovieAddForm/MovieAddForm";
import MovieList from "./MovieList/MovieList";

import { sellectAllmovies } from "../../redux/movies/movies-selector";
import { addMovie } from "../../redux/movies/movies-slice";

import styles from "./MyMovies.module.css";

const MyMovies = () => {

    const items = useSelector(sellectAllmovies);
    const dispatch = useDispatch();

    const onAddMovie = useCallback(data => (
        dispatch(addMovie(data))
    ), [dispatch]);

    return (
        <div className={styles.wrapper}>
            <MovieAddForm submitForm={onAddMovie} />
            <MovieList items={items} />
        </div>
    )
};

export default MyMovies;