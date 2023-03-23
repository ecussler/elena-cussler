import React, { useState, useEffect } from "react";
import { validateEmail } from "../../utils/helpers";
import Burst from '../../assets/burst.png'; 

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
      console.log('found invalid')
      setEmailError("Please enter a valid email address.");
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
      <div className=" lg:flex-row-reverse px-10 pt-1 pb-10">
        <div className="card glass xl:rounded-box w-full max-w-screen-xl shadow-2xl">
          <div className="card-body">
            <div>
                <h2 className="text-3xl font-bold">Contact Me</h2>
            </div>
            {/* CONTACT ME FORM */}
            <form onSubmit={handleFormSubmit}>
            <div className="form-control">
              <label className="label">
                {/* NAME */}
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered input-accent"
                onChange={handleInputChange}
                required='required'
              />
            </div>
            <div className="form-control">
              <label className="label">
                {/* EMAIL */}
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="example@email.com"
                className="input input-bordered input-accent"
                onChange={handleInputChange}
                required='required'
              />
              {emailError && (
                <div className="alert alert-warning shadow-lg">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  <span>{emailError}</span>
                </div>
              </div>
                // <label className="error-message label">
                //   <p className="label-text-alt">{emailError}</p>
                // </label>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                {/* MESSAGE */}
                <span className="label-text">Message</span>
              </label>
              <textarea
                name="message"
                className="textarea textarea-accent"
                placeholder="Please write a short message here..."
                onChange={handleInputChange}
                required='required'
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>

            </form>
          </div>
        </div>
        </div>
  );
}

export default ContactMe;
