/* eslint-disable react/prop-types */
import { useState } from 'react';
import { reducirTexto } from '../functions/reducirTexto';

export function CustomSelect({ projects, selectedProject,setSelectedProject }) {
  
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (project) => {
    setSelectedProject(project);
    setIsOpen(false);
  };

  return (
    <div className="select">
      <div className="selected" onClick={() => setIsOpen(!isOpen)}>
        {!isOpen && selectedProject ? reducirTexto(selectedProject.title, 40) : 'Select a project'}
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
  );
}
