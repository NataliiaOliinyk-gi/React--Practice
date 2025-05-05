import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchDogs } from "../../redux/dogs/dogs-thunks";
import { sellectDogs } from "../../redux/dogs/dogs-selector";

const DogsList = () => {

    const dispatch = useDispatch();

    const { items, loading, error } = useSelector(sellectDogs);

    useEffect(() => {
        dispatch(fetchDogs())
    }, [dispatch]);

    const elements = items.map(item => (
        <li key={item.id} style={{margin: "20px"}}>
            <p style={{ color: "green", fontWeight: "600px", fontSize: "20px" }}>{item.name}</p>
            <p>{item.temperament}</p>
        </li>
    ))

    return (
        <div>
            <h2 style={{ color: "blue", fontWeight: "800px", fontSize: "32px", textAlign: "center" }}>
                Dog breeds
            </h2>
            <ul style={{margin: "20px"}}>
                {elements}
            </ul>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    )
};

export default DogsList;