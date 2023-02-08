const updateUserDetailReducer = (state = { user: [] }, action) => {
    switch (action.type) {
        case "updateUerDetail":
            return {
                ...state,
                user: [...state.user, action.payload]
            }
        default: return state;
    }
}
export default updateUserDetailReducer;