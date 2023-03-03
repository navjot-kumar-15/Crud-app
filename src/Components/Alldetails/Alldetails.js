import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../../service/api.js";
import { Link } from "react-router-dom";
import "./Alldetails.css";
function Alldetails() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = async () => {
    let res = await getUsers();
    setUsers(res.data);
  };

  const deleteUserIn = async (id) => {
    await deleteUser(id);
    getAllUser();
  };
  return (
    <>
      <h1 className=" text-center mt-5 all-heading">All Details are here..</h1>
      <table className="table table-hover">
        <thead className="thead">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.Name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>

              <td>
                <Link className="mx-3" to={`/edit/${user._id}`}>
                  {" "}
                  <i className="fa-solid fa-pen-to-square"></i>
                </Link>

                <Link className="mx-3" onClick={() => deleteUserIn(user._id)}>
                  <i className="fa-solid fa-trash"></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Alldetails;
