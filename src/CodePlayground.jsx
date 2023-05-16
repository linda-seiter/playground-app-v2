import { Sandpack } from "@codesandbox/sandpack-react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CodePlayground() {
  let { playground } = useParams();
  const [html, setHtml] = useState([]);
  const [css, setCss] = useState([]);
  const [js, setJs] = useState([]);

  const fetchFiles = async () => {
    try {
      const html = await fetch(`${playground}/index.html`);
      setHtml(await html.text());
      const js = await fetch(`${playground}/index.js`);
      setJs(await js.text());
      const css = await fetch(`${playground}/styles.css`);
      setCss(await css.text());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFiles();
  });

  const files = {
    "/index.html": html,
    "/styles.css": css,
    "/index.js": js,
  };
  return (
    <Sandpack
      files={files}
      options={{
        autorun: false,
        autoReload: false,
        editorHeight: 500,
        showConsole: true,
        showConsoleButton: true,
        showInlineErrors: true,
        activeFile: "/index.html",
      }}
    ></Sandpack>
  );
}
