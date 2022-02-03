import { useState, useEffect } from "react";

function Name() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(process.env.NODE_ENV);

  useEffect(() => {
    console.log("2 -> ", data);
  }, [data]);

  if (loading) {
    setLoading(false);
    console.log("1 -> ", data);
    setData("1234");
  }

  return (
    <div>
      <h2>네임</h2>
      <style jsx>
        {`
          h2 {
            background-color: pink;
          }
        `}
      </style>
    </div>
  );
}

export default Name;
