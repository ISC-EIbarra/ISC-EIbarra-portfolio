import React, { useState } from 'react';
import { Tooltip } from '@nextui-org/react';
import projectsData from './data.json';

function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = projectsData.slice(currentSlide, currentSlide + 3);

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
    <div className="flex w-full flex-col">
      <div className="mx-4 mt-4">
        <h1 className="font-semibold text-4xl">Proyectos</h1>
        <h1 className="font-normal text-lg">
          Aquí encontraras todos los{' '}
          <span className="text-blue-700">proyectos</span> realizados al
          momento.
        </h1>
      </div>
      <div className="grid h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center mx-4">
          {projects.map((project) => (
            <div
              key={project.id}
              role="presentation"
              className="flex flex-col items-center justify-center px-2 py-4 bg-gray-200 hover:bg-gray-300 transition-colors rounded hover:cursor-pointer"
              onClick={() => window.open(project.route, '_blank')}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-[30rem] object-cover rounded"
              />
              <h2 className="mt-2 font-medium">{project.title}</h2>
              <p className="mt-2 text-wrap">{project.description}</p>
              <h2 className="mt-2 font-medium">Tecnologías</h2>
              <div className="mt-2 flex gap-2">
                {project.tech?.map((technology) => (
                  <Tooltip
                    key={technology.id}
                    color="primary"
                    content={technology?.name}
                    delay={500}
                  >
                    <img
                      role="presentation"
                      className="h-8"
                      src={technology?.url}
                      alt="technologies"
                      onClick={() => window.open(technology.link, '_blank')}
                    />
                  </Tooltip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-4 my-1">
        <button
          type="button"
          onClick={prevSlide}
          className="bg-blue-500 hover:bg-blue-700 transition-colors text-white rounded-3xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="bg-blue-500 hover:bg-blue-700 transition-colors text-white rounded-3xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Projects;
