import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ViewUser() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:4000/users/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div>
        <h3>User details</h3>
        <div>
          <strong>Name: {data.name}</strong>
        </div>
        <div>
          <strong>Email: {data.email}</strong>
        </div>
        <div>
          <strong>Phone: {data.phone}</strong>
        </div>
        <Link to={`/update/${id}`}>Edit</Link>
        <Link to="/">Back</Link>
      </div>
    </div>
  );
}

export default ViewUser;
