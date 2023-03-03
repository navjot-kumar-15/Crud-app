import React, { useEffect, useState } from "react";
import "./Edit.css";
import { editUser, getUser } from "../../service/api.js";
import { useNavigate, useParams } from "react-router-dom";

const initialValue = {
  Name: "",
  username: "",
  email: "",
  phone: "",
};

function Edit() {
  const [user, setUser] = useState(initialValue);
  const { Name, username, email, phone } = user;
  //   Getting the user id from the URL
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    loadUserDetails();
  }, []);

  //Getting the details of the single user
  const loadUserDetails = async () => {
    const response = await getUser(id);
    setUser(response.data);
  };

  const editUserDetail = async () => {
    await editUser(user, id);
    navigate("/all");
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="main-form">
        <h2 className="mb-3">Edit user</h2>
        <div className="form-floating mb-3">
          <input
            type="text"
            id="my-input"
            className="form-control input-form"
            placeholder="Enter your Name here"
            onChange={(e) => onValueChange(e)}
            name="Name"
            value={Name}
          />
          <label htmlFor="name">Name</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control input-form"
            id="my-input"
            placeholder="Enter your username here"
            onChange={(e) => onValueChange(e)}
            name="username"
            value={username}
          />
          <label htmlFor="username">Username</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control input-form"
            id="my-input"
            placeholder="Enter your email here"
            onChange={(e) => onValueChange(e)}
            name="email"
            value={email}
          />
          <label htmlFor="email">Email</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control input-form"
            id="my-input"
            placeholder="Enter your Phone Number"
            onChange={(e) => onValueChange(e)}
            name="phone"
            value={phone}
          />
          <label htmlFor="phone">Phone</label>
        </div>
        <div
          className="btn btn-primary btn-add"
          onClick={() => editUserDetail()}
        >
          Edit
        </div>
      </div>
    </>
  );
}

export default Edit;
