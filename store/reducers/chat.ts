// redux를 이용할 state마다 해당 파일 생성
import { ActionStrProps, ChatState } from "@store/types/state";
import { RESET_USER, SET_ROOMNAME, SET_USER } from "@store/actions/chat";

const initialState: ChatState = {
  user: "",
  roomId: "",
  roomName: "",
};

export default (state = initialState, action: ActionStrProps) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.str,
      };
    case SET_ROOMNAME:
      return {
        ...state,
        roomName: action.str,
      };
    case RESET_USER:
      return {
        ...state,
        user: (state.user = initialState.user),
      };
    default:
      return state;
  }
};
