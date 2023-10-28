import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";

// component
import Game from "../component/Game";
import GameDetails from "../component/GameDetails";

// style and animation
import styled from "styled-components";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { fadeIn } from "../animation";

const Home = () => {
    // get location
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];

    // FETCH GAME
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);

    // GET THE DATA FROM THE REDUX STATE
    const { popular, newGames, upcoming, searched } = useSelector((state) => state.games);

    return (
        <GameList variants={fadeIn} initial="hidden" animate="show">
            <LayoutGroup type="crossfade">
                <AnimatePresence>{pathId && <GameDetails pathId={pathId} />}</AnimatePresence>
                {searched.length ? (
                    <div className="searched">
                        <h2>Searched Games</h2>
                        <Games>
                            {searched.map((game) => (
                                <Game
                                    key={game.id}
                                    name={game.name}
                                    released={game.released}
                                    image={game.background_image}
                                    id={game.id}
                                />
                            ))}
                        </Games>
                    </div>
                ) : (
                    ""
                )}
                <h2>Upcoming Games</h2>
                <Games>
                    {upcoming.map((game) => (
                        <Game
                            key={game.id}
                            name={game.name}
                            released={game.released}
                            image={game.background_image}
                            id={game.id}
                        />
                    ))}
                </Games>
                <h2>Popular Games</h2>
                <Games>
                    {popular.map((game) => (
                        <Game
                            key={game.id}
                            name={game.name}
                            released={game.released}
                            image={game.background_image}
                            id={game.id}
                        />
                    ))}
                </Games>
                <h2>New Games</h2>
                <Games>
                    {newGames.map((game) => (
                        <Game
                            key={game.id}
                            name={game.name}
                            released={game.released}
                            image={game.background_image}
                            id={game.id}
                        />
                    ))}
                </Games>
            </LayoutGroup>
        </GameList>
    );
};

const GameList = styled(motion.div)`
    padding: 0 5rem;
    h2 {
        padding: 5rem 0;
    }
`;
const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 5rem 3rem;
`;

export default Home;
