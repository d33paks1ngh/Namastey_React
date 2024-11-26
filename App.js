import React from "react";
import ReactDOM from "react-dom/client";

const headtag = <h1>hello from jsx</h1>;

const HeadingComponent = () => {
  return <h1>hello from HeadingComponent</h1>;
};

const TitleComponent = () => <h1>Hello React from TitleComponent</h1>;

const element = (
  <div>
    {headtag}
    <HeadingComponent />
    <TitleComponent />
    <h1>Hello from jsx element</h1>
  </div>
);

const BodyComponent = () => (
  <div id="container">
    {headtag}
    <h1>hello from BodyComponent</h1>
    <TitleComponent />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
