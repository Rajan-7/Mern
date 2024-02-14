import { useState } from "react";

export const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });
  // handling the inputs
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  // handling the submits form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
  };
  return (
    <>
      <section className="contact-section">
        <div className="contact-content container">
          <h1 className="main-heading">Contact Us</h1>
        </div>
        {/* Contact main content */}
        <div className="container grid grid-two-cols">
          <div className="contact-image">
            <img
              src="/image/support.png"
              alt="We are here to help you"
              height="400"
              width="400"
            />
          </div>
          {/* contact form */}
          <section className="form-section">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={contact.username}
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
                  value={contact.email}
                  onChange={handleInput}
                  required
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  autoComplete="off"
                ></textarea>
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </section>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.9965268474157!2d-73.56028532381022!3d41.84990156717901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd7c9fb4efffff%3A0xc252366471e89cf3!2scontact%20-%20good%20boy%20food%20truck!5e0!3m2!1sen!2snp!4v1707893963893!5m2!1sen!2snp"
          width="100%"
          height="280"
          allowFullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};
