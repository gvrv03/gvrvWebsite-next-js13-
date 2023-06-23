import React from "react";

const ProductOrg = ({
  setPCategory,
  setPType,
  setPVendor,
  setPCollection,
  setPKeyword,
}) => {
  return (
    <div className="bg-white flex flex-col p-5">
      <label className="font-semibold text-gray-500">
        Product Organization
      </label>
      <div className="flex mt-5 flex-col gap-2 text-sm text-gray-500">
        <label>Product Category</label>
        <select
          onChange={(e) => {
            setPCategory(e.target.value);
          }}
          value="ebook"
          className="border rounded-sm px-2 mt-2 py-2 outline-none"
        >
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
          onChange={(e) => {
            setPType(e.target.value);
          }}
          className="border rounded-sm px-2 py-2 outline-none"
          type="text"
        />
      </div>
      <div className="flex mt-5 flex-col gap-2 text-sm text-gray-500">
        <label>Vendor</label>
        <input
          onChange={(e) => {
            setPVendor(e.target.value);
          }}
          className="border rounded-sm px-2 py-2 outline-none"
          type="text"
        />
      </div>
      <div className="flex mt-5 flex-col gap-2 text-sm text-gray-500">
        <label>Collection</label>
        <input
          onChange={(e) => {
            setPCollection(e.target.value);
          }}
          className="border rounded-sm px-2 py-2 outline-none"
          type="text"
        />
      </div>
      <div className="flex mt-5 flex-col gap-2 text-sm text-gray-500">
        <label>Keywords</label>
        <input
          onChange={(e) => {
            setPKeyword(e.target.value);
          }}
          className="border rounded-sm px-2 py-2 outline-none"
          type="text"
        />
      </div>
    </div>
  );
};

export default ProductOrg;
