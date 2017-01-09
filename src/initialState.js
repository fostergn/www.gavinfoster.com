import { randomPosition } from './utils';

const initialState = {
  portfolio: {
    dotPos: randomPosition(),
    hovering: false
  }
};

export default initialState;
