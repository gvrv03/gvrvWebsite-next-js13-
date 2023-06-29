"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";

const SearchAll = ({ style }) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/Search?query=" + searchQuery);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={` ${style} border rounded-md px-2 py-1 justify-between  flex gap-2 border-gray-200 `}
    >
      <input
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        type="search"
        className="bg-transparent text-xs  w-full outline-none"
        placeholder="Search..."
      />
      <button type="submit">
        <SearchIcon className="text-2xl  " />
      </button>
    </form>
  );
};

export default SearchAll;
