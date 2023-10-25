import axios from "axios";
import { popularGamesURL, newGamesURL, upcomingGamesURL } from "../api";

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
