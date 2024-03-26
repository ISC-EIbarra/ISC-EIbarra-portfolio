import React from 'react';
import { useNavigate } from 'react-router-dom';
import TextAnimation from './Text';
import profile from '../../img/profile.png';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex w-full gap-8">
      <div className="flex flex-1 flex-col justify-center items-center lg:items-end">
        <img
          className="flex lg:hidden w-[12rem] h-[12rem] rounded-full mb-6"
          src={profile}
          alt="creator"
        />
        <TextAnimation />
        <p className="mt-2 md:text-2xl sm:text-xl text-lg font-medium">
          Frontend Developer Jr.
        </p>
        <button
          className="rounded-3xl px-4 py-2 bg-blue-600 hover:bg-blue-800 transition-colors mt-4"
          type="button"
          onClick={() => navigate('/about')}
        >
          <div className="flex gap-2 text-white">
            <p className="text-lg">Acerca de</p>
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
      <div className="hidden lg:flex flex-1">
        <div className="flex flex-1 items-center px-10">
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
