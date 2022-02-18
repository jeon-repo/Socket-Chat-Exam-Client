export const INCREASE_RECYCLE = "counter/INCREASE_RECYCLE";
export const DECREASE_RECYCLE = "counter/DECREASE_RECYCLE";
export const CLEAR_RECYCLE = "counter/CLEAR_RECYCLE";

export const recycleUp = () => {
  return {
    type: INCREASE_RECYCLE,
  };
};

export const recycleDown = () => {
  return {
    type: DECREASE_RECYCLE,
  };
};

export const recycleClear = () => {
  return {
    type: CLEAR_RECYCLE,
  };
};
