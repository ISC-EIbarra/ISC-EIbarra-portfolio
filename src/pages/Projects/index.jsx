import React, { useState } from 'react';
import projectsData from './data.json';

function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projectsToShow = projectsData.slice(currentSlide, currentSlide + 3);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 3) % projectsData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (backSlide) =>
        (backSlide - 3 + projectsData.length) % projectsData.length,
    );
  };

  return (
    <div className="flex flex-1 flex-col bg-yellow-400">
      <div className="flex flex-1 flex-wrap">
        {projectsToShow.map((project) => (
          <div
            key={project.id}
            className="w-1/3 px-2 flex flex-col items-center justify-center"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-[30rem] h-auto object-cover rounded"
            />
            <h2 className="mt-2">{project.title}</h2>
            <p className="">{project.description}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mb-4">
        <button
          type="button"
          onClick={prevSlide}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Anterior
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default Projects;
