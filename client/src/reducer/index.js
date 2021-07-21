export const initialState = 'idle';

export const statusReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return 'loading';

        case 'SET_LOADED':
            return 'loaded';

        case 'SET_ERROR':
            return 'error';

        default:
            return state;
    }
};
