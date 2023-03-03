import React, { useState } from "react";
import "./Adduser.css";
import { addUser } from "../../service/api.js";
import { useNavigate } from "react-router-dom";

const initialValue = {
  Name: "",
  username: "",
  email: "",
  phone: "",
};

function Adduser() {
  const [user, setUser] = useState(initialValue);
  const { Name, username, email, phone } = user;
  let navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetail = async () => {
    await addUser(user);
    navigate("/all");
  };

  return (
    <>
      <div className="main-form">
        <h2 className="mb-3">Add user</h2>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control input-form"
            id="name"
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
            id="username"
            placeholder="Enter your username here"
            name="username"
            onChange={(e) => onValueChange(e)}
            value={username}
          />
          <label htmlFor="username">Username</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control input-form"
            id="email"
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
            id="phone"
            placeholder="Enter your Phone Number"
            onChange={(e) => onValueChange(e)}
            name="phone"
            value={phone}
          />
          <label htmlFor="phone">Phone</label>
        </div>
        <div
          className="btn btn-primary btn-add"
          onClick={() => addUserDetail()}
        >
          Submit
        </div>
      </div>
    </>
  );
}

export default Adduser;
