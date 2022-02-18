// redux를 이용할 state마다 해당 파일 생성
import { ActionProps, CountState } from "@store/types/state";
import { DECREASE_DISPOSA, INCREASE_DISPOSA } from "@store/actions/disposable";

const initialState: CountState = {
  disposable: 0,
};

export default (state=initialState, action: ActionProps) => {
  switch (action.type) {
    case INCREASE_DISPOSA:
      return {
        ...state,
        disposable: (state.disposable += 1),
      };
    case DECREASE_DISPOSA:
      return {
        ...state,
        disposable: (state.disposable -= 1),
      };
    default:
      return state;
  }
};