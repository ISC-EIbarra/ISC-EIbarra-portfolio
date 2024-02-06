import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comentarios, setComentarios] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if ([name, email, comentarios].includes('')) {
    // }
  };

  return (
    <div className="register">
      <div className="bg-white rounded-3xl px-4  py-2">
        <h1 className="font-normal text-lg text-center mt-4">
          Rellena los siguientes <span className="text-blue-700">campos</span>
        </h1>

        <form onSubmit={handleSubmit} className="py-2 px-4">
          <div className="my-4">
            <label htmlFor="nombre" className="text-gray-600 block">
              Nombre
              <input
                id="nombre"
                type="text"
                placeholder="Ingresa tú nombre"
                className="w-full mt-2 py-2 px-4 rounded-3xl border bg-gray-100"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className="my-5">
            <label htmlFor="email" className="text-gray-600 block">
              Email
              <input
                id="email"
                type="email"
                placeholder="Ingresa tú email"
                className="w-full mt-2 py-2 px-4 rounded-3xl border bg-gray-100"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="mb-2">
            <label className="text-gray-700 text-base" htmlFor="description">
              Comentarios
              <textarea
                id="description"
                className="w-full mt-2 py-2 px-4 rounded-3xl border placeholder-gray-400"
                placeholder="Añade algunos comentarios"
                value={comentarios}
                onChange={(e) => setComentarios(e.target.value)}
              />
            </label>
          </div>
          <div className="w-full flex justify-center">
            <input
              type="submit"
              value="Enviar"
              className="my-2 py-2 px-4 rounded-3xl border bg-blue-600 text-white hover:cursor-pointer hover:bg-blue-800 transition-colors"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
