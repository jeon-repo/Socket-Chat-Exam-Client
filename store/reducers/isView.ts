// redux를 이용할 state마다 해당 파일 생성
import { ActionProps, IsViewState } from "@store/types/state";
import { OFFVIEW, ONVIEW } from "@store/actions/isView";

const initialState: IsViewState = {
  isView: true,
};

export default (state=initialState, action: ActionProps) => {
  switch (action.type) {
    case ONVIEW:
      return {
        ...state,
        isView: (state.isView = true),
      };
    case OFFVIEW:
      return {
        ...state,
        isView: (state.isView = false),
      };
    default:
      return state;
  }
};