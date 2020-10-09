import React, { useState } from "react";

import "./App.css";

import InputFile from "../src/components/input/InputFile";
import Grid from "../src/components/grid/Grid";
import { readLines } from "./helpers/result";

function App() {
  const [state, setState] = useState({});
  const [showGrid, setShowGrid] = useState(false);

  const addFile = (e) => {
    let fileList = e.target.files;
    let fileReader = new FileReader();

    fileReader.onload = () => {
      let object;
      let lines = fileReader.result.split("\n");

      object = readLines(lines);

      if (object) {
        setShowGrid(true);
        setState(object);
        console.table(object);
      }
    };

    fileReader.readAsText(fileList[0]);
  };

  return (
    <div className="app">
      <h1>Find two team members worked longest on projects together</h1>

      <InputFile add={addFile} />
      {showGrid ? <Grid objectProps={state} /> : null}
    </div>
  );
}

export default App;
