import React, { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { HeroSectionStyles } from "../../styles/homePage/HeroSectionStyles";
import ParagraphText from "../typography/ParagraphText";
import Button from "../buttons/Button";
import { FaWhatsapp, FaPhoneAlt, FaChevronDown, FaCheckCircle } from "react-icons/fa";

function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Select Service...");
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Carousel State
  const [currentImage, setCurrentImage] = useState(0);

   const services = [
    "Aluminium Profiles",
    "Hardware & Tools",
    "Fasteners (Nuts & Bolts)",
    "Custom Extrusions",
    "Bulk Supply",
  ];

  // Auto-rotate the images inside the SVG every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 4);
    }, 3500);
    return () => clearInterval(timer);
  },[]);

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "quick-quote", ...data })
    })
      .then(() => setIsSubmitted(true))
      .catch(error => alert(error));
  };

  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          {/* LEFT SIDE: Text + SVG Carousel */}
          <div className="left">
            <div className="badge">✅ QUALITY HARDWARE. ENDLESS SOLUTIONS.</div>
            <h1 className="hero__heading">
              Premium Aluminium & Hardware Supplies
            </h1>

            {/* THE 3D GLASSMORPHIC SVG CAROUSEL */}
            <div className="svg-carousel-container">
              <svg
                width="100%"
                viewBox="0 0 310 432"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Back Drop Shadow */}
                <path
                  d="M9.29688 0.958984L241.912 60.0358C274.03 68.1926 300.066 101.668 300.066 134.805V371.805C300.066 404.942 274.03 425.193 241.912 417.036L67.4507 372.728C35.3332 364.571 9.29688 331.096 9.29688 297.959V0.958984Z"
                  fill="black"
                  fillOpacity="0.6"
                />

                {/* The Tilted Yellow/Orange Gradient Card */}
                <path
                  d="M9.29688 0.958984L247.633 29.168C280.541 33.0628 307.217 63.0831 307.217 96.2202V333.22C307.217 366.357 280.541 390.063 247.633 386.168L68.881 365.011C35.9736 361.116 9.29688 331.096 9.29688 297.959V0.958984Z"
                  fill="url(#paint0_linear_midrand)"
                />

                {/* Re-Mapped Glass Panel (Masking the Images) */}
                <foreignObject x="11" y="8" width="288" height="364">
                  <div className="carousel-mask">
                    {/* The 4 Uploaded Flyers - FORCED DISTORTION (fill) */}
                    <div
                      className={`carousel-image ${currentImage === 0 ? "active" : ""}`}
                    >
                      <StaticImage
                        src="../../images/hero1.jpg"
                        alt="Rubble Removal"
                        objectFit="fill"
                        imgStyle={{ objectFit: "fill" }}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <div
                      className={`carousel-image ${currentImage === 1 ? "active" : ""}`}
                    >
                      <StaticImage
                        src="../../images/hero2.jpg"
                        alt="Site Clearing"
                        objectFit="fill"
                        imgStyle={{ objectFit: "fill" }}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <div
                      className={`carousel-image ${currentImage === 2 ? "active" : ""}`}
                    >
                      <StaticImage
                        src="../../images/hero3.jpg"
                        alt="Garden Waste"
                        objectFit="fill"
                        imgStyle={{ objectFit: "fill" }}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <div
                      className={`carousel-image ${currentImage === 3 ? "active" : ""}`}
                    >
                      <StaticImage
                        src="../../images/hero4.jpg"
                        alt="Construction Debris"
                        objectFit="fill"
                        imgStyle={{ objectFit: "fill" }}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>

                    {/* The Glossy Reflection Overlay */}
                    <div className="glass-reflection-overlay"></div>
                  </div>
                </foreignObject>

                <defs>
                  <linearGradient
                    id="paint0_linear_midrand"
                    x1="9.29688"
                    y1="0.958984"
                    x2="-32.3731"
                    y2="353.027"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFCC00" />
                    <stop offset="1" stopColor="#D4A000" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <ParagraphText className="hero__text">
              Your trusted hub for high-grade aluminium extrusions, structural
              hardware, tools, and accessories. Built for contractors, builders,
              and DIY enthusiasts.
            </ParagraphText>

            <div className="hero__action-buttons">
      <Button tag="a" href="https://wa.me/263719875027" target="_blank" className="btn-whatsapp">
        <FaWhatsapp style={{marginRight: '8px'}} /> WhatsApp Us
      </Button>
      <Button tag="a" href="tel:+263719875027" variant="outline" className="btn-call">
        <FaPhoneAlt style={{marginRight: '8px'}} /> Call Sales
      </Button>
    </div>
          </div>

          {/* RIGHT SIDE: Quote Form */}
          <div className="right">
            <div className="quote-form-container">
              {isSubmitted ? (
                <div className="success-message">
                  <FaCheckCircle className="success-icon" />
                  <h3>Request Sent!</h3>
                  <p>
                    Tariro or Wendy will contact you shortly with your
                    quote.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="reset-btn"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <>
                  <h3>Get a Quick Quote</h3>
                  <form
                    name="quick-quote"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                  >
                    <input type="hidden" name="form-name" value="quick-quote" />
                    <p hidden>
                      <label>
                        Don’t fill this out: <input name="bot-field" />
                      </label>
                    </p>

                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone / WhatsApp"
                      required
                    />

                    <div className="custom-select-container">
                      <div
                        className={`select-trigger ${isOpen ? "active" : ""}`}
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        <span>{selectedService}</span>
                        <FaChevronDown
                          className={`arrow ${isOpen ? "open" : ""}`}
                        />
                      </div>

                      {isOpen && (
                        <div className="dropdown-menu">
                          {services.map((service) => (
                            <div
                              key={service}
                              className="dropdown-item"
                              onClick={() => {
                                setSelectedService(service);
                                setIsOpen(false);
                              }}
                            >
                              {service}
                            </div>
                          ))}
                        </div>
                      )}
                      <input
                        type="hidden"
                        name="service"
                        value={selectedService}
                      />
                    </div>

                    <textarea name="message" placeholder="Briefly describe the materials/hardware you need, or how we may assist you..." rows="3"></textarea>
                    <button type="submit" className="submit-btn">
                      Send Request
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;