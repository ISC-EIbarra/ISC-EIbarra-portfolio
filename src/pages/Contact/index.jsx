import React from 'react';
import { Avatar } from '@nextui-org/react';
import profile from '../../img/profile.png';
import Form from './Form';

function Contact() {
  return (
    <div className="flex w-full flex-col">
      <div className="mx-4 mt-4">
        <h1 className="font-semibold text-4xl">Contácteme</h1>
        <h1 className="font-normal text-lg">
          Aquí encontraras toda la información de{' '}
          <span className="text-blue-700">contacto</span> correspondiente.
        </h1>
      </div>
      <div className="flex md:flex-row flex-col w-full h-full gap-4">
        <div className="hidden md:flex flex-1 items-center justify-center">
          <div className="flex flex-row items-center gap-4 bg-gray-200 rounded-3xl p-4 hover:bg-gray-300 hover:cursor-pointer">
            <Avatar src={profile} className="w-28 h-28 text-large" />
            <div className="flex flex-col ">
              <h1 className="font-normal text-lg">Edson Paul Ibarra Barajas</h1>
              <h2 className="font-semibold text-base">
                Frontend Developer Jr.
              </h2>
              <div className="flex mt-2 gap-1">
                <h2 className="font-bold text-base">Correo:</h2>
                <h2 className="font-normal text-base">EdsonP4100@gmail.com</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Contact;
