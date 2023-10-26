import React, { useState } from "react";
import { IoPush, IoRemoveCircle } from "react-icons/io5";
import useCourseDifficulty from "../../hooks/courseDiffHook";

const Audience = () => {
  const [learningOutcomes, setLearningOutcomes] = useState([""]);
  const [prerequisites, setPrerequisites] = useState([""]);
  const [courseDifficulty, setCourseDifficulty] = useCourseDifficulty(0, 5);

  const handleAddLearningOutcome = () => {
    setLearningOutcomes([...learningOutcomes, ""]);
  };

  const handleAddPrerequisite = () => {
    setPrerequisites([...prerequisites, ""]);
  };
  const handleRemoveLearningOutcome = (index) => {
    const updatedLearningOutcomes = [...learningOutcomes];
    updatedLearningOutcomes.splice(index, 1);
    setLearningOutcomes(updatedLearningOutcomes);
  };
  const handleRemovePrerequisite = (index) => {
    const updatedPrerequisites = [...prerequisites];
    updatedPrerequisites.splice(index, 1);
    setPrerequisites(updatedPrerequisites);
  };

  const handleInputChange = (index, e, type) => {
    if (type === "learningOutcome") {
      const updatedLearningOutcomes = [...learningOutcomes];
      updatedLearningOutcomes[index] = e.target.value;
      setLearningOutcomes(updatedLearningOutcomes);
    } else if (type === "prerequisite") {
      const updatedPrerequisites = [...prerequisites];
      updatedPrerequisites[index] = e.target.value;
      setPrerequisites(updatedPrerequisites);
    }
  };

  return (
    <div className="w-full flex flex-col justify-start items-start text-text">
      <div className="p-12 font-bold">
        <h1 className="text-4xl mb-10">Audience Oriented Insights</h1>
        <hr className="h-[3px]" />
      </div>

      <h1 className="text-3xl mb-5 px-12 font-semibold">Targeted Audience</h1>
      {/* //targetted audience */}
      <div className="px-12 text-xl font-light flex flex-col mb-12 ">
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

      {/* learning outcome */}
      <h1 className="text-3xl mb-5 px-12 font-semibold">Learning Outcomes</h1>
      <div className="px-12 text-xl font-light flex flex-col mb-12 w-3/4">
        {/* ... Other code ... */}
        {learningOutcomes.map((outcome, index) => (
          <div className="flex flex-row items-center mb-3" key={index}>
            <input
              placeholder="Learning Outcome"
              className="text-accent rounded-lg p-2 grow"
              value={outcome}
              onChange={(e) => handleInputChange(index, e, "learningOutcome")}
            />
            <div className="flex flex-row items-center">
              <div className="hover:cursor-pointer pr-6 pl-2">
                <IoPush size={24} />
              </div>

              <button
                className="hover:cursor-pointer"
                onClick={() => handleRemoveLearningOutcome(index)}
              >
                <IoRemoveCircle size={24} />
              </button>
            </div>
          </div>
        ))}
        <button
          className="text-text hover:cursor-pointer bg-card-dark w-2/12 font-bold rounded-lg"
          onClick={handleAddLearningOutcome}
        >
          Add Learning Outcome
        </button>
      </div>

      {/* pre Requisite */}
      <h1 className="text-3xl mb-5 px-12 font-semibold">Pre-Requisites</h1>
      <div className="px-12 text-xl font-light flex flex-col mb-12  w-3/4">
        {/* ... Other code ... */}
        {prerequisites.map((prerequisite, index) => (
          <div className="flex flex-row items-center mb-3 w-full" key={index}>
            <input
              placeholder="Pre-Requisite"
              className="text-accent rounded-lg p-2 w-full"
              value={prerequisite}
              onChange={(e) => handleInputChange(index, e, "prerequisite")}
            />
            <div className="flex flex-row items-center">
              <div className="hover:cursor-pointer pr-6 pl-2">
                <IoPush size={24} />
              </div>

              <button
                className="hover:cursor-pointer"
                onClick={() => handleRemovePrerequisite(index)}
              >
                <IoRemoveCircle size={24} />
              </button>
            </div>
          </div>
        ))}
        <button
          className="text-text hover:cursor-pointer bg-card-dark w-2/12 font-bold rounded-lg"
          onClick={handleAddPrerequisite}
        >
          Add Prerequisite
        </button>
      </div>

      {/* course difficulty */}
      <h1 className="text-3xl mb-5 px-12 font-semibold">
        Course Difficulty Level
      </h1>
      <div className="px-12 text-xl font-light flex flex-col mb-12">
        <p className="mb-3">
          How difficult would the course be for your targeted audience? Give a
          number on a scale from 0-5
        </p>
        <div className="flex flex-row items-center">
          <input
            placeholder="Course Difficulty"
            className="text-accent rounded-lg p-2 grow"
            type="number"
            value={courseDifficulty}
            onChange={(e) => setCourseDifficulty(e.target.value)}
          />
          <div className="hover:cursor-pointer">
            <IoPush size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audience;
