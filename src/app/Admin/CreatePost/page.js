"use client";
import HtmlEditor from "@/Components/Admin/HtmlEditor ";
import TextEditor from "@/Components/Admin/TextEditor";
import Sidebar from "@/Components/Sidebar";
import React, { useState } from "react";
const CreatePost = () => {
  const [blogNav, setblogNav] = useState("-right-full");
  const [category, setcategory] = useState([]);
  const [editorType, seteditorType] = useState("html");
  const [cat, setcat] = useState("");
  const addCategory = (cate) => {
    setcategory([...category, cate]);
  };
  const removeSpecificCategory = (cate) => {
    setcategory(category.filter((currentCategory) => currentCategory !== cate));
  };

  const toggleblogNav = () => {
    if (blogNav === "right-0") {
      setblogNav("-right-full");
    } else {
      setblogNav("right-0");
    }
  };
  return (
    <div className="w-full bg-white p-5  h-full">
      <div className="  gap-5 flex">
        <input
          type="text"
          className="w-full border-b-2  border-red-500 bg-transparent outline-none p-2 "
          placeholder="Title"
          name=""
          id=""
        />
        <div className=" w-1/5 flex gap-2">
          <button className="border   flex  gap-2 rounded-full items-center justify-center  p-2 px-3">
            <i className="bi bi-eye-fill" />
            <p className="hidden md:block">Preview</p>
          </button>
          <button className=" flex   gap-2 rounded-full bg-red-600  text-white  items-center justify-center  font-semibold  p-2 px-3">
            <i className="bi bi-telegram" />
            <p className="hidden md:block">Publish</p>
          </button>
        </div>
        <button
          onClick={toggleblogNav}
          className="border    block md:hidden  gap-2 rounded-full p-2 px-3"
        >
          <i className="bi bi-gear-fill" />
        </button>
      </div>

      <div className=" w-full flex gap-5 mt-10">
        <div className="w-full md:w-4/5">
          <div>
            <textarea
              className="border outline-none p-5 w-full h-auto"
              id=""
              rows="2"
              placeholder="Description..."
            ></textarea>
          </div>

          <div className="flex gap-5 mt-5 border p-5  font-semibold ">
            <button
              onClick={() => {
                seteditorType("html");
              }}
              className={`${
                editorType === "html" && "bgpColor text-white"
              } rounded-full px-10 py-2`}
            >
              HTML
            </button>
            <button
              onClick={() => {
                seteditorType("text");
              }}
              className={`${
                editorType === "text" && "bgpColor text-white"
              } rounded-full px-10 py-2`}
            >
              Editor
            </button>
          </div>
          {editorType === "text" ? <TextEditor /> : <HtmlEditor htmlData="<p>Hey Man</p>" />}
        </div>

        <div
          className={`flex md:w-1/5 md:relative fixed w-full h-full md:right-0 transition-all ease-linear delay-300   ${blogNav} md:top-0 top-20  md:p-0 z-50 bg-white  p-5 flex-col gap-5`}
        >
          <div className="md:hidden">
            <button
              onClick={toggleblogNav}
              className=" bg-gray-100 dark:bg-gray-700 p-1  block text-left   "
            >
              <i className="bi bi-arrow-left text-lg" />
            </button>{" "}
          </div>
          <div className="flex flex-col w-full ">
            <h5 className="text-gray-500">Upload Thumbnail</h5>
            <div>
              <input type="file" name="" className="mt-2" id="" />
              <button className="pBtn w-full py-1 mt-4">Upload</button>
            </div>
          </div>
          <div>
            <h5 className="text-gray-500">Keywords</h5>
            <input
              type="text"
              className="border outline-none mt-2 p-2 text-sm w-full  "
              placeholder="keywords..."
            />
          </div>
          <div>
            <h5 className="text-gray-500">Category</h5>
            <div className="flex gap-5 justify-center mt-2 items-center">
              <input
                type="text"
                onChange={(e) => {
                  setcat(e.target.value);
                }}
                value={cat ? cat : ""}
                className="border outline-none p-2 text-sm w-full  "
                placeholder="Category"
              />
              <button
                className="pBtn px-2 w-10 h-9"
                disabled={!cat ? true : false}
                onClick={() => {
                  addCategory(cat);
                  setcat("");
                }}
              >
                <i className="bi text-white font-semibold bi-plus-lg" />
              </button>
            </div>

            <div
              className={`mt-5 border  gap-2  flex-wrap p-2 ${
                category.length === 0 ? "hidden" : "flex"
              }`}
            >
              {category &&
                category.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="text-xs bg-gray-50  rounded-sm p-1 "
                    >
                      {item}{" "}
                      <button
                        className="hover:bg-gray-100   rounded-sm"
                        onClick={() => {
                          removeSpecificCategory(item);
                        }}
                      >
                        <i className="bi bi-x-lg font-bold p-1 " />
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
