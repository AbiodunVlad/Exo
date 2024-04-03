import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSpotify,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./styles.css";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footer1">
        <div className="footerLogo">
          <h1>EXO</h1>
        </div>
        <div className="footerLinks">
          <div className="subPage">
            {" "}
            <h2>
              <a href="https://www.exo.inc/iris">Exo Iris</a>
            </h2>
            <h2>
              <a href="https://www.exo.inc/exo-works">Exo Works</a>
            </h2>
            <h2>
              <a href="https://www.exo.inc/ai">Exo AI</a>
            </h2>
            <h2>
              <a href="https://www.exo.inc/technology">Technology</a>
            </h2>
          </div>
          <div className="resources1">
            <p>
              <a href="https://www.exo.inc/resources">Resources</a>
            </p>
            <p>
              <a href="https://www.exo.inc/newsroom">Newsroom</a>
            </p>
            <p>
              <a href="https://www.exo.inc/our-people">Our People</a>
            </p>
            <p>
              <a href="https://www.exo.inc/careers">Careers</a>
            </p>
            <p>
              <a href="https://support.exo.inc/hc/en-us?_gl=1*1yg9saf*_ga*MTk4MjQwNTUwNC4xNzExNjMzNzgy*_ga_0TQLXKM98F*MTcxMTk3OTExOC4xMi4xLjE3MTE5Nzk0NDkuNDQuMC4w">
                Support
              </a>
            </p>
          </div>
          <div className="resources2">
            <p>
              <a href="https://www.exo.inc/security-trust-center">
                Security Trust Center
              </a>
            </p>
            <p>
              <a href="https://www.exo.inc/contact">Contact</a>
            </p>
            <p>
              <a href="https://www.exo.inc/investors">Investors</a>
            </p>
            <p>
              <a href="https://www.exo.inc/our-vision">Vision</a>
            </p>
            <p>
              <a href="https://www.exo.inc/patents">Patents</a>
            </p>
          </div>
        </div>
      </div>
      <div className="footer2">
        <div className="footerIcons">
          <FontAwesomeIcon icon={faInstagram} className="iconFooter" />
          <FontAwesomeIcon icon={faXTwitter} className="iconFooter" />
          <FontAwesomeIcon icon={faFacebook} className="iconFooter" />
          <FontAwesomeIcon icon={faLinkedin} className="iconFooter" />
          <FontAwesomeIcon icon={faSpotify} className="iconFooter" />
          <FontAwesomeIcon icon={faYoutube} className="iconFooter" />
        </div>

        <div className="policy">
          <p>
            <a href="https://www.exo.inc/privacy-policy">Privacy Policy</a>
          </p>
          <p>
            <a href="https://www.exo.inc/cookie-policy">Cookie Policy</a>
          </p>
          <p>
            <a href="https://www.exo.inc/social-policy">Social Policy</a>
          </p>
        </div>

        <div className="address">
          <p>4201 Burton Drive, Santa Clara, CA, 95054</p>
        </div>

        <div className="copyright">
          <p>©️ 2023, Exo Imaging, Inc</p>
        </div>
      </div>
    </div>
  );
}
