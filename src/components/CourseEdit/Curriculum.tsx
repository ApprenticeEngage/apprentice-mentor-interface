import React, { useState } from "react";

const Curriculum = () => {
  const [sections, setSections] = useState([
    {
      title: "Section 1",
      name: "Instruction",
      learningOutcome: "Learning outcome of Section 1",
      lessons: [{
        title: "Hello World",
        desc: "Empty!",
        resources: []
      }],
      tests: [{
        topic : "FOP",
        date: "23-2-10",
      }],
    },
    {
      title: "Section 2",
      name: "Wireshark",
      learningOutcome: "Learning outcome of Section 2",
      lessons: [],
      tests: [],
    },
  ]);

  const addChapter = (sectionIndex) => {
    // Create a new chapter and add it to the specified section
    const newSections = [...sections];
    newSections[sectionIndex].lessons.push({
      title: "New Lesson",
      desc: "",
      resources: [],
    });
    setSections(newSections);
  };

  const addTest = (sectionIndex) => {
    // Create a new test and add it to the specified section
    const newSections = [...sections];
    newSections[sectionIndex].tests.push({ title: "New Test", date: "" });
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

            <div className="px-10 bg-primary border-b-dark border-[2px] w-full ml-6">
              {section.lessons.map((chapter, chapterIndex) => (
                <div key={chapterIndex} className="flex flex-row items-start p-3">
                  <h2 className="text-xl font-bold mr-6">{`Chapter ${chapterIndex}`}</h2>
                  <h2 className="text-xl font-bold">{chapter.title}</h2>
                </div>
              ))}
            </div>

            <button onClick={() => addTest(sectionIndex)}>Add Test</button>
            <button onClick={() => addChapter(sectionIndex)}>Add Lesson</button>
            {section.tests.map((test, testIndex) => (
              <div key={testIndex}>
                <h3>{test.title}</h3>
                <p>Date: {test.date}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Curriculum;
