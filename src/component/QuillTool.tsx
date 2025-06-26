"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";

type QuillToolPropsType = {
    className: string;
}

const QuillTool = ({ className }: QuillToolPropsType) => {
    const [editorContent, setEditorContent] = useState<string>("");

    const modules = {
        toolbar: [
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["code-block", "link"],
        ],
    };

    const formats = [
        "bold",
        "italic",
        "underline",
        "list",
        "bullet",
        "code-block",
        "link",
    ];

    return (
        <ReactQuill
            theme="snow"
            value={editorContent}
            onChange={setEditorContent}
            modules={modules}
            formats={formats}
            className={className}
        />
    );
};

export default QuillTool;
