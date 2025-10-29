import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../CSS/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contactus() {
  return (
    <div>
      <Header />
      <div className="contact">
        <div className="contactus">
          <h1>Contact With Me</h1>
          <div>
            <h3>Hello, Thank you for visiting my website!</h3>
            <h4>
              If you want to contact me, here are my social links and email:
            </h4>
          </div>

          <div className="contact-links">
            <p>
              <b>
                <a href="mailto:kunalpawar9230@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} id="email" />
                  <span>Email:</span> kunalpawar9230@gmail.com
                </a>
              </b>
            </p>
            <p>
              <b>
                <a
                  href="https://wa.me/7719000398?text=Hello%20Kunal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                  WhatsApp
                </a>
              </b>
            </p>
            <p>
              <b>
                <a
                  href="https://www.linkedin.com/in/kunal-pawar-4b6942289"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                  LinkedIn
                </a>
              </b>
            </p>
            <p>
              <b>
                <a
                  href="https://www.instagram.com/kunal_pawar77"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                  Instagram
                </a>
              </b>
            </p>
          </div>

          <h3 className="thanku">Thank You for Reaching Out! 🙏</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
}
