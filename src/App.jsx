import { useState, useEffect } from "react";
import { Tree } from "./component/Tree";

function App() {
  const [keyState, setKeyState] = useState(null);
  const [highlightedNodes, setHightlightedNodes] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [treeData, setTreeData] = useState([]);
  const handleOnChange = (e) => {
    setInputVal(e.target.value);
  };
  const handleOnSubmit = () => {
    setTreeData(inputVal.split(","));
  };
  useEffect(() => {
    const getAncesters = (currentIndex) => {
      if (!currentIndex) return [];
      const ancesters = [];
      while (currentIndex !== 0) {
        ancesters.push(currentIndex);
        if (currentIndex % 2 === 0) {
          currentIndex = (currentIndex - 2) / 2;
          ancesters.push(currentIndex);
        } else {
          currentIndex = (currentIndex - 1) / 2;
          ancesters.push(currentIndex);
        }
      }
      return ancesters;
    };

    const ancesters = getAncesters(keyState);
    setHightlightedNodes(ancesters);
  }, [keyState]);

  return (
    <>
      <div className="header">
        <h2>Binary Tree Visualisation </h2>
        <div className="formContainer">
          <input value={inputVal} type="text" onChange={handleOnChange} />
          <button onClick={handleOnSubmit}>Submit</button>
        </div>
      </div>
      <div className="tree">
        {treeData.length > 0 ? (
          <ul>
            <Tree
              treeData={treeData}
              root={0}
              ancesters={highlightedNodes}
              keyState={keyState}
              setKeyState={setKeyState}
            />
          </ul>
        ) : null}
      </div>
    </>
  );
}

export default App;
