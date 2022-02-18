// redux를 이용할 state마다 해당 파일 생성
import {
  CLEAR_RECYCLE,
  DECREASE_RECYCLE,
  INCREASE_RECYCLE,
} from "@store/actions/recycle";
import { ActionProps, CountRecycleState } from "@store/types/state";

const initialState: CountRecycleState = {
  recycle: 0,
};

export default (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case INCREASE_RECYCLE:
      return {
        ...state,
        recycle: (state.recycle += 1),
      };
    case DECREASE_RECYCLE:
      return {
        ...state,
        recycle: (state.recycle -= 1),
      };
    case CLEAR_RECYCLE:
      return {
        ...state,
        recycle: initialState.recycle,
      };
    default:
      return state;
  }
};
