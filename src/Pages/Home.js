import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
// import "./animation.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleRight,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import videoSrc from "../Assets/Videos/DocumentInSeconds.mp4";
import { Button } from "react-bootstrap";

export default function Home() {
  const [stickySection, setStickySection] = useState(null);
  const section5Ref = useRef(null);

  useEffect(() => {
    const section2_2 = document.querySelector(".section2-2");
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const handleScroll = () => {
      const section1 = document.getElementById("section1");
      const section2 = document.getElementById("section2");
      const section3 = document.getElementById("section3");
      const section4 = document.getElementById("section4");
      const sectionZ = document.getElementById("sectionZ");

      if (scrollTop >= section1.offsetTop && scrollTop < section2.offsetTop) {
        setStickySection("section1");
      } else if (
        scrollTop >= section2.offsetTop &&
        scrollTop < section3.offsetTop
      ) {
        setStickySection("section2");
      } else if (
        scrollTop >= section3.offsetTop &&
        scrollTop < section4.offsetTop
      ) {
        setStickySection("section3");
      } else if (
        scrollTop >= section4.offsetTop &&
        scrollTop < sectionZ.offsetTop
      ) {
        setStickySection("section4");
      } else if (scrollTop >= sectionZ.offsetTop) {
        setStickySection("sectionZ");
      } else {
        setStickySection(null);
      }

      // Animate sections
      const section5Rect = section5Ref.current?.getBoundingClientRect();
      if (!section5Rect) {
        return;
      }
      const section5Top = section5Rect.top + window.scrollY;
      const section5Bottom = section5Rect.bottom + window.scrollY;

      const sections = sectionZ.querySelectorAll(".section");

      sections.forEach((section, index) => {
        const sectionRect = section.getBoundingClientRect();
        const sectionTop = sectionRect.top + window.scrollY;
        const sectionBottom = sectionRect.bottom + window.scrollY;

        // Calculate visibility percentage
        const visibility = Math.min(
          1,
          Math.max(0, (scrollTop - sectionTop) / (sectionBottom - sectionTop))
        );

        if (scrollTop > section5Top && scrollTop < section5Bottom) {
          // Animate section elements based on visibility within section5
          const sectionNum = section.querySelector(".section-num");
          const sectionDes = section.querySelector(".section-des");
          const sectionRight = section.querySelector(".section-right");

          sectionNum.style.opacity = visibility;

          if (visibility > 0.5) {
            sectionDes.style.opacity = 1;
            sectionRight.style.opacity = 1;
          } else {
            sectionDes.style.opacity = 0;
            sectionRight.style.opacity = 0;
          }
        }
      });

      // Animate section2-2 images

      const section2_2Rect = section2_2.getBoundingClientRect();
      const section2_2Top = section2_2Rect.top + window.scrollY;
      const section2_2Bottom = section2_2Rect.bottom + window.scrollY;

      if (
        scrollTop > section2_2Top - window.innerHeight &&
        scrollTop < section2_2Bottom
      ) {
        const images = section2_2.querySelectorAll("img");

        images.forEach((image) => {
          image.style.transition = "right 1s ease-in-out";
          image.style.right = "30%";
        });
      } else {
        const images = section2_2.querySelectorAll("img");

        images.forEach((image) => {
          image.style.right = "130%";
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="container">
        <h1>Exo Works™</h1>
        <p>Your POCUS workflow solution.</p>
      </div>

      <div className="section2">
        <div className="section2-1">
          <h2 className="designed">Designed around the way you work.</h2>
          <p>• Document, review and bill exams in seconds</p>
          <p>• Instantly share exams and provide real-time feedback</p>
          <p>• Manage QA and credentialing from anywhere</p>
          <p>• Securely connect to your EHR and PACS</p>
          <p>• Integrate with any ultrasound device</p>
        </div>
        <div className="section2-2">
          <img
            src={require("../Assets/Images/iPhone_11.webp")}
            alt="iphone"
            className="iphone"
          />
          <img
            src={require("../Assets/Images/iPad_11.webp")}
            alt="ipad"
            className="ipad"
          />
          <img
            src={require("../Assets/Images/Laptop_11.webp")}
            alt="laptop"
            className="laptop"
          />
        </div>
      </div>

      <div className="section3">
        <p className="wellstarTxt">
          Wellstar MCG Health Implements Exo Works™ and Sees 47% Increase in
          Revenue Capture{" "}
        </p>
        <a href="https://www.exo.inc/article/wellstar-mcg-health-implements-exo-works-and-sees-47-percent-increase-in-revenue">
          <FontAwesomeIcon icon={faChevronCircleRight} className="chevRight" />
        </a>
      </div>

      <div className="section4">
        <video controls className="video1">
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      <div className="section5">
        <div
          className={`section ${stickySection === "section1" ? "sticky" : ""}`}
          id="section1"
        >
          <div className="section-left">
            <div className="section-num">
              <h2>1</h2>
            </div>
            <div className="section-des">
              <h4>Document in seconds</h4>
              <p>
                Go from soul-crushing to state-of-the-art. Whether you have an
                encounter-based or order-based workflow, documenting ultrasound
                exams is now a breeze. Focus on more important things, like your
                patients.
              </p>
            </div>
          </div>
          <div className="section-right">
            <img
              src={require("../Assets/Images/iPhone-11.png")}
              alt="iphone"
              className="stickyImg"
            />
          </div>
        </div>

        <div
          className={`section ${stickySection === "section2" ? "sticky" : ""}`}
          id="section2"
        >
          <div className="section-left">
            <div className="section-num">
              <h2>2</h2>
            </div>
            <div className="section-des">
              <h4>Review images anywhere</h4>
              <p>
                Say goodbye to the rigid and outdated workflows of the past.
                Access images from anywhere — at the bedside or on the go. From
                a smartphone, tablet, or PC.
              </p>
            </div>
          </div>
          <div className="section-right">
            <img
              src={require("../Assets/Images/Laptop-11.png")}
              alt="iphone"
              className="stickyImg"
            />
          </div>
        </div>

        <div
          className={`section ${stickySection === "section3" ? "sticky" : ""}`}
          id="section3"
        >
          <div className="section-left">
            <div className="section-num">
              <h2>3</h2>
            </div>
            <div className="section-des">
              <h4>A new way to QA</h4>
              <p>
                No more hot mess. Fast-loading images, simple markup tools, and
                image tagging makes QA review a breeze and real-time feedback a
                reality.
              </p>
            </div>
          </div>
          <div className="section-right">
            <img
              src={require("../Assets/Images/iPhone-11.png")}
              alt="iphone"
              className="stickyImg"
            />
          </div>
        </div>

        <div
          className={`section ${stickySection === "section4" ? "sticky" : ""}`}
          id="section4"
        >
          <div className="section-left">
            <div className="section-num">
              <h2>4</h2>
            </div>
            <div className="section-des">
              <h4>Archiving and billing made easy</h4>
              <p>
                Scan with any DICOM-enabled ultrasound and use Exo Works to send
                the images to PACS and EMR with a few clicks. You can now view
                images with patient records and capture revenue with just a few
                taps.
                <br />
                <small>
                  Exo Works is Epic App Orchard certified and Cerner CODE
                  program approved. Easily sync with your EMR.
                </small>
              </p>
            </div>
          </div>
          <div className="section-right">
            <img
              src={require("../Assets/Images/Laptop-11.png")}
              alt="iphone"
              className="stickyImg"
            />
          </div>
        </div>

        <div
          className={`section ${stickySection === "sectionZ" ? "sticky" : ""}`}
          id="sectionZ"
        >
          <div className="section-left">
            <div className="section-num">
              <h2>5</h2>
            </div>
            <div className="section-des">
              <h4>Stay in the driver's seat</h4>
              <p>
                Manage users and roles. Get insights on POCUS performance. Track
                proficiency and credentialing. Across your department—all in one
                dashboard.
              </p>
            </div>
          </div>
          <div className="section-right">
            <img
              src={require("../Assets/Images/iPhone-11.png")}
              alt="iphone"
              className="stickyImg"
            />
          </div>
        </div>
      </div>

      <div className="section6">
        <div className="section6-1">
          <h2>Nothing gets lost, nothing gets in</h2>
          <p>We keep patient privacy secure</p>

          <div className="section6-1a">
            <p>VISIT SECURITY AND COMPLIANCE</p>
            <a href="https://www.exo.inc/security-trust-center">
              <FontAwesomeIcon
                icon={faChevronCircleRight}
                className="chevRight"
              />
            </a>
          </div>

          <div className="section6-1b">
            {/* <img src={require("")} alt="" className="" /> */}
            {/* <img src={require("")} alt="" className="" /> */}
            {/* <img src={require("")} alt="" className="" /> */}
            {/* <img src={require("")} alt="" className="" /> */}
            {/* <img src={require("")} alt="" className="" /> */}
          </div>
        </div>

        <div className="section6-2">
          <div className="topQuote">
            <FontAwesomeIcon icon={faQuoteLeft} className="topQuote" />
          </div>
          <p className="section6-2a">
            Exo has made a tremendous impact and is one of the few companies out
            there that approaches POCUS workflow challenges from a system-wide,
            enterprise perspective rather than a siloed approach.
          </p>

          <p className="section6-2b">
            AALPEN A. PATEL, M.D. <br /> DEPARTMENT CHAIR OF RADIOLOGY,
            GEISINGER
          </p>
        </div>

        <div className="section7">
          <div>
            <h2>Unlock more</h2>
          </div>

          <div className="section7-0">
            <div className="section7-1">
              <img
                src={require("../Assets/Images/24.webp")}
                alt=""
                className=""
              />
            </div>

            <div className="section7-2">
              <h5>Better together</h5>
              <p>
                When you combine Exo Works and Exo Iris, caregivers harness the
                power of an ultrasound ecosystem that’s built for speed and
                security. The full spectrum of possibilities become a reality.
              </p>

              <div className="section7-2a">
                <p>EXPLORE EXO IRIS</p>
                <a href="https://www.exo.inc/iris">
                  <FontAwesomeIcon
                    icon={faChevronCircleRight}
                    className="chevRight"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="section8">
          <h2>Get Exo Works demo</h2>
          <a href="https://www.exo.inc/book-demo">
            <Button type="submit">Demo now</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
