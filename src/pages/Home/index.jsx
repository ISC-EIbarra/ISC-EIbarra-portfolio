import React from 'react';
import { useNavigate } from 'react-router-dom';
import TextAnimation from './Text';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-1 gap-4 flex-col md:flex-row bg-red-400">
      <div className="flex-1 bg-yellow-300">
        <div className="flex flex-col w-full h-full justify-center items-center">
          <h1 className="flex md:hidden">Photo</h1>
          <TextAnimation />
          <p className="mt-2 text-xl">Frontend Developer Jr.</p>
          <button
            className="rounded-3xl px-4 py-2 bg-blue-700 mt-4"
            type="button"
            onClick={() => navigate('/projects')}
          >
            <div className="flex gap-2 text-white">
              <p>Mis Proyectos</p>
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
      <div className="hidden md:flex flex-1 bg-green-400">
        <div className="flex w-full h-full justify-center items-center">
          <h1>Photo</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
