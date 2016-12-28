import {
    TOGGLE_VIEW,
} from '../actions/actions';

const rootReducer = (state = {}, action) => {
    let previousView = '';
    switch (action.type) {
        case TOGGLE_VIEW:
            return Object.assign({}, state, {
                view: !state.view,
            });
        default:
            return state;
    }
};

// Export Reducer
export default rootReducer;
