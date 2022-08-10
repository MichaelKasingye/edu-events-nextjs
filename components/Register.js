import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import styles from "../styles/Register.module.css";
import { Container } from "react-bootstrap";
import { app } from "../config/firebaseInit";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// getDoc, doc,

const Register = ({ event }) => {
  const [open, setOpen] = useState(false);
  const [formStatus, setFormStatus] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    occupation: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const db = getFirestore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "event_attendees"), {
      ...formData,
      event_id: `/events/${event.id}`
    });
    console.log("Document written with ID: ", docRef.id);
    const res = await fetch(`/api/email/send`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...formData, event}),
    });
    const body = await res.json();

    if (body.message !== "success") {
      console.log("error sending email");
    }
    setFormStatus(true);
  };

  return (
    <div>
      <button onClick={onOpenModal} className="btn btn-dark btn-lg">
        Register Now
      </button>
      <Modal open={open} onClose={onCloseModal} center>
        <div className="row">
          <div className="">
            <form
              className="mt-5  p-4 bg-light border form-border shadow"
              onSubmit={handleSubmit}
            >
              <h2 className="mb-4 blue-color">Event Registration</h2>
              <div className="form-group mb-4">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder=" Enter FullName"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-4">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-4">
                <input
                  type="text"
                  className="form-control"
                  id="occupation"
                  placeholder="Enter Occupation"
                  required
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                />
              </div>

              <div>
                <p className="fw-bolder">How did you hear about this event ?</p>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Social Media
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Email
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Friend
                  </label>
                </div>
              </div>

              {formStatus ? (
                <div className="text-success mb-2">
                  You have Successifuly Registered!
                </div>
              ) : (
                ""
              )}
              <div className="d-grid mt-5 gap-2 col-6 mx-auto ">
                <button type="submit" className={`${styles.btnColor} btn btn-lg `}>
                  REGISTER
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default Register;
