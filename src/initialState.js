import { randomPosition } from './utils';

const initialState = {
  portfolio: {
    dotPos: randomPosition(),
    hovering: false,
    currentProject: {},
    isDrawing: false,
  },
  chat: {
    isChatOpen: false,
    conversation: {
      messages: []
    }
  }
};

export default initialState;
