import { RootState } from "@store/reducers";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function NameView({ name }: any) {
  const { user } = useSelector((state: RootState) => state.chat);

  useEffect(() => {}, [user]);

  return <h1>{user}</h1>;
}

export default NameView;
