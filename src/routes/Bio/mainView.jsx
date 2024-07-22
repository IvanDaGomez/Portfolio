import { maximoDivisor } from "../../functions/maximoDivisor";
import { generateAdditionalDivs } from "../../functions/aditionalDivs";
import { skills } from "../../../public/mySkills";
import { services } from "../../../public/myService";
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
            src="/myPhotoEdited.png"
            alt="My Photo"
            className="bigImage"
          />
          <div className="bioContent">
            <p>
              Hello! I&apos;m Ivan Gomez, a passionate software developer with
              a knack for building efficient and scalable web applications.
              With a strong foundation in computer science and a love for
              learning new technologies, I have honed my skills in various
              programming languages and frameworks.
            </p>
            <p>
              I have worked on various projects. My expertise includes
              front-end development with React, HTML, CSS and JS, and back-end
              development with Node.js
            </p>
            <p></p>
            <p>
              In addition to my technical skills, I am a strong advocate for
              teamwork and collaboration. I believe that the best solutions
              come from diverse perspectives and open communication. Outside of
              work, I enjoy exploring new places, reading tech blogs, and
              contributing to open-source projects.
            </p>
            <p>
              I am always eager to take on new challenges and continue growing
              as a developer. Feel free to reach out if you&apos;d like to
              connect or discuss potential collaborations!
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
