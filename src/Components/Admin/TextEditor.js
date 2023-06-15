import dynamic from "next/dynamic";
import React from "react";

import 'suneditor/dist/css/suneditor.min.css';
const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});
const TextEditor = ({setartical}) => {



  return (
    <div className="mt-5">
        <SunEditor
              // value={valueText}
              defaultValue="Hey Man"
              onChange={(content) => {
                setartical(content);
              }}
            //   placeholder="Write brief information"
              height="100%"
              
              setOptions={{
                mode: "Classic",

                rtl: false,

                katex: "window.katex",

                imageGalleryUrl:
                  "https://etyswjpn79.execute-api.ap-northeast-1.amazonaws.com/suneditor-demo",

                videoFileInput: false,

                tabDisable: false,
                buttonList: [
                  [
                    "undo",

                    "redo",

                    "font",

                    "fontSize",

                    "formatBlock",

                    "paragraphStyle",

                    "blockquote",

                    "bold",

                    "underline",

                    "italic",

                    "strike",

                    "subscript",

                    "superscript",

                    "fontColor",

                    "hiliteColor",

                    "textStyle",

                    "removeFormat",

                    "outdent",

                    "indent",

                    "align",

                    "horizontalRule",

                    "list",

                    "lineHeight",

                    "table",

                    "link",

                    "image",

                    "video",

                    "audio",

                    "math",

                    "imageGallery",

                    "fullScreen",

                    "showBlocks",

                    "codeView",

                    "preview",

                    "print",

                    "save",

                    "template",
                  ],
                ],

                "lang(In nodejs)": "en",
              }}
            />
    </div>
  );
};

export default TextEditor;
