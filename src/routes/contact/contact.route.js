import { useState } from "react";

import NavIcon from "../../component/nav-icon/nav-icon.component";
import Footer from "../../component/footer/footer.component";
import "./contact.styles.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    setFormSubmitted(true);
    setName("");
    setSubject("");
    setMessage("");
  };

  const handleSendEmail = () => {
    window.location.href = `mailto:${"olarotimiadamson@yahoo.com"}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  };

  return (
    <div className="contact-container">
      <div className="contact-page">
        <h1>Contact Me</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="subject">Subject:</label>
          <input
            id="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button type="submit" onClick={handleSendEmail}>Send Message</button>
        </form>

        {formSubmitted && (
          <div className="success-message">
            <p>Thank you for contacting me!</p>
          </div>
        )}
      </div>
      <NavIcon />
      <Footer />
    </div>
  );
};

export default Contact;
