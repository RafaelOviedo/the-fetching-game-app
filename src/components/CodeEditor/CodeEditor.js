import React, { useState } from "react";
import Editor from "@monaco-editor/react";

function CodeEditor({ onChange, language, code, theme }) {
  const [value, setValue] = useState(code || "");

  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
  };

  return (
    <div style={ { width: '100%', height: '90%', border: '2px solid black', padding: '10px', borderRadius: '10px' } }>
      <Editor
        language={language || "javascript"}
        value={value}
        theme={theme}
        defaultValue="// some comment"
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default CodeEditor;