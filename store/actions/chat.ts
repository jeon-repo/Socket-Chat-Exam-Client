export const SET_USER = "chat/SET_USER";
export const RESET_USER = "chat/RESET_USER";
export const SET_ROOMNAME = "chat/SET_ROOMNAME";

export const userSet = (name: string) => {
  return {
    type: SET_USER,
    str: name,
  };
};

export const roomNameSet = (name: string) => {
  return {
    type: SET_USER,
    str: name,
  };
};

export const userReset = () => {
  return {
    type: RESET_USER,
  };
};
