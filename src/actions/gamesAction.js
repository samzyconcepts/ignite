import axios from "axios";
import { popularGamesURL, newGamesURL, upcomingGamesURL, searchedGameURL } from "../api";

// Action Creator

export const loadGames = () => async (dispatch) => {
    // Fetch AXIOS
    const popularGamesData = await axios.get(popularGamesURL());
    const newGamesData = await axios.get(newGamesURL());
    const upcomingGamesData = await axios.get(upcomingGamesURL());

    dispatch({
        type: "FETCH_DATA",
        payload: {
            popular: popularGamesData.data.results,
            upcoming: upcomingGamesData.data.results,
            newGames: newGamesData.data.results,
        },
    });
};

export const fetchSearch = (game_name) => async (dispatch) => {
    const searchGames = await axios.get(searchedGameURL(game_name));

    dispatch({
        type: "FETCH_SEARCHED",
        payload: { searched: searchGames.data.results },
    });
};
