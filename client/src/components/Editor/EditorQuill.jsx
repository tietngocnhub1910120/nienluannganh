import React from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
function EditorQuill(props) {
  const { content, handleChangeEditor } = props;

  const toolbar = [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
  ];
  const handleChange = (newContent, editor) => {
    handleChangeEditor(newContent);
  };

  return (
    <ReactQuill
      modules={{
        toolbar,
      }}
      theme="snow"
      value={content}
      onChange={handleChange}
    />
  );
}
export default EditorQuill;
