import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import ss from 'socket.io-stream';

import { userReset, userSet } from "@store/actions/chat";
import { RootState } from "@store/reducers";
import NameView from "./NameView";

var socket = io("http://172.29.6.61:5000");

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
  const [roomView, setRoomView] = useState<any>();
  const { user, roomId, roomName } = useSelector(
    (state: RootState) => state.chat,
  );

  const setUser = useCallback(
    (name) => {
      dispatch(userSet(name));
    },
    [dispatch],
  );

  const resetUser = useCallback(() => {
    dispatch(userReset());
  }, [dispatch]);

  const [myInfo, setMyInfo] = useState<MyInfo>({
    nickname: null,
    id: null,
    room: {
      roomId: null,
      roomName: null,
    },
  });

  useEffect(() => {
    if (user !== "") {
      window.addEventListener("beforeunload", function () {
        socket.emit("sendMessage", "Disconnected");
        socket.close();
      });
    }

    if (user === "") {
      console.log("index effect 2");
      socket.on("connect", function () {
        console.log("Connected");
        socket.emit("setInit", { user }, (response: any) => {
          myInfo.nickname = response.nickname;
          myInfo.id = socket.id;
          myInfo.room = response.room;
          setUser(myInfo.nickname);
        });
        console.log("index effect -> ", roomView);
        socket.emit("getChatRoomList", null, (res: any) => {
          setRoomView(res.roomId);
        });
      });
    }
  }, [roomView]);

  useEffect(() => {
    socket.on("getMessage", function ({ id, nickname, message }: any) {
      console.log(`[${nickname}]: ${message}`);
      setRoomView(message);
    });
  });

  const onCreate = () => {
    socket.emit("createChatRoom", myInfo.nickname, (response: any) => {
      console.log("createRoom -> ", response);
      setRoomView(response.roomId);
      socket.emit("getChatRoomList", null);
    });
    // socket.on("connect", function () {
    //   console.log("Connected");
    //   socket.emit("setInit", { user }, (response: any) => {
    //     myInfo.nickname = response.nickname;
    //     myInfo.id = socket.id;
    //     myInfo.room = response.room;
    //     setUser(myInfo.nickname);
    //   });
    // });
  };

  const onClick = () => {
    var msg = document.getElementById("msgbox");
    if (msg.value) {
      socket.emit("sendMessage", msg.value);
      msg.value = "";
    } else {
      alert("메시지를 입력후 전송하세요.");
    }
  };

  const onReset = () => {
    resetUser();
    socket.emit("socketReset");
  };

  const onEnter = () => {
    var msg = document.getElementById("msgbox");
    socket.emit("enterChatRoom", msg.value, (res: any) => {
      console.log("EnterChatRoom -> ", res);
    });
  };

  const onReadMan = () => {
    var msg = document.getElementById("msgbox");
    socket.emit("getChatRoomMan", msg.value);
  };

  const onSendFile = () => {
    var fn = document.getElementById('file');
    var fnSize = fn?.size;
    var uploadedSize = 0;
    var stream = ss.createStream();
    ss(socket).emit('uploadFile', stream);
    var blobstream = ss.createBlobReadStream(fn);
    blobstream.on('data', function(chunk) {
      uploadedSize += chunk.length;
      console.log('updated >> ', uploadedSize, '/', fnSize);
    })
    blobstream.pipe(stream);
  }

  return (
    <div>
      <NameView name={user} />
      <div>
        <input type="text" name="msgbox" id="msgbox" />
        <button type="button" onClick={onClick}>
          전송
        </button>
      </div>
      <div>
        <button type="button" onClick={onCreate}>
          방 생성
        </button>
      </div>
      <div></div>
      <div>
        <button type="button" onClick={onReset}>
          소켓 리셋
        </button>
      </div>
      <div>{roomView}</div>
      <div>
        <button type="button" onClick={onEnter}>
          방 입장
        </button>
      </div>
      <div>
        <button type="button" onClick={onReadMan}>
          방 사람 조회
        </button>
      </div>
      <div>
        <input type="file" name="file" id="file" />
        <button type="button" onClick={onSendFile}>
          파일 전송
        </button>
      </div>
    </div>
  );
};

export default Index;
