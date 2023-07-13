import React from "react";

const HtmlEditor = ({ htmlData }) => {
  return (
    <div className="mt-5">
      <textarea value={htmlData} className="outline-none      w-full "  rows="10"></textarea>
    </div>
  );
};

export default HtmlEditor;
