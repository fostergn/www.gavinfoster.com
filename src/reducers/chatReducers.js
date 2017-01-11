import {
    TOGGLE_CHAT,
    ADD_MESSAGE_TO_CONVERSATION,
    UPDATE_CONVERSATION,
} from '../actions/actions';

const rootReducer = (state = {}, action) => {
    let previousView = '';
    switch (action.type) {
        case TOGGLE_CHAT:
            return Object.assign({}, state, {
                isChatOpen: !state.isChatOpen,
            });
        case ADD_MESSAGE_TO_CONVERSATION:
            return Object.assign({}, state, {
              conversation:
                Object.assign({}, state.conversation, {
                  messages: [...state.conversation.messages, action.message]
                })
            });
          case UPDATE_CONVERSATION:
            return Object.assign({}, state, {
              conversation: {
                  isTyping: action.conversation.isTyping,
                  isConnected: action.conversation.isConnected,
                  lastChat: action.conversation.lastChat,
                  messages: state.conversation.messages
                }
            });
        default:
            return state;
    }
};

// Export Reducer
export default rootReducer;
