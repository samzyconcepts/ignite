import { useEffect } from "react";

// Redux
import { useDispatch } from "redux";
import { loadGames } from "../actions/gamesAction";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadGames());
    });

    return <h1>Home</h1>;
};

export default Home;
