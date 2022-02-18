export const INCREASE_DISPOSA = "counter/INCREASE_DISPOSA";
export const DECREASE_DISPOSA = "counter/DECREASE_DISPOSA";

export const disposableUp = () => {
  return {
    type: INCREASE_DISPOSA,
  };
};

export const disposableDown = () => {
  return {
    type: DECREASE_DISPOSA,
  };
};
