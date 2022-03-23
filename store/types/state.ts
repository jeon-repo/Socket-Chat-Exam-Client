export interface ActionProps {
  type: string;
}

export interface ActionStrProps {
  type: string;
  str: string;
}

export interface ChatState {
  user: string;
  roomId: string;
  roomName: string;
}
