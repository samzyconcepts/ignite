const initState = {
    popular: [],
    newGames: [],
    upcoming: [],
    searched: [],
};

const gameReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_DATA":
            return {
                ...state,
                popular: action.payload.popular,
                newGames: action.payload.newGames,
                upcoming: action.payload.upcoming,
            };
        default:
            return { ...state };
    }
};

export default gameReducer;
