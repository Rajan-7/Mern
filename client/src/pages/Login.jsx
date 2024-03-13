import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const URl = "http://localhost:5007/api/auth/login";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const { storeTokenLs } = useAuth();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch(URl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const res_data = await response.json();
      console.log(res_data);
      if (response.ok) {
        // Storing Token in LocalStorage
        storeTokenLs(res_data.token);
        setUser({ email: "", password: "" });
        toast.success("Login Successful");
        navigate("/");
      } else {
        toast.error(
          res_data.moreDetails ? res_data.moreDetails : res_data.message
        );
        console.log("Invalid credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section>
        <div className="section-login">
          <div className="container grid grid-two-cols">
            <div className="registration-image">
              <img
                src="/image/login.png"
                alt="Boy registring his information in website"
                width="500"
                height="500"
              />
            </div>
            <div className="registration-form">
              <h1 className="main-heading">Login form</h1>
              <br />
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email">email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    id="email"
                    required
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="password">password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    id="password"
                    required
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInput}
                  />
                </div>
                <br />
                <div>
                  <button type="submit" className="btn-submit">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
