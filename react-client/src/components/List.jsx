import React from "react";
import ListItem from "./ListItem.jsx";

const List = (props) => (
  <div>
    <h4 > Book List  </h4>
    {props.items.map((item, key) => (
      <ListItem key={key} item={item} />
    ))}
  </div>
);

export default List;
