import {
    MOVE_DOTS,
    UN_HOVER,
} from '../actions/actions';
import { randomPosition } from '../utils';

const portfolioReducer = (state = {}, action) => {
    let previousView = '';
    switch (action.type) {
        case MOVE_DOTS:
            return Object.assign({}, state, {
                dotPos: randomPosition(state.dotPos, action.position),
                currentProject: action.project,
                hovering: true,
            });
        case UN_HOVER:
            return Object.assign({}, state, {
                hovering: false,
            });
        default:
            return state;
    }
};

// Export Reducer
export default portfolioReducer;
