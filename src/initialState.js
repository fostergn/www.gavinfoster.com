import { randomPosition } from './utils';

const initialState = {
  portfolio: {
    dotPos: randomPosition(),
    hovering: false,
    currentProject: {},
  },
  chat: {
    isChatOpen: false,
    conversation: {
      messages: []
    }
  }
};

export default initialState;
