import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NewNavbar from "../components/NewNavbar";
import Footer from "../components/Footer";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/loginuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const json = await response.json();
      console.log(json);

      if (!json.success) {
        alert("Invalid credentials");
      } else {
        navigate("/");
      }

      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <NewNavbar />
      <section
        className="vh-auto"
        style={{
          backgroundColor: "#E0E0E0",
        }}
      >
        <div className="container h-100 " style={{ maxWidth: "80%" }}>
          <div className="row d-flex justify-content-center align-items-center h-100  ">
            <div className="col-lg-12 col-xl-11">
              <div className="text-black" style={{ borderRadius: "25px " }}>
                <div
                  className="card-body p-md-5 mt-2 mb-2"
                  style={{ backgroundColor: "white", borderRadius: "25px " }}
                >
                  <div className="row justify-content-center">
                    <div
                      className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1"
                      style={{ backgroundColor: "white" }}
                    >
                      <p
                        className="text-center
                       h1 fw-bold mb-2 mx-1 mx-md-4 mt-1"
                      >
                        Login
                      </p>
                      <form onSubmit={handleSubmit} className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-3">
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Email
                            </label>
                            <input
                              id="form3Example3c"
                              className="form-control"
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={onChange}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-3">
                          <div className="form-outline flex-fill ">
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Password
                            </label>
                            <input
                              id="form3Example4c"
                              className="form-control"
                              type="password"
                              name="password"
                              value={formData.password}
                              onChange={onChange}
                            />
                          </div>
                        </div>

                        <div className="d-flex justify-content-evenly">
                          <button type="submit" className="btn card btn-lg">
                            <b>Login</b>
                          </button>
                          <Link to="/createuser" className="card btn-lg btn">
                            <b>I'm a new User</b>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
