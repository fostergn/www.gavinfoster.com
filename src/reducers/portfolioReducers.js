import {
    MOVE_DOTS,
    UN_HOVER,
    INIT_PROJECT,
    TOGGLE_DRAWING,
} from '../actions/actions';
import { randomPosition } from '../utils';

const portfolioReducer = (state = {}, action) => {
    let previousView = '';
    switch (action.type) {
      case TOGGLE_DRAWING:
        return Object.assign({}, state, {
          isDrawing: !state.isDrawing
        })
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
      case INIT_PROJECT:
        return Object.assign({}, state, {
            currentProject: action.project,
        });
      default:
        return state;
    }
};

// Export Reducer
export default portfolioReducer;
