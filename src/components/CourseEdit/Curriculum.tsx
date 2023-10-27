import React, { useState } from "react";
import { sections_data } from "../../constants/data";
import { Lesson, Test } from "../../types/courseItem";
import Buttons from "../../utilities/ButtonGroup";
import { IoRemoveCircle, IoPencilSharp } from "react-icons/io5";

const Curriculum = () => {
  const [sections, setSections] = useState(sections_data);

  const addChapter = (sectionIndex: number) => {
    const newSections = [...sections];
    newSections[sectionIndex].courseItems.push(
      new Lesson("New Lesson", "", "Empty!", [])
    );
    setSections(newSections);
  };

  const addTest = (sectionIndex: number) => {
    const newSections = [...sections];
    newSections[sectionIndex].courseItems.push(
      new Test("New Test", "", "23-2-10")
    );
    setSections(newSections);
  };

  return (
    <div className="w-full flex flex-col justify-start items-start text-text">
      <div className="p-12 font-bold mb-2">
        <div className="flex flex-col items-start">
          <h1 className="text-4xl mb-6">Curriculum</h1>
        </div>
        <p className="mb-4 text-center text-xl font-normal">
          Here you shall upload your training/course content!
        </p>
        <hr className="h-[3px]" />
      </div>

      <div className="px-12 flex flex-col items-start justify-start w-full ">
        {sections.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="py-5 px-7 bg-card-color w-10/12 flex flex-col justify-start items-start border-b-dark border-[2px] mb-10"
          >
            <div className="flex flex-row items-center justify-center mb-5">
              <h2 className="text-2xl font-bold mr-8">{section.title}</h2>
              <h2 className="text-3xl font-bold">{section.name}</h2>
            </div>
            <br />
            <div className="flex flex-col items-start mb-5">
              <p className="text-lg font-normal mb-2">
                By the end of the section student's will have learnt:
              </p>
              <p className="text-lg font-bold">{section.learningOutcome}</p>
            </div>

            {section.courseItems.map((courseItem, courseItemIndex) => (
              <div
                key={courseItemIndex}
                className="px-10 bg-primary border-b-dark border-[2px] w-11/12 ml-6 mb-2 flex flex-row items-center justify-between p-3"
              >
                <div className="flex flex-row items-center p-3">
                  <h2 className="text-xl font-bold mr-6">
                    {courseItem instanceof Lesson ? `Lesson: ` : `Test: `}
                  </h2>
                  <h2 className="text-xl font-bold mr-3">{courseItem.title}</h2>
                </div>

                <div>
                  <button
                    className=" bg-accent p-2 rounded-lg text-text font-bold text-lg mr-3"
                    onClick={()=>{}}
                  >
                    Edit Title
                  </button>
                  <button
                    className=" bg-accent p-2 rounded-lg text-text font-bold text-lg"
                    onClick={()=>{}}
                  >
                    + Content
                  </button>
                </div>
              </div>
            ))}

            <Buttons
              onAddListClick={() => {
                addChapter(sectionIndex);
              }}
              onAddTestsClick={() => {
                addTest(sectionIndex);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Curriculum;
