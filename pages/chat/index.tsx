import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";

import { userSet } from "@store/actions/chat";
import { RootState } from "@store/reducers";

var socket = io("http://localhost:5000");

interface MyInfo {
  nickname: string | null;
  id: string | null;
  room: {
    roomId: string | null;
    roomName: string | null;
  };
}

// component
const Index: React.FC = () => {
  const dispatch = useDispatch();
  const { user, roomId, roomName } = useSelector(
    (state: RootState) => state.chat,
  );

  const setUser = useCallback(
    (name) => {
      dispatch(userSet(name));
    },
    [dispatch],
  );

  const [myInfo, setMyInfo] = useState<MyInfo>({
    nickname: null,
    id: null,
    room: {
      roomId: null,
      roomName: null,
    },
  });
  const [chat, setChat] = useState<string>("");

  useEffect(() => {
    socket.on("connect", function () {
      console.log("Connected");
      socket.emit("setInit", { user }, (response: any) => {
        myInfo.nickname = response.nickname;
        myInfo.id = socket.id;
        myInfo.room = response.room;
        setUser(myInfo.nickname);
      });
    });
  });

  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default Index;
