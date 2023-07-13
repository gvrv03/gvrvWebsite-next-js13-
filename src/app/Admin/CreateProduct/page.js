"use client";
import TextEditor from "@/Components/Admin/TextEditor";
import { Divider, IconButton } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";

import { FileUploader } from "react-drag-drop-files";
import { BackBtn, DefButton } from "@/Components/UtilComponent";
import Media from "@/Components/Admin/CreateProduct/Media";
import MainData from "@/Components/Admin/CreateProduct/MainData";
import Pricing from "@/Components/Admin/CreateProduct/Pricing";
import ProductOrg from "@/Components/Admin/CreateProduct/ProductOrg";
import { AddProduct } from "@/Store/Actions/productAction";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
 
import { useUserNextAuth } from "@/Context/useNextAuthContext";

const CreateProdct = () => {
  //Main Data State
  const [Description, setDescription] = useState("");
  const [artical, setartical] = useState("");
  const [title, settitle] = useState("");
  const [status, setstatus] = useState("");
  const { userIDS } = useUserNextAuth();
  const [loading, setloading] = useState(false);
  // Product Organization
  const [PCategory, setPCategory] = useState("");
  const [PType, setPType] = useState("");
  const [PVendor, setPVendor] = useState("");
  const [PCollection, setPCollection] = useState("");
  const [PKeyword, setPKeyword] = useState("");

  // Pricing
  const [price, setprice] = useState(null);
  const [compareprice, setcompareprice] = useState(null);
  const [costPerItem, setcostPerItem] = useState(null);
  const [profit, setprofit] = useState(null);
  const [margin, setmargin] = useState(null);

  // Image
  const [thumbnail, setthumbnail] = useState("");
  const [images, setimages] = useState([]);
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const createProduct = async (e) => {
    e.preventDefault();
    setloading(true);
    const { payload } = await dispatch(
      AddProduct({
        productDetail: {
          addeBy: userIDS.ID,
          title: title,
          description: Description,
          artical: artical,
          images,
          thumbnail: thumbnail,
          productOrganization: {
            category: PCategory,
            type: PType,
            vendor: PVendor,
            collection: PCollection,
            keywords: PKeyword,
          },
          pricing: {
            price: price,
            comAtPrice: compareprice,
            costPerItem: costPerItem,
            profit,
            margin,
          },
          status,
          rating: 2,
        },
        product: {
          Name: title,
          Product: file,
          date: Date.now,
        },
      })
    );
    if (payload.isSuccess === true) {
      toast.success(payload.message);
      return setloading(false);
    }
    if (payload.isSuccess === false) {
      toast.error(payload.error.message);
      return setloading(false);
    }
  };

  return (
    <>
      <nav>
        <BackBtn backLocation="/Admin/AllProducts" headName="Create Product" />
      </nav>
      <section className=" flex gap-5 flex-col md:flex-row ">
        <div className="  w-full flex flex-col gap-5">
          {/* -----------------Main Header Components----------------- */}
          <MainData
            setDescription={setDescription}
            setartical={setartical}
            artical={artical}
            settitle={settitle}
          />
          {/* -----------------Pricing Components----------------- */}
          <Pricing
            setprice={setprice}
            setcompareprice={setcompareprice}
            setcostPerItem={setcostPerItem}
            setprofit={setprofit}
            setmargin={setmargin}
            margin={margin}
            profit={profit}
            price={price}
          />

          {/* -----------------Media Components----------------- */}
          <Media
            setthumbnail={setthumbnail}
            title={title}
            thumbnail={thumbnail}
            images={images}
            setimages={setimages}
            setFile={setFile}
          />
        </div>

        <div className="w-full md:w-96  flex flex-col gap-5">
          <div className="bg-white      flex flex-col p-5">
            <label className="font-semibold text-gray-500">Status</label>
            <select
              onClick={(e) => {
                setstatus(e.target.value);
              }}
              defaultValue="active"
              className="     rounded-sm px-2 mt-2 py-2 outline-none"
            >
              <option selected={true} value="active">
                Active
              </option>
              <option value="draft">Draft</option>
            </select>
          </div>

          {/* -----------------Product Organization Components----------------- */}
          <ProductOrg
            setPCategory={setPCategory}
            setPType={setPType}
            setPVendor={setPVendor}
            setPCollection={setPCollection}
            setPKeyword={setPKeyword}
          />

          <div className="bg-white      flex flex-col p-5">
            <DefButton
              name="Add Product"
              func={createProduct}
              btnStyle="pBtn px-5 py-2 mt-5"
              loading={loading}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateProdct;
