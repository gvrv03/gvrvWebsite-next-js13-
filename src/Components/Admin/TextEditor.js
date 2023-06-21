import dynamic from "next/dynamic";
import React from "react";

import "suneditor/dist/css/suneditor.min.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
const formats = [
  "header",
  "blockquote",
  "bullet",
  "image",
  'italic',
  'underline',
  'strike',
  'color',
  'background',
  'font',
  'size',
  'align',
  'list',
  'indent',
  'link',
  'image',
  'video',
  'code-block',
  'quote',
  'clean',
];

const TextEditor = ({ setartical, artical }) => {
  // return (
  //   <div className="mt-5">
  //     <SunEditor
  //       // value={valueText}
  //       defaultValue="Hey Man"
  //       onChange={(content) => {
  //         setartical(content);
  //       }}
  //       //   placeholder="Write brief information"
  //       height="100%"
  //       setOptions={{
  //         mode: "Classic",

  //         rtl: false,

  //         katex: "window.katex",

  //         imageGalleryUrl:
  //           "https://etyswjpn79.execute-api.ap-northeast-1.amazonaws.com/suneditor-demo",

  //         videoFileInput: false,

  //         tabDisable: false,
  //         buttonList: [
  //           [
  //             "undo",

  //             "redo",

  //             "font",

  //             "fontSize",

  //             "formatBlock",

  //             "paragraphStyle",

  //             "blockquote",

  //             "bold",

  //             "underline",

  //             "italic",

  //             "strike",

  //             "subscript",

  //             "superscript",

  //             "fontColor",

  //             "hiliteColor",

  //             "textStyle",

  //             "removeFormat",

  //             "outdent",

  //             "indent",

  //             "align",

  //             "horizontalRule",

  //             "list",

  //             "lineHeight",

  //             "table",

  //             "link",

  //             "image",

  //             "video",

  //             "audio",

  //             "math",

  //             "imageGallery",

  //             "fullScreen",

  //             "showBlocks",

  //             "codeView",

  //             "preview",

  //             "print",

  //             "save",

  //             "template",
  //           ],
  //         ],

  //         "lang(In nodejs)": "en",
  //       }}
  //     />
  //   </div>
  // );

  return (
    <ReactQuill
      theme="snow"
      value={artical}
      modules={modules}
      name="description"
      formats={formats}
      onChange={setartical}
    />
  );
};

export default TextEditor;
