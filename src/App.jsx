import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import CodePlayground from "./CodePlayground";

/*import code from "./playgrounds/html_intro/example1/index.js?raw";
import html from "./playgrounds/html_intro/example1/index.html?raw";
import styles from "./playgrounds/html_intro/example1/styles.css?raw";

const files = {
  "/index.js": code,
  "/index.html": html,
  "/styles.css": styles,
};
*/

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play/:playground" element={<CodePlayground />} />
      </Routes>
    </Router>
  );
}

export default App;
