"use client";
import React from "react";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../../firebase";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import {
  FullScreenLoader,
  FullScreenLoaderMsg,
} from "@/Components/Spinner/LoadingSpinner";
const fileTypes = ["ZIP", "RAR"];
const ImageTypes = ["JPEG", "SVG", "WEBP", "PNG"];

const Media = ({
  setFile,
  title,
  setthumbnail,
  thumbnail,
  images,
  setimages,
}) => {
  //File Uploading
  const [loading, setloading] = useState(false);
  const handleChangeProduct = async (file) => {
    setloading(true);
    if (!title) {
      setloading(false);

      return toast.error("fill title first");
    }
    const imageRef = ref(
      storage,
      `Product/${title}/ProductFile/${file[0].name}`
    );
    await uploadBytes(imageRef, file[0]).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setFile(url);
      });
    });
    setloading(false);

    toast.success("Image Uploaded");
  };
  const handleChangeProductImage = async (file) => {
    setloading(true);
    if (!title) {
      setloading(false);
      return toast.error("fill title first");
    }
    const uploadImages = Array.from(file).map((file) => {
      const imageName = file.name + v4();
      const imageRef = ref(storage, `Product/${title}/Images/${imageName}`);
      return uploadBytes(imageRef, file);
    });

    try {
      const uploadSnapshots = await Promise.all(uploadImages);

      const downloadURLPromises = uploadSnapshots.map((snapshot) => {
        return getDownloadURL(snapshot.ref);
      });

      const downloadURLs = await Promise.all(downloadURLPromises);
      setimages(downloadURLs);
      setloading(false);
      toast.success("Images Uploaded");
    } catch (error) {
      setloading(false);
      toast.error("Error uploading images");
    }
  };

  const handleChangeProductThmbnail = async (file) => {
    setloading(true);

    if (!title) {
      setloading(false);

      return toast.error("fill title first");
    }
    const imageRef = ref(
      storage,
      `Product/${title}/Cover/${file[0].name + v4()}`
    );
    await uploadBytes(imageRef, file[0]).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setthumbnail(url);
      });
    });
    setloading(false);

    toast.success("Image Uploaded");
  };

  return (
    <div className="p-5  bg-white">
      {loading && <FullScreenLoaderMsg />}
      <label className="font-semibold text-gray-500">Media</label>
      <div className=" border-2 border-dashed gap-5 grid grid-cols-1 lg:grid-cols-3 rounded-md p-5 mt-5">
        <div className=" flex gap-2 flex-col">
          <label className="text-sm font-bold  text-gray-600">Images</label>
          <FileUploader
            multiple={true}
            handleChange={handleChangeProductImage}
            name="productImg"
            types={ImageTypes}
          />
        </div>
        <div className=" flex gap-2 flex-col">
          <label className="text-sm font-bold  text-gray-600">Thumbnail</label>
          <FileUploader
            multiple={true}
            handleChange={handleChangeProductThmbnail}
            name="productThuumbnail"
            types={ImageTypes}
          />
        </div>
        <div className=" flex gap-2 flex-col">
          <label className="text-sm font-bold  text-gray-600">Product</label>
          <FileUploader
            multiple={true}
            handleChange={handleChangeProduct}
            name="file"
            types={fileTypes}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div className=" border-2 border-dashed w-full items-center flex justify-between flex-col rounded-md p-5 mt-5">
          <label className="text-sm font-bold  text-gray-600 mb-5">
            Thumbnail
          </label>
          {!thumbnail && (
            <div className="w-full  text-sm text-center py-2">N/A</div>
          )}
          <img src={thumbnail} className="w-96" alt="" />
        </div>
        <div className=" border-2 border-dashed w-full items-center  flex  flex-col rounded-md p-5 mt-5">
          <label className="text-sm font-bold  text-gray-600 mb-5">
            Images
          </label>
          <div className="flex flex-wrap gap-5">
            {images.length === 0 && (
              <div className="w-full  text-sm text-center py-2">N/A</div>
            )}

            {images.map((image, index) => {
              return <img key={index} src={image} className="w-20" alt="" />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
