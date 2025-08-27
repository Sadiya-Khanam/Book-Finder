import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const formRef = useRef();
  const [notification, setNotification] = useState({ message: "", type: "" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_htuw8sj",
        "template_w26ieau",
        formRef.current,
        "HgEh_NxxshPwNgnG8"
      )
      .then(
        (result) => {
          setNotification({ message: "Message sent successfully!", type: "success" });
          formRef.current.reset();
          setTimeout(() => setNotification({ message: "", type: "" }), 5000);
        },
        (error) => {
          setNotification({ message: "Oops! Something went wrong.", type: "error" });
          console.error(error);
        }
      );
  };
  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="from_name" placeholder="Your Name" required />
          <input type="email" name="from_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
          {notification.message && (
            <p className={`notification ${notification.type}`}>
              {notification.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
