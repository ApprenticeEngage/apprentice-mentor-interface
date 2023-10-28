import React, { useState } from "react";
import { sections_data } from "../../constants/data";
import { CourseItem, Lesson, Test } from "../../types/courseItem";
import Buttons from "../../utilities/ButtonGroup";
import { IoRemoveCircle, IoPush } from "react-icons/io5";
import { divIcon } from "leaflet";

const Curriculum = () => {
  const [sections, setSections] = useState(sections_data);
  const [editable, setEditable] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [contentIndex, setContentIndex] = useState(null);
  const [contentVisibility, setContentVisibility] = useState(null);
  const [docPermission, setDocPermission] = useState(null);
  const [urlPermission, setUrlPermission] = useState(null);

  const handleUrl = () => {
    setUrlPermission(!urlPermission);
  };

  const handleDoc = () => {
    setDocPermission(!docPermission);
  };

  const handleContent = (courseItemIndex) => {
    setContentVisibility(!contentVisibility);
    setContentIndex(courseItemIndex);
  };

  const handleEdit = (courseItemIndex) => {
    setEditable(!editable);
    setEditingIndex(courseItemIndex);
  };

  const addChapter = (sectionIndex) => {
    const newSections = [...sections];
    newSections[sectionIndex].courseItems.push(
      new Lesson("New Lesson", "", "Empty!", [])
    );
    setSections(newSections);
  };

  const addTest = (sectionIndex) => {
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
                className="px-8 bg-primary border-b-dark border-[2px] w-11/12 ml-6 mb-2 flex flex-col  p-3"
              >
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center p-3">
                    <h2 className="text-xl font-bold mr-6">
                      {courseItem instanceof Lesson ? `Lesson: ` : `Test: `}
                    </h2>
                    <h2 className="text-xl font-bold mr-3">
                      {courseItem.title}
                    </h2>
                  </div>

                  <div>
                    <button
                      className=" bg-accent p-2 rounded-lg text-text font-bold text-lg mr-3"
                      onClick={() => handleEdit(courseItemIndex)}
                    >
                      Edit Title
                    </button>
                    <button
                      className=" bg-accent p-2 rounded-lg text-text font-bold text-lg"
                      onClick={() => handleContent(courseItemIndex)}
                    >
                      + Content
                    </button>
                  </div>
                </div>

                {/* appears when edit btn is clicked */}
                {courseItemIndex === editingIndex && editable ? (
                  <div className="mt-5 flex flex-col items-start px-3 w-full">
                    <div className="flex flex-row items-center w-full">
                      <input
                        type="text"
                        placeholder="title"
                        className="text-accent p-3 font-bold text-lg rounded-lg mb-2 mr-3 w-4/12"
                      />
                      <div className="hover:cursor-pointer">
                        <IoPush size={24} />
                      </div>
                    </div>
                    <div className="flex flex-row items-center w-full">
                      <input
                        type="text"
                        placeholder="Description"
                        className="text-accent p-3 font-bold text-lg rounded-lg mb-2 mr-3 w-9/12"
                      />
                      <div className="hover:cursor-pointer">
                        <IoPush size={24} />
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* appears when + Content btn is clicked */}
                {courseItemIndex === contentIndex && contentVisibility ? (
                  <div className="px-3 w-full mt-5 flex flex-col justify-start items-start">
                    <hr className="border-[1px] rounded-xl w-full mb-5" />
                    <div className="flex flex-col items-start mb-3 w-full">
                      <h1 className="text-md mb-2  font-semibold">
                        <span className="text-xl font-bold mr-9">UPLOAD</span>
                        Course Content : Could be
                      </h1>
                      <ul className="flex flex-row items-start justify-evenly w-1/2 list-disc  text-red font-bold">
                        <li>Video</li>
                        <li>Article</li>
                        <li>PPT presentation</li>
                      </ul>
                    </div>
                    <div className="flex flex-row items-start">
                      <form
                        action="/api"
                        method="post"
                        encType="multipart/form-data"
                      >
                        <label
                          form="file"
                          className="mr-5 bg-card-color p-2 rounded-lg font-bold"
                        >
                          Course Content
                        </label>
                        <input
                          id="file"
                          name="file"
                          type="file"
                          className="rounded-lg bg-light-bg mr-5"
                        />
                        <button className=" bg-card-color p-2 rounded-lg font-bold">
                          Upload
                        </button>
                      </form>
                    </div>
                    <hr className="border-[1px] rounded-xl mt-6 w-full" />
                    <div className="flex flex-col items-start mb-3 w-full mt-3">
                      <div className="flex flex-col items-start mb-3 w-full">
                        <h1 className="text-md mb-2  font-semibold">
                          <span className="text-xl font-bold mr-3">
                            OPTIONAL
                          </span>{" "}
                          Upload Resources related to the Lesson: Could be
                        </h1>
                        <ul className="flex flex-row items-start justify-evenly w-1/2 list-disc  text-red font-bold">
                          <li>Document</li>
                          <li>URL</li>
                        </ul>
                      </div>
                      {/* form to upload res doc */}
                      <div className="flex flex-row items-start">
                        <button
                          onClick={handleDoc}
                          className="bg-card-color p-2 rounded-lg font-bold mr-5"
                        >
                          Add Document
                        </button>
                        {docPermission && (
                          <form
                            action="/api"
                            method="post"
                            encType="multipart/form-data"
                          >
                            <label form="file" className="">
                              <input
                                id="file"
                                name="file"
                                type="file"
                                className="rounded-lg bg-light-bg mr-5"
                              />
                              <button className="bg-card-color p-2 rounded-lg font-bold">
                                Upload
                              </button>
                            </label>
                          </form>
                        )}
                      </div>

                      {/* uploading a url  */}
                      <div className="flex flex-row items-start mt-3">
                        <button
                          onClick={handleUrl}
                          className="bg-card-color p-2 rounded-lg font-bold mr-5"
                        >
                          Add URL Resource
                        </button>
                        {urlPermission && (
                          <div>
                            <input
                              id="url"
                              name="url"
                              placeholder="URL"
                              type="url"
                              className="rounded-lg bg-light-bg mr-5 text-text font-bold p-1"
                            />
                            <button className="bg-card-color p-2 rounded-lg font-bold">
                              Upload
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : null}
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
