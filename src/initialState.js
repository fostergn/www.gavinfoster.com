import { randomPosition } from './utils';

const initialState = {
  portfolio: {
    dotPos: randomPosition(),
    hovering: false,
    currentProject: {},
  }
};

export default initialState;
