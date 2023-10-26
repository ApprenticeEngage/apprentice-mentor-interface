import React from 'react'
import { IoPush } from "react-icons/io5";

const Audience = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start text-text">
      <div className="p-12 font-bold">
        <h1 className="text-4xl mb-10">Audience Oriented Insights</h1>
        <hr className="h-[3px]" />
      </div>

      <h1 className="text-3xl mb-5 px-12 font-semibold">Targeted Audience</h1>
      {/* //targetted audience */}
      <div className="px-12 text-xl font-light flex flex-col mb-12">
        <p className="mb-3">
          Tell us what kind of audience your vocational training aims to target?
          What demographic? What Skillset?
        </p>
        <div className="flex flex-row items-center">
          <input
            placeholder="Targeted Audience"
            className="text-accent rounded-lg p-2 grow"
          />
          <div className="hover:cursor-pointer">
            <IoPush size={24} />
          </div>
        </div>
      </div>

      <h1 className="text-3xl mb-5 px-12 font-semibold">Learning Outcomes</h1>
      {/* learning outcomes */}

      <div className="px-12 text-xl font-light flex flex-col mb-12">
        <p className="mb-3">
          At the end of the course what will your apprentices have learned? What
          skills would they have gained? Enlist at least 4!
        </p>
        <div className="flex flex-row items-center mb-3">
          <input
            placeholder="Learning Outcome"
            className="text-accent rounded-lg p-2 grow"
          />
          <div className="hover:cursor-pointer">
            <IoPush size={24} />
          </div>
        </div>
        <div className="flex flex-row items-center mb-3">
          <input
            placeholder="Learning Outcome"
            className="text-accent rounded-lg p-2 grow"
          />
          <div className="hover:cursor-pointer">
            <IoPush size={24} />
          </div>
        </div>
        <div className="flex flex-row items-center mb-3">
          <input
            placeholder="Learning Outcome"
            className="text-accent rounded-lg p-2 grow"
          />
          <div className="hover:cursor-pointer">
            <IoPush size={24} />
          </div>
        </div>
        <div className="flex flex-row items-center mb-3">
          <input
            placeholder="Learning Outcome"
            className="text-accent rounded-lg p-2 grow"
          />
          <div className="hover:cursor-pointer">
            <IoPush size={24} />
          </div>
        </div>
      </div>

      {/* pre-req */}

      {/* course difficulty */}
    </div>
  );
}

export default Audience