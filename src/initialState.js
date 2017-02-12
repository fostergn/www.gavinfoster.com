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
      messages: [],
      isTyping: false
    },
  }
};

export default initialState;
