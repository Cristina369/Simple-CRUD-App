import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>List of users</h1>
      <div>
        {data.map((datas, index) => {
          <h1 key={index}>{datas.name}</h1>;
        })}
      </div>
    </div>
  );
}

export default Home;
