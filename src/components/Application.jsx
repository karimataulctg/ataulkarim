// Portfolio Website using React, Tailwind CSS, and DaisyUI

import React, { useState } from "react";
import img from "../assets/AtaulKarim.png";
import codingImage from "../assets/Coding.webp";
import resume from "../assets/Resume.pdf";
import { FaFacebook, FaLinkedin, FaPhone } from "react-icons/fa";
import imgProject01 from "../assets/Project01_09.jpg";
import imgProject02 from "../assets/Project01_10.jpg";
import imgProject03 from "../assets/Project01_11.jpg";
import imgLogo from "../assets/Logo.png";
import { FaGithub, FaMapLocation } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Zoom, Slide } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import htmlImage from "../assets/HtmlLogo.png";
import javascriptImage from "../assets/JavaScript-logo.png";
import tailwindImage from "../assets/Tailwind_CSS_Logo.svg";
import reactImage from "../assets/React-icon.svg";
import nodeImage from "../assets/Node.js_logo.svg";
import expressImage from "../assets/Expressjs.png";
import nextImage from "../assets/Nextjs-logo.svg";
import { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const techLogos = [
  { src: htmlImage, alt: "HTML" },
  { src: javascriptImage, alt: "JavaScript" },
  { src: tailwindImage, alt: "Tailwind CSS" },
  { src: reactImage, alt: "React" },
  { src: nodeImage, alt: "Node.js" },
  { src: expressImage, alt: "Express.js" },
  { src: nextImage, alt: "Next.js" },
];

const Application = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hv6sgsg", // Replace with EmailJS Service ID
        "template_excdzw5", // Replace with EmailJS Template ID
        form.current,
        "S_Sa3uyukBn429oE7" // Replace with EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Message Sent: ", result.text);
          Swal.fire({
            title: "Message successfully sent.",
            icon: "success",
            draggable: true,
          });
        },
        (error) => {
          console.log("Error: ", error.text);
          alert("Failed to send message. Please try again.");
        }
      );

    e.target.reset(); // Reset form after submission
  };

  return (
    <div className="min-h-screen bg-base-100">
      {/* Navbar */}
      <nav className="navbar bg-base-300 sticky opacity-80 top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <img
            src={imgLogo}
            alt="Your Name"
            className="w-10 h-10 rounded-full shadow-lg"
          />
          <Link to="/" className="text-2xl font-bold text-primary">
            My Portfolio
          </Link>
          {/* Hamburger Button */}
          <button
            className="lg:hidden text-primary focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
          {/* Desktop Menu */}
          <div className="hidden lg:flex justify-center items-center gap-2">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="btn btn-sm rounded-full text-white px-8 hover:bg-blue-500 "
            >
              About
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="btn btn-sm rounded-full text-white px-8 hover:bg-blue-500"
            >
              Skills
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="btn btn-sm rounded-full text-white px-8 hover:bg-blue-500"
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="btn btn-sm rounded-full text-white px-8 hover:bg-blue-500"
            >
              Contact
            </Link>
            <a
              href={resume}
              download
              className="btn btn-sm rounded-full btn-primary "
            >
              Download Resume
            </a>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-16 left-0 w-full bg-base-300 shadow-md">
              <div className="flex flex-col gap-2 p-4">
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="btn btn-link"
                >
                  About
                </Link>
                <Link
                  to="skills"
                  smooth={true}
                  duration={500}
                  className="btn btn-link"
                >
                  Skills
                </Link>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="btn btn-link"
                >
                  Projects
                </Link>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="btn btn-link"
                >
                  Contact
                </Link>
                <a href={resume} download className="btn btn-primary">
                  Download Resume
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <header className="hero bg-gradient-to-r from-blue-900 to-slate-900 text-white py-5">
        <div className="container mx-auto flex flex-col md:flex-row-reverse items-center justify-center gap-8 min-h-[60vh]">
          {/* Image on the Right */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={img}
              alt="Ataul Karim"
              className="h-80 rounded-full shadow-lg bg-slate-400"
            />
          </div>

          {/* Description on the Left */}
          <div className="md:w-1/2 text-center md:text-left flex flex-col items-center md:items-end">
            <h1 className="text-3xl font-bold">Hello, I'm Ataul Karim</h1>
            <p className="text-xl mt-4">
              Frontend Web Developer | Web Developer
            </p>

            <div className="mt-6 flex flex-col md:flex-row gap-4">
              <a
                href="https://www.facebook.com/ataulkarimctg"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline flex items-center gap-2"
              >
                <FaFacebook /> Facebook
              </a>
              <a
                href="https://www.linkedin.com/in/mohammed-ataul-karim-bbb70867/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline flex items-center gap-2"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://github.com/karimataulctg"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline flex items-center gap-2"
              >
                <FaGithub /> GitHub
              </a>
            </div>
            <div className="my-4 flex justify-center items-center">
              <a href={resume} download className="btn btn-primary">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Me Section */}
      <div className="relative hero bg-base-200 py-10 flex justify-center items-center">
        {/* "About Me" Animation at the Top Center */}
        <h1
          className="absolute top-0 left-1/2 transform -translate-x-1/2 text-4xl font-bold pt-6"
          id="about"
        >
          <Typewriter
            words={["About Me"]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={80}
          />
        </h1>

        {/* Main Content */}
        <div className="hero-content flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto pt-16">
          {/* Image on the Left */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={codingImage}
              alt="Ataul Karim"
              className="rounded-lg shadow-lg md:w-80 h-auto"
            />
          </div>

          {/* About Me Text on the Right */}
          <div className="w-full  md:w-1/2 text-center md:text-left">
            <p className="text-justify">
              I started programming with a passion for solving problems and
              creating meaningful digital experiences. My journey into
              development began with curiosity about how websites and
              applications work, and over time, it turned into a deep passion
              for building interactive and user-friendly websites.
              <p className="my-3 text-justify">
                I enjoy working with modern web technologies, crafting intuitive
                user interfaces, and optimizing performance to ensure a seamless
                experience for users.
              </p>
              <p className="text-justify">
                Beyond programming, I love traveling, listening to music, and
                playing football. Whether it's picking up a new framework,
                improving my problem-solving skills, or working on exciting
                projects, I'm always up for a challenge!
              </p>
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <section id="skills" className="py-10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            <Typewriter
              words={["Skills"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={80}
            />
          </h2>
          <div className="w-11/12 mx-auto overflow-hidden bg-blue-950 py-10">
            <motion.div
              className="flex gap-12"
              initial={{ x: "100%" }} // Start from the right
              animate={{ x: "-100%" }} // Move to the left
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }} // Slow, infinite loop
            >
              {/* Duplicate logos to create a seamless infinite effect */}
              {[...techLogos, ...techLogos, ...techLogos].map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="w-24 h-24 object-contain"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-10 bg-base-200">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center">
            <Typewriter
              words={["Projects"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={80}
            />
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Zoom duration={1000}>
              <div className="relative p-[1px] rounded-lg bg-gradient-to-r from-green-500 to-orange-500">
                <div className="bg-base-300 p-4 rounded-lg">
                  <img
                    src={imgProject01}
                    alt="Project 1"
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h3 className="text-xl font-bold mt-4">
                    Lingo Bingo French Language Course
                  </h3>
                  <p className="mt-2 text-justify">
                    Lingo Bingo is an interactive and engaging platform designed
                    to help users master French vocabulary. Lingo Bingo offers a
                    comprehensive learning experience tailored to your needs.
                  </p>
                  <a
                    href="https://lingo-bingo-french-vocabulary.netlify.app/"
                    target="_blank"
                    className="btn btn-primary btn-wide mt-4"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </Zoom>

            <Zoom duration={1000}>
            <div className="relative p-[1px] rounded-lg bg-gradient-to-r from-green-500 to-orange-500">
              <div className="bg-base-300 p-4 rounded-lg">
                <img
                  src={imgProject02}
                  alt="Project 1"
                  className="w-full h-40 object-cover"
                />

                <h3 className="text-xl font-bold mt-4">Visa Navigator</h3>
                <p className="mt-2 text-justify">
                  Visa Navigator Portal, a user-friendly platform designed to
                  simplify the process of checking visa requirements, applying
                  for visas online, and tracking your visa applications.{" "}
                </p>
                <a
                  href="https://visa-navigator-87172.web.app/"
                  target="_blank"
                  className="btn btn-primary btn-wide mt-4"
                >
                  View Details
                </a>
              </div>
              </div>
            </Zoom>

            <Zoom duration={1000}>
            <div className="relative p-[1px] rounded-lg bg-gradient-to-r from-green-500 to-orange-500">
              <div className="bg-base-300 p-4 rounded-lg">
                <img
                  src={imgProject03}
                  alt="Project 1"
                  className="w-full h-40 object-cover"
                />
                <h3 className="text-xl font-bold mt-4">Library Mangt. Sys</h3>
                <p className="mt-2 text-justify">
                  A web-based Library Mgt System for a well-renowned school. It
                  allows addition and updating of books. It also enables
                  students to search, borrow, and return books with real-time
                  availability tracking.
                </p>
                <a
                  href="https://library-management-syste-fae30.web.app/"
                  target="_blank"
                  className="btn btn-primary btn-wide mt-4"
                >
                  View Details
                </a>
              </div>
              </div>
            </Zoom>
            {/* Repeat for more projects */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center py-10">
        {/* Contact Info Section */}
        <section className="text-center">
          {/* Centered Logo */}
          <div className="w-28 mx-auto flex justify-center items-center mb-4">
            <img src={imgLogo} alt="Logo" className="w-full h-auto" />
          </div>

          {/* Contact Address Heading */}
          <h1 className="text-3xl mb-4">Contact Address:</h1>

          {/* Contact Details */}
          <div className="flex flex-col items-center gap-2">
            <p className="flex items-center gap-2">
              <MdEmail className="text-lg" /> E-mail: karimataulctg@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="text-lg" /> Phone: +88 01820097052
            </p>
            <p className="flex items-center gap-2">
              <FaMapLocation className="text-lg" /> Location: Kotowali,
              Chattogram
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-10">
          <div className="w-11/12 mx-auto">
            <h2 className="text-4xl font-bold text-center">Contact Me</h2>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="mt-8 max-w-lg mx-auto"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="input input-bordered w-full mb-4"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="input input-bordered w-full mb-4"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="textarea textarea-bordered w-full mb-4"
                required
              ></textarea>
              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-base-300 py-4">
        <div className="container mx-auto text-center">
          &copy; {new Date().getFullYear()} ataulkarim. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Application;
