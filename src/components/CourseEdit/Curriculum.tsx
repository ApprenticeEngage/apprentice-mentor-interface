import React, { useState } from "react";
import { sections_data } from "../../constants/data";
import { CourseItem, Lesson, Test } from "../../types/courseItem";
import Buttons from "../../utilities/ButtonGroup";
import { IoRemoveCircle, IoPush } from "react-icons/io5";
import { divIcon } from "leaflet";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";

const Curriculum = () => {
  const [sections, setSections] = useState(sections_data);
  const [editable, setEditable] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [contentIndex, setContentIndex] = useState(null);
  const [contentVisibilities, setContentVisibilities] = useState(
    Array(sections.length).fill(false)
  );
  const [docPermission, setDocPermission] = useState(null);
  const [urlPermission, setUrlPermission] = useState(null);

  //for file validation : document
  const [fileD, setFileD] = useState(null);
  const [isErrorD, setIsErrorD] = useState(false);
  const [errorMsgD, setErrorMsgD] = useState("");
  const [isSuccessD, setIsSuccessD] = useState(false);

  //for file validations : Course
  const [file, setFile] = useState(null);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  //for course item validation
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    setIsSuccess(false);

    // Checking if the file type is allowed or not
    // ,.pdf,.odt,.docx,.pptx,.ppt,.md
    const allowedTypesCourse = [
      "video/mp4",
      "video/mov",
      "video/wmv",
      "video/avi",
      "video/mkv",
      "video/webm",
      "application/pdf",
      "text/markdown",
      "application/vnd.oasis.opendocument.text",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    ];
    if (!allowedTypesCourse.includes(selectedFile?.type)) {
      setIsError(true);
      setErrorMsg(
        "Only PDF, ODT, DOCX, PPTX, PPT, MP4, and MD files are allowed."
      );
      return;
    } else {
      setIsError(false);
      setFile(selectedFile);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (isError) return;
    setErrorMsg("");

    // Checking if the file has been selected
    if (!file) {
      setIsError(true);
      setErrorMsg("Please select a file.");
      return;
    }

    setIsError(false);
    setIsSuccess(true);
  };

  //for document validation

  const fileValidationDocument = (event) => {
    const selectedFile = event.target.files[0];

    setIsSuccessD(false);

    // Checking if the file type is allowed or not
    // ,.pdf,.odt,.docx,.pptx,.ppt,.md
    const allowedTypesDoc = [
      "application/pdf",
      "text/markdown",
      "application/vnd.oasis.opendocument.text",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    ];
    if (!allowedTypesDoc.includes(selectedFile?.type)) {
      setIsErrorD(true);
      setErrorMsgD("Only PDF, ODT, DOCX, PPTX, PPT and MD files are allowed.");
      return;
    } else {
      setIsErrorD(false);
      setFileD(selectedFile);
    }
  };

  const handleUrl = () => {
    setUrlPermission(!urlPermission);
  };

  const handleDoc = () => {
    setDocPermission(!docPermission);
  };

  const handleContent = (courseItemIndex) => {
    const newContentVisibilities = [...contentVisibilities];
    newContentVisibilities[courseItemIndex] =
      !newContentVisibilities[courseItemIndex];
    setContentVisibilities(newContentVisibilities);
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

  //updating the title of the courseItem
  const [courseItemtitle, setCourseItemTitle] = useState(null);

  const handleTitleChange = (e) => {
    setCourseItemTitle(e.target.value);
  };

  const saveTitle = (sectionIndex, courseItemIndex) => {
    const newSections = [...sections];
    newSections[sectionIndex].courseItems[courseItemIndex].title =
      courseItemtitle;
    setSections(newSections);

    // Reset the editable state
    setEditable(true);
  };

  //setting desc
  const [desc, setDesc] = useState(false);
  const [descContent, setDescContent] = useState(null);

  const handleDesc = (e) => {
    setDescContent(e.target.value);
  };

  const saveDesc = (sectionIndex, courseItemIndex) => {
    const newSections = [...sections];
    newSections[sectionIndex].courseItems[courseItemIndex].desc = descContent;
    setSections(newSections);

    setDesc(true);

    // Reset the editable state
    setEditable(true);
  };

  //test date
  const [testDate, setTestDate] = useState({});



  return (
    <div className="w-full flex flex-col justify-start items-start text-text">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
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
                  {courseItemIndex == editingIndex && desc && (
                    <div className="flex flex-col text-text items-start">
                      <hr className="border-[1px] rounded-xl w-full mt-5" />
                      <h1 className="text-xl font-bold text-text">
                        Description
                      </h1>
                      <h1 className="font-normal text-lg">{courseItem.desc}</h1>
                    </div>
                  )}

                  {/* appears when edit btn is clicked */}
                  {courseItemIndex === editingIndex && editable ? (
                    <div className="mt-5 flex flex-col items-start px-3 w-full">
                      <div className="flex flex-row items-center w-full">
                        <input
                          type="text"
                          placeholder="title"
                          onChange={handleTitleChange}
                          className="text-accent p-3 font-bold text-lg rounded-lg mb-2 mr-3 w-4/12"
                        />
                        <div
                          className="hover:cursor-pointer"
                          onClick={() =>
                            saveTitle(sectionIndex, courseItemIndex)
                          }
                        >
                          <IoPush size={24} />
                        </div>
                      </div>
                      <div className="flex flex-row items-center w-full">
                        <input
                          type="text"
                          placeholder="Description"
                          onChange={handleDesc}
                          className="text-accent p-3 font-bold text-lg rounded-lg mb-2 mr-3 w-9/12"
                        />
                        <div
                          className="hover:cursor-pointer"
                          onClick={() =>
                            saveDesc(sectionIndex, courseItemIndex)
                          }
                        >
                          <IoPush size={24} />
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {/* appears when + Content btn is clicked */}
                  {contentVisibilities[courseItemIndex] ? (
                    courseItem instanceof Lesson ? (
                      <div className="px-3 w-full mt-5 flex flex-col justify-start items-start">
                        <hr className="border-[1px] rounded-xl w-full mb-5" />
                        <div className="flex flex-col items-start mb-3 w-full">
                          <h1 className="text-md mb-2  font-semibold">
                            <span className="text-xl font-bold mr-9">
                              UPLOAD
                            </span>
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
                              accept="video/*,.pdf,.odt,.docx,.pptx,.ppt,.md"
                              className="rounded-lg bg-light-bg mr-5"
                              onChange={handleFileChange}
                            />
                            <button
                              className=" bg-card-color p-2 rounded-lg font-bold"
                              onClick={handleSubmit}
                            >
                              Upload
                            </button>
                            {isError && (
                              <div className="font-bold text-red text-lg">
                                {errorMsg}
                              </div>
                            )}
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
                                <input
                                  id="file"
                                  name="file"
                                  type="file"
                                  className="rounded-lg bg-light-bg mr-5"
                                  onChange={fileValidationDocument}
                                />
                                <button className="bg-card-color p-2 rounded-lg font-bold">
                                  Upload
                                </button>
                                {isErrorD && (
                                  <div className="font-bold text-red text-lg">
                                    {errorMsgD}
                                  </div>
                                )}
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
                    ) : courseItem instanceof Test ? (
                      <div className="mt-5 flex flex-col items-start px-3 w-full">
                        <div className="flex flex-row items-center w-full">
                          <input
                            type="text"
                            placeholder="Topic"
                            className="text-accent p-3 font-bold text-lg rounded-lg mb-2 mr-3 w-4/12"
                          />
                          <div className="hover:cursor-pointer">
                            <IoPush size={24} />
                          </div>
                        </div>
                        <div className="flex flex-row items-center w-full">
                          <DatePicker
                            label="Basic date picker"
                            
                          />
                          <div className="hover:cursor-pointer ml-3">
                            <IoPush size={24} />
                          </div>
                        </div>
                      </div>
                    ) : null
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
      </LocalizationProvider>
    </div>
  );
};

export default Curriculum;
