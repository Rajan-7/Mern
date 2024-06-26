import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import {toast} from "react-toastify"

export const AdminUpdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const params = useParams();
  console.log(params.id);
  const { authorizationToken } = useAuth();
  console.log(authorizationToken);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  const getAllSingleUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5007/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      console.log("Single user data:", data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5007/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(data),
        }
      );
      if(response.ok){
        toast.success("Update");
      }else{
        toast.error("Not updated");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllSingleUserData();
  }, []);
  return (
    <section className="contact-section">
      <div className="contact-content container">
        <h1 className="main-heading">Update User Data</h1>
      </div>
      {/* Contact main content */}
      <div className="container grid grid-two-cols">
        {/* contact form */}
        <section className="form-section">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">username</label>
              <input
                type="text"
                name="username"
                id="username"
                value={data.username}
                onChange={handleInput}
                required
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={data.email}
                onChange={handleInput}
                required
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                type="phone"
                name="phone"
                id="phone"
                value={data.phone}
                onChange={handleInput}
                required
                autoComplete="off"
              />
            </div>
            <div>
              <button type="submit">Update</button>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};
