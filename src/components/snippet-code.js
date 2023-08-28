import React from "react";
import { Code } from "bright";

function SnippetCode({ children }) {
  return (
    <Code className="code-snippet" theme="dracula" lang="py">
      {children}
    </Code>
  );
}

export default SnippetCode;
