function ReviewsReducer(state = [], action) {
    switch (action.type) {
        case "GET_REVIEWS":
            return action.payload;

        default:
            return state;
    }
}

export default ReviewsReducer;