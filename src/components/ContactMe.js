import React, { useState, useEffect } from "react";
import { validateEmail } from "../utils/helpers";

function ContactMe() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate email input
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div> */}
        <div className="card xl:rounded-box w-full max-w-screen-xl shadow-2xl bg-base-100">
          <div className="card-body">
            <div>
                <h2 className="text-3xl font-bold">Contact Me</h2>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered input-accent"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="text"
                placeholder="example@email.com"
                className="input input-bordered input-accent"
                onChange={handleInputChange}
              />
              {emailError && (
                <label className="error-message label">
                  <p className="label-text-alt">{emailError}</p>
                </label>
              )}
              <label className="label">
                <p className="label-text-alt">Please enter a valid email</p>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                name="message"
                className="textarea textarea-accent"
                placeholder="Please write a short message here..."
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
            {emailError && (
              <div>
                <p className="error-message">{emailError}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
