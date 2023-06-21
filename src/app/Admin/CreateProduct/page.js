"use client";
import TextEditor from "@/Components/Admin/TextEditor";
import { Divider } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from "react";

import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["PDF", "ZIP", "RAR"];
const ImageTypes = ["JPEG", "SVG", "WEBP", "PNG"];
const CreateProdct = () => {
  const [Description, setDescription] = useState("");

  // Pricing
  const [price, setprice] = useState(null);
  const [compareprice, setcompareprice] = useState(null);
  const [costPerItem, setcostPerItem] = useState(null);
  const [profit, setprofit] = useState(null);
  const [margin, setmargin] = useState(null);

  //File Uploading
  const [productImg, setproductImg] = useState(null);
  const [file, setFile] = useState(null);
  const handleChangeProduct = (file) => {
    setFile(file);
  };
  const handleChangeProductImage = (file) => {
    setproductImg(file);
  };

  return (
    <>
    <nav>
      <h1 className="text-lg pb-5 font-bold"> <ArrowBackIcon/> Create Product</h1>
    </nav>
      <section className=" flex gap-5 flex-col md:flex-row ">
        <div className="  w-full flex flex-col gap-5">
          <div className="p-5 bg-white">
            <div className="flex flex-col gap-2">
              <label>Title</label>
              <input
                className="border rounded-sm px-2 py-2 outline-none"
                type="text"
              />
            </div>
            <div className="flex flex-col mt-5 ">
              <label className="mb-5">Description</label>
              <TextEditor setartical={setDescription} artical={Description} />
            </div>
          </div>

          <div className="p-5 bg-white">
            <label className="font-semibold text-gray-500">Media</label>
            <div className=" border-2 border-dashed  flex justify-between rounded-md p-5 mt-5">
              <FileUploader
                multiple={true}
                handleChange={handleChangeProductImage}
                name="productImg"
                types={ImageTypes}
              />
              <button className=" pBtn p-2 rounded-sm ">Add Link</button>
            </div>
          </div>

          <div className="p-5 bg-white">
            <label className="font-semibold text-gray-500">Pricing</label>
            <div className="flex mt-5 gap-5">
              <div className="flex flex-col gap-2 text-sm text-gray-500">
                <label>Price</label>
                <div className="border px-2">
                  ₹
                  <input
                    onChange={(e) => {
                      setprice(e.target.value);
                    }}
                    className=" rounded-sm px-2 py-2 outline-none"
                    type="number"
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 text-sm text-gray-500">
                <label>Compare-at price</label>
                <div className="border px-2">
                  ₹
                  <input
                    onChange={(e) => {
                      setcompareprice(e.target.value);
                    }}
                    className=" rounded-sm px-2 py-2 outline-none"
                    type="number"
                    placeholder="0.00"
                  />
                </div>
              </div>
            </div>
            <Divider className="py-5" />
            <div className="flex mt-5 flex-wrap gap-5">
              <div className="flex mt-5 flex-col gap-2 text-sm text-gray-500">
                <label>Cost per item</label>
                <div className="border px-2">
                  ₹
                  <input
                    onChange={(e) => {
                      setcostPerItem(e.target.value);
                      setprofit(price - e.target.value);
                      setmargin(100 - (e.target.value / price) * 100);
                    }}
                    className=" rounded-sm px-2 py-2 outline-none"
                    type="number"
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div className="flex mt-5 flex-col gap-2 text-sm text-gray-500">
                <label>Profit</label>
                <div className="border px-2 bg-gray-100">
                  ₹
                  <input
                    value={profit}
                    readOnly={true}
                    className=" rounded-sm bg-gray-100 px-2 py-2 outline-none"
                    type="number"
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div className="flex mt-5 flex-col gap-2 text-sm text-gray-500">
                <label>Margin</label>
                <div className="border px-2 bg-gray-100">
                  <input
                    value={margin}
                    readOnly={true}
                    className=" rounded-sm bg-gray-100 px-2 py-2 outline-none"
                    type="number"
                    placeholder="0.00"
                  />
                  %
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-96  flex flex-col gap-5">
          <div className="bg-white flex flex-col p-5">
            <label className="font-semibold text-gray-500">Status</label>
            <select className="border rounded-sm px-2 mt-2 py-2 outline-none">
              <option value="active">Active</option>
              <option value="draft">Draft</option>
            </select>
          </div>

          <div className="bg-white flex flex-col p-5">
            <label className="font-semibold text-gray-500">
              Product Organization
            </label>
            <div className="flex mt-5 flex-col gap-2 text-sm text-gray-500">
              <label>Product Category</label>
              <select className="border rounded-sm px-2 mt-2 py-2 outline-none">
                <option value="ebook">EBook</option>
                <option value="WebTemplate">Web Template</option>
                <option value="landingPage">Landing Page</option>
                <option value="illustration">Illustration</option>
                <option value="designTemplate">Design Template</option>
              </select>
            </div>
            <div className="flex mt-5 flex-col gap-2 text-sm text-gray-500">
              <label>Product Type</label>
              <input
                className="border rounded-sm px-2 py-2 outline-none"
                type="text"
              />
            </div>
            <div className="flex mt-5 flex-col gap-2 text-sm text-gray-500">
              <label>Vendor</label>
              <input
                className="border rounded-sm px-2 py-2 outline-none"
                type="text"
              />
            </div>
            <div className="flex mt-5 flex-col gap-2 text-sm text-gray-500">
              <label>Collection</label>
              <input
                className="border rounded-sm px-2 py-2 outline-none"
                type="text"
              />
            </div>
            <div className="flex mt-5 flex-col gap-2 text-sm text-gray-500">
              <label>Tags</label>
              <input
                className="border rounded-sm px-2 py-2 outline-none"
                type="text"
              />
            </div>
          </div>

          <div className="bg-white flex flex-col p-5">
            <label className="mb-4 font-semibold text-gray-500">
              Upload Product
            </label>
            <FileUploader
              multiple={true}
              handleChange={handleChangeProduct}
              name="file"
              types={fileTypes}
            />
          </div>
        </div>
      </section>

      <Divider className="py-5" />
      <button className="pBtn px-5 py-2 mt-5">Add Product</button>
    </>
  );
};

export default CreateProdct;
