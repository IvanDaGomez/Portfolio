import Header from "../../components/header";

import { reducirTexto } from "../../functions/reducirTexto";
import { useEffect, useState } from "react";

export default function Projects(){

    useEffect(()=>window.scrollTo({ top: 0, behavior: 'smooth' }),[])



    const projects = [
        {
            title: "What's Next?",
            link: "",
            codelink: "https://github.com/IvanDaGomez/whats_next_completed",
            phone:"/Projectos/toDoPhone.png",
            computer: "/Projectos/toDoComputer.png"
        },
        {
            title: "greatShop",
            link: "",
            codelink: "https://github.com/IvanDaGomez/greatShop",
            phone:"/Projectos/greatShopPhone.png",
            computer: "/Projectos/greatShopComputer.png"
        },
        {
            title: "Volleyball Colombian Federation Website",
            link: "https://www.fedevolei.com.co",
            codelink:"https://github.com/IvanDaGomez/fedevolei",
            phone:"/Projectos/fedevoleiPhone.png",
            computer: "/Projectos/fedevoleiComputer.png"
        }
    ].reverse()
    
    const [selectedProject, setSelectedProject] = useState(projects[0])
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (project) => {
      setSelectedProject(project);
      setIsOpen(false);
    };

    const handleBeforeProject = () => {
        const currentIndex = projects.findIndex((project) => project.title === selectedProject.title);
        const beforeIndex = (currentIndex - 1); 
        if  (beforeIndex<0) return
        setSelectedProject(projects[beforeIndex]);
      };
    const handleNextProject = () => {
        const currentIndex = projects.findIndex((project) => project.title === selectedProject.title);
        const nextIndex = (currentIndex + 1);
        if (nextIndex>projects.length-1) return
        setSelectedProject(projects[nextIndex]);
      };

    const arrowDown = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={30} height={30} color={"#fff"} fill={"none"}>
    <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>;


    const svgPhone= "/phone.svg"
    const svgComputer = "/pc.svg"
    return (

        <>
        <Header/>
        <div className="mainView">
        <div className="title container">
            <h1>My Projects</h1>
        </div>
        
        <div className="projectsContainer container">

            <div className="accProjects">
            <div className="select">
      <div className="selected" onClick={() => setIsOpen(!isOpen)}>
        {selectedProject ? <>{reducirTexto(selectedProject.title, 40)} {arrowDown}</>: <>Select a project {arrowDown}</>}
      </div>
      {isOpen && (
        <div className="optionsContainer">
          <div className="options">
            {projects.map((project, index) => (
              <div key={index} className="option" onClick={() => handleSelect(project)}>
                {reducirTexto(project.title, 40)}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
                <div>
                <button className="left" onClick={handleBeforeProject} style={{filter:`opacity(${(projects.findIndex((project) => project.title === selectedProject.title)===0) ? 0.4: 1})`}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={40} height={40} color={"#fff"} fill={"none"}><path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <button className="right" onClick={handleNextProject} style={{filter:`opacity(${(projects.findIndex((project) => project.title === selectedProject.title)===projects.length-1) ? 0.4: 1})`}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={40} height={40} color={"#fff"} fill={"none"}><path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                </div>
            </div>
            <div className="infoProject">
                <h1>{selectedProject.title}</h1>
                <a href={selectedProject.link} target="_blank"><p>Click To See The Page</p></a>
                <a href={selectedProject.codelink} target="_blank"><p>Click To See Source Code</p></a>
                </div>
            <div className="variantsContainer" >
              <div className="pc">
                {/*Resolución del Computador: 16 Ancho/10 Alto, 1668 x 1024*/}
                <img className="computerImage"  src={selectedProject.computer} alt="" />
                <img className="over" src={svgComputer} alt="" />
              </div>
                <div className="phone">
                  {/*Resolución del celular: 10 Ancho/20 Alto, 500 x 1024 */}
                  <img className="over" src={svgPhone}  alt="" />
                  <img className="phoneImage" src={selectedProject.phone}  alt="" />
                </div>
            </div>
            
        </div>
        </div>
        </>
    )
}