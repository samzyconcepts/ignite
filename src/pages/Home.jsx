import { useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "redux";
import { loadGames } from "../actions/gamesAction";

// component
import Game from "../component/Game";

// style and animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
    // FATCH GAME
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);

    // GET THE DATA FROM THE REDUX STATE
    const { popular, newGames, upcoming } = useSelector((state) => state.game);

    return (
        <GameList>
            <h2>Upcoming Games</h2>
            <Games>
                {upcoming.map(game => (
                    <Game key={game.id} name={game.name} released={game.released} image={game.background_image} id={game.id} />
                ))}
            </Games>
        </GameList>
    );
};

const GameList = styled(motion.div)``;
const Games = styled(motion.div)``;

export default Home;
