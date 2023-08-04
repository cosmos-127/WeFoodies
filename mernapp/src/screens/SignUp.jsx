import React from "react";
import { Link } from "react-router-dom";
import NewNavbar from "../components/NewNavbar";
import Footer from "../components/Footer";
import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });
  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    // This prevents the default form submission behavior, which would cause the page to reload.
    event.preventDefault();

    try {
      // the function performs an HTTP POST request using the fetch API to send the form data to the server.

      const response = await fetch("http://localhost:5000/api/createuser", {
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
      }

      setFormData({
        name: "",
        email: "",
        password: "",
        location: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <NewNavbar />
      <section className="vh-auto" style={{ backgroundColor: "#E0E0E0" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
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
                        Sign up
                      </p>
                      <form onSubmit={handleSubmit} className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-3">
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Name
                            </label>
                            <input
                              id="form3Example1c"
                              className="form-control"
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={onChange}
                            />
                          </div>
                        </div>
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
                            <div style={{ color: "red" }}>
                              <i>atleast 6 characters</i>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-3">
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example5c"
                            >
                              Location
                            </label>
                            <input
                              id="form3Example5c"
                              className="form-control"
                              type="text"
                              name="location"
                              value={formData.location}
                              onChange={onChange}
                            />
                          </div>
                        </div>

                        <div className="d-flex justify-content-evenly">
                          <button type="submit" className="btn card btn-lg">
                            <b>Register</b>
                          </button>

                          <Link to="/login" className="card btn-lg btn">
                            <b>Already a User</b>
                          </Link>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="There is a problem :<"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SignUp;
