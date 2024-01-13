import {
  Folder,
  InsertDriveFile,
  KeyboardArrowDown,
  KeyboardArrowRight,
} from "@mui/icons-material";
import React, { useState } from "react";

import classes from "./TreeV1.module.css";

export interface TreeNodeV1 {
  name: string;
  children?: TreeNodeV1[];
}

let DUMMY_DATA = {
  name: "root",
  children: [
    {
      name: "node_modules",
      children: [
        { name: "subfolder", children: [{ name: "subfile.3dr" }, { name: "logfile.log" }] },
        { name: "other_file.txt" },
        { name: "last_file.exe" },
      ],
    },
    { name: "public", children: [{ name: "index.html" }, { name: "index.css" }] },
    { name: "README.md" },
  ],
};

const TreeNodeV1: React.FC<{ node: TreeNodeV1 }> = (props) => {
  const [showChildren, setShowChildren] = useState<boolean>(true);

  const nodeCLickHandler = (event: React.MouseEvent): void => {
    event.stopPropagation();
    setShowChildren((bool) => !bool);
  };

  const css = `${classes.node} ${props.node.children ? classes.folder : classes.file}`;

  return (
    <li className={css}>
      <span
        onClick={nodeCLickHandler}
        className={showChildren ? classes.expanded : classes.collapsed}
      >
        {/* {props.node.children && !showChildren && '▶ '} */}
        {props.node.children && !showChildren && <KeyboardArrowRight />}
        {/* {props.node.children && showChildren && '▼ '} */}
        {props.node.children && showChildren && <KeyboardArrowDown />}
        {/* {props.node.children && '🗁 '} */}
        {props.node.children && <Folder sx={{ marginRight: "0.5rem" }} />}
        {!props.node.children && <InsertDriveFile sx={{ marginRight: "0.5rem" }} />}
        {props.node.name}
      </span>
      {props.node.children && showChildren && (
        <ul>
          {props.node.children!.map((child, index) => {
            return <TreeNodeV1 key={`${props.node.name}_${index}`} node={child} />;
          })}
        </ul>
      )}
    </li>
  );
};

const TreeV1: React.FC = () => {
  return <ul className={classes.tree}>{<TreeNodeV1 node={DUMMY_DATA} />}</ul>;
};

export default TreeV1;
