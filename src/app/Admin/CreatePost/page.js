"use client";
import HtmlEditor from "@/Components/Admin/HtmlEditor ";
import TextEditor from "@/Components/Admin/TextEditor";
import { useUserAuth } from "@/Context/UserAuthContext";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../../firebase";
import { v4 } from "uuid";
import React, { useState } from "react";
import LoadingSpinner, {
  BtnSpinner,
  BtnSpinner2,
} from "@/Components/Spinner/LoadingSpinner";
import { UploadButton } from "@/Components/UtilComponent";
import { AddBlog } from "@/Store/Actions/blogAction";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
const CreatePost = () => {
  const [blogNav, setblogNav] = useState("-right-full");
  const [cat, setcat] = useState("");
  const { userIDS } = useUserAuth();
  const [loading, setloading] = useState(false);
  // Data State
  const [title, settitle] = useState("");
  const [category, setcategory] = useState([]);
  const [imageUrls, setImageUrls] = useState("");
  const [description, setdescription] = useState("");
  const [artical, setartical] = useState("");

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

  // ------------------Upload Image-------------
  const [uploadLoad, setuploadLoad] = useState(false);
  const [imageUpload, setImageUpload] = useState(null);
  const [upload, setupload] = useState(false);

  const uploadFile = async (e) => {
    e.preventDefault();
    setuploadLoad(true);
    if (imageUpload == null) {
      setuploadLoad(false);
      return toast.error("Please Select Image");
    }
    if (!title) {
      setuploadLoad(false);
      return toast.error("Please Enter Title");
    }

    const imageRef = ref(
      storage,
      `Blog/${title}/Cover/${imageUpload.name + v4()}`
    );
    await uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls(url);
      });
    });
    toast.success("Image Uploaded");
    setuploadLoad(false);
    setupload(true);
  };

  // --------------------- Add Blog to Database -----------------
  const dispatch = useDispatch();
  const createBlog = async (e) => {
    e.preventDefault();
    if (
      category.length === 0 ||
      !upload ||
      !title ||
      !imageUrls ||
      !description ||
      !artical
    ) {
      return toast.error("Please Fill all the fields");
    }
    const { payload } = await dispatch(
      AddBlog(
        {
          title,
          category,
          author: userIDS.ID,
          image: imageUrls,
          description,
          artical,
        },
        userIDS.firebaseuid
      )
    );
    if (payload.message) {
      toast.success(payload.message);
    }
    if (payload.error) {
      toast.error(payload.error);
    }
  };
  const blogs = useSelector((state) => state.blogs);
  const { isLoading } = blogs;

  return (
    <div className="w-full    h-full">
      <div className="  bg-white p-5 gap-5 flex">
        <input
          type="text"
          onChange={(e) => {
            settitle(e.target.value);
          }}
          className="w-full md:w-4/5 border-b-2  border-red-500 bg-transparent outline-none p-2 "
          placeholder="Title"
          name=""
          id=""
        />
        <div className=" w-1/5 flex justify-between gap-2">
          <button className="border  w-full  flex  gap-2 rounded-full items-center justify-center  p-2 px-3">
            <i className="bi bi-eye-fill" />
            <p className="hidden md:block">Preview</p>
          </button>
          <button
            type="submit"
            onClick={createBlog}
            disabled={loading ? true : false}
            className=" flex  w-full  gap-2 rounded-full bg-red-600  text-white  items-center justify-center  font-semibold  p-2 px-3"
          >
            {isLoading ? <BtnSpinner2 /> : <i className="bi bi-telegram" />}
            <p className="hidden md:block">Publish</p>
          </button>
        </div>
        <button
          type="button"
          onClick={toggleblogNav}
          className="border    block md:hidden  gap-2 rounded-full p-2 px-3"
        >
          <i className="bi bi-gear-fill" />
        </button>
      </div>
    

      <div className=" w-full flex gap-5 mt-5 ">
        <div className="w-full bg-white p-5 md:w-4/5">
          <div>
            <textarea
              className="border outline-none p-5 w-full h-auto"
              id=""
              rows="2"
              onChange={(e) => {
                setdescription(e.target.value);
              }}
              placeholder="Description..."
            ></textarea>
          </div>

          <TextEditor setartical={setartical}  artical={artical} />
        </div>

        <div
          className={`flex md:w-1/5 md:relative fixed w-full h-full md:right-0 transition-all ease-linear delay-300   ${blogNav} md:top-0 top-20   z-50 bg-white p-5 flex-col gap-5`}
        >
          <div className="md:hidden ">
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
              <input
                type="file"
                name=""
                onChange={(event) => {
                  setImageUpload(event.target.files[0]);
                }}
                className="mt-2"
                id=""
              />
              <UploadButton
                name="Upload"
                btnStyle="pBtn w-full py-1 mt-4"
                upload={upload}
                loading={uploadLoad}
                uploadFile={uploadFile}
              />
            </div>
          </div>

          {imageUrls && (
            <div className="w-full">
              <img src={imageUrls} className="w-full" />
            </div>
          )}
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
