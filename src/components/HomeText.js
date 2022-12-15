import React from 'react';

function HomeText() {
  return (
    <div className=" flex  justify-left   bg-blue-100 p-6 rounded-md">
      <div>
        <h1 className="  mt-1 sm:text-xl font-bold lg:text-2xl ">
          👋 Hi, I am Nurudeen.
        </h1>

        <p className="mt-9 sm:text-sm md:text-xl lg:text-2xl text-justify">
          {' '}
          I am a Frontend Developer, resident in West Yorkshire, UK. In my spare
          time I like reviewing codes and building my own projects. Feel
          free to contact me for collaborations and job opportunities. Would
          love to hear you.
        </p>

        <p className=" mt-9 sm:text-sm md:text-xl lg:text-2xl">
          {' '}
          I write HTML & CSS | Javascript | Typescript | React.Js | Node.Js
        </p>
      </div>
    </div>
  );
}

export default HomeText;
