import React from "react";

const Hello = () => {
  // return (
  //  <di      //      <h1>Hello Melody</h1>
  //   </div>
  // )

  return React.createElement(
    "div",
    {id: 'hello', className: 'dummyClass'},
    React.createElement("h1", null, "Hello Melody")
  );
};

export default Hello;
