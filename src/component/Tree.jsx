import React from "react";

export const Tree = ({ treeData, root, ancesters, keyState, setKeyState }) => {
  const leftIndex = 2 * root + 1;
  const rightIndex = 2 * root + 2;

  const isHighlight = ancesters.includes(root);

  return (
    <>
      <li>
        <a
          href="#"
          className={isHighlight ? "highlight" : ""}
          onClick={() => setKeyState(root)}
        >
          {treeData[root]}
        </a>
        {leftIndex <= treeData.length && rightIndex <= treeData.length && (
          <ul>
            {leftIndex < treeData.length && (
              <Tree
                treeData={treeData}
                root={leftIndex}
                ancesters={ancesters}
                keyState={keyState}
                setKeyState={setKeyState}
              />
            )}
            {rightIndex < treeData.length && (
              <Tree
                treeData={treeData}
                root={rightIndex}
                ancesters={ancesters}
                keyState={keyState}
                setKeyState={setKeyState}
              />
            )}
          </ul>
        )}
      </li>
    </>
  );
};
