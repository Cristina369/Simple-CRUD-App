import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Do you want to delete thid data ?");
    if (confirm) {
      axios
        .delete("http://localhost:4000/users/" + id)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <h1>List of users</h1>
      <div>
        <div>
          <Link to="/new-user">Add + </Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((datas, index) => (
              <tr key={index}>
                <td>{datas.id}</td>
                <td>{datas.name}</td>
                <td>{datas.email}</td>
                <td>{datas.phone}</td>
                <td>
                  <Link to={`/user/${datas.id}`}>View</Link>
                  <Link to={`/update-user/${datas.id}`}>Edit</Link>
                  <button onClick={(e) => handleDelete(datas.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
