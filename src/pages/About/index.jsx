import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@nextui-org/react';
import data from './data.json';

function About() {
  const navigate = useNavigate();

  return (
    <div className="flex w-full flex-col">
      <div className="mx-4 mt-4">
        <h1 className="font-semibold text-4xl">Acerca</h1>
      </div>
      <div className="flex md:flex-row flex-col w-full h-full gap-4">
        <div className="flex flex-1 items-center justify-center">
          <div className="container bg-white m-4 md:w-3/6 p-4 rounded-lg">
            <p className="text-base text-wrap font-normal">
              Hola, soy Edson Ibarra, un desarrollador Frontend Jr con 4 meses
              de experiencia. Durante este tiempo, he adquirido habilidades en
              diversas áreas del desarrollo, también he tenido participación en
              la documentación de código de proyectos. Además de trabajar en
              proyectos profesionales, también desarrollo proyectos por cuenta
              propia, algunos de los cuales encontrarás en este portafolio.
            </p>
            <h1 className="text-lg font-medium mt-4 text-center ">
              Habilidades
            </h1>
            <div className="flex flex-wrap gap-2 py-4 justify-center">
              {data.map((info) => (
                <Button
                  color="default"
                  variant="ghost"
                  className="flex gap-4 items-center justify-center"
                  key={info.id}
                >
                  <p className="font-medium">{info.name}</p>
                  <img className="h-8" src={info.icon} alt={info.id} />
                </Button>
              ))}
            </div>
            <div className="flex justify-center">
              <button
                className="rounded-3xl px-4 py-2 bg-blue-600 hover:bg-blue-800 transition-colors mt-4"
                type="button"
                onClick={() => navigate('/projects')}
              >
                <div className="flex gap-2 text-white">
                  <p className="font-medium">Proyectos</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
