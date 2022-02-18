export const ONVIEW = "isView/ONVIEW";
export const OFFVIEW = "isView/OFFVIEW";

export const onView = () => {
  return {
    type: ONVIEW,
  };
};

export const offView = () => {
  return {
    type: OFFVIEW,
  };
};
