import React from 'react';
import { useNavigate } from 'react-router-dom';
import TextAnimation from './Text';
import profile from '../../img/profile.png';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-1 gap-4 bg-yellow-300">
      <div className="flex flex-1 flex-col justify-center items-center bg-blue-400">
        <img
          className="flex sm:hidden w-[12rem] h-[12rem] rounded-full mb-6"
          src={profile}
          alt="creator"
        />
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
      <div className="hidden sm:flex flex-1 bg-red-200">
        <div className="flex flex-1 justify-center items-center">
          <img
            className="w-[18rem] h-[18rem] rounded-full"
            src={profile}
            alt="creator"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
