const initState = {
    popular: [],
    newGames: [],
    upcoming: [],
    searched: [],
};

const gameReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_DATA":
            return { ...state, popular: action.payload.popular };
        default:
            return { ...state };
    }
};

export default gameReducer;
