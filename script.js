//    <!-- <div>
//         <h1>Hello World</h1>
//     </div> -->

// <!--
//     <div class="parent">
//         <div id="child">
//             <h1>This is H1 tag </h1>
//         </div>
//     </div> -->

// <!--
//     <div class="parent">
//         <div id="child">
//             <h1>this is h1</h1>
//             <h2>this is h2</h2>
//         </div>
//     </div> -->

// <!--
//     <div class="parent">
//         <div id="child1">
//             <h1>this is h1 tag child1</h1>

//         </div>
//         <div id="child2">
//             <h1>this is h1 tag child2</h1>
//         </div>

//     </div> -->

// const heading=React.createElement('h1',{},"hello world");

// const heading = React.createElement(
//   "div",
//   { className: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "This is h1 tag ")
//   )
// );

// const heading = React.createElement(
//   "div",
//   { className: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "This is h1 tag using React"),
//     React.createElement("h2", {}, "This is h2 tag using React")
//   )
// );

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", {}, "THis is h1 tag of child1")
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h1", {}, "THis is h1 tag of child2")
  )
);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
