import React from 'react';
import { Button } from '@nextui-org/react';
import data from './data.json';

function About() {
  return (
    <div className="flex w-full flex-col">
      <div className="mx-4 mt-4">
        <h1 className="font-semibold text-4xl">Acerca</h1>
      </div>
      <div className="flex md:flex-row flex-col w-full h-full gap-4">
        <div className="flex flex-1 items-center justify-center">
          <div className="container bg-white m-4 md:w-3/6 p-4 rounded-lg">
            <p className="text-base text-wrap font-normal">
              Hola!, soy Edson Ibarra, desarrollador Frontend Jr, actualmente
              poseo 4 meses de experiencia. Cuento con experiencia en algunas
              areas de desarrollo, incluido la documentación del código del
              proyecto. Desarrollo proyectos por mi cuenta, los cuales se
              encuentran añadidos en este portafolio.
            </p>
            <h1 className="text-lg font-medium mt-4 text-center ">
              Habilidades
            </h1>
            <div className="flex flex-wrap gap-2 mt-4">
              {data.map((info) => (
                <Button
                  className="flex gap-4 mt-2 items-center justify-center"
                  key={info.id}
                >
                  {info.name}
                  <img className="h-8" src={info.icon} alt={info.id} />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
