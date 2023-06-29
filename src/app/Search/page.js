"use client";
import React, { useState } from "react";
import HeaderSearch from "@/Components/SearchPage/HeaderSearch";

const SearchPage = ({ searchParams }) => {
  const [value, setvalue] = useState(1);
  return (
    <div>
      <HeaderSearch
        setvalue={setvalue}
        value={value}
        searchParam={searchParams.query}
      />
      dfjsfsdfgsjghfjhg
    </div>
  );
};

export default SearchPage;
