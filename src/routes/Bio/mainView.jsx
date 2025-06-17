import { maximoDivisor } from "../../functions/maximoDivisor";
import { generateAdditionalDivs } from "../../functions/aditionalDivs";
import { skills } from "../../assets/mySkills";
import { services } from "../../assets/myService";
import {  useRef } from "react";
import { useAnimation } from "../../customHooks/useAnimation";
import { Link } from "react-router-dom";
export default function MainView() {
  const servicesRef = useRef(null);
  const skillsRef = useRef(null);

  useAnimation({ parentRef: skillsRef });
  useAnimation({ parentRef: servicesRef });


  const divisor = maximoDivisor(skills.length);
  const remainder = skills.length % divisor;

  return (
    <div className="mainView mainBio">
      <div className="container">
        <h1>My Information</h1>
        <hr />
        <div className="grid">
          <img
            src="/myPhoto.JPG"
            alt="My Photo"
            className="bigImage"
          />
          <div className="bioContent">
          <p>
            Hi! I&apos;m Iván Gómez, a creative and detail-oriented full-stack developer and UI/UX designer from Colombia. I&apos;m currently studying Engineering at Universidad de los Andes while building and deploying real-world apps that merge functionality and design.
          </p>
          <p>
            I specialize in frontend development using React, TypeScript, HTML, and CSS, and have strong backend experience with Node.js, Express, and PostgreSQL. I also work with cloud technologies like AWS (EC2, S3, Route 53) and Docker to deploy scalable applications.
          </p>
          <p>
            Beyond code, I enjoy designing intuitive user interfaces with tools like Figma and Illustrator. I&apos;m also passionate about AI, robotics, and using technology for social good.
          </p>
          <p>
            Whether it’s launching a bookstore web app or supporting young athletes through my social project, I love creating impactful solutions. Let’s connect and build something great together!
          </p>

            <div className="separar">
              <a href="/myFile.pdf" download>
                <button className="boton shadow">Download CV</button>
              </a>
              <Link to="/hire"><button className="boton inverso shadow">Hire Me</button></Link>
            </div>
          </div>
        </div>
        <hr />
        <h1 style={{ margin: "10px 0" }}>Services</h1>
        <div className="services" ref={servicesRef}>
          {services.map((service, index) => (
            <div className="element container shadow" key={index}>
              {service.svg}
              <h2>{service.title}</h2>
              <p>{service.info}</p>
            </div>
          ))}
        </div>
        <hr />
        <h1 style={{ margin: "10px 0" }}>Skills</h1>
        <div
          className="skills"
          ref={skillsRef}
          style={{
            gridTemplateColumns:
              window.innerWidth > 1200
                ? `repeat(${maximoDivisor(skills.length)}, 1fr)`
                : "repeat(2, 1fr)",
          }}
        >
          {skills.map((skill, index) => (
            <div
              className="skillContainer shadow"
              key={index}
              style={{ "--hover-color": skill.color + "80" }}
            >
              {skill.svg}
              <span>{skill.name}</span>
            </div>
          ))}
          {divisor === 3 &&
            remainder !== 0 &&
            generateAdditionalDivs(divisor - remainder)}
        </div>
      </div>
    </div>
  );
}
