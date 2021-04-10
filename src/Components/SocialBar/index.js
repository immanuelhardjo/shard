import React from 'react';
import './socialbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

const index = () => {
    return (
        <div class="social-container">
            <a href="https://www.linkedin.com/in/immanuel-hardjo"
                className="linkedin-social">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://www.instagram.com/immanuelhardjo"
                className="instagram-social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
        </div>
    )
}

export default index
