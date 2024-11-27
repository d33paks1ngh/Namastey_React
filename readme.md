#Namastey_React

# Episode_01- Inception

- learning about createReactElement
- ReactDom.createRoot
- root.render();

# Episode_02 Igniting our app

#Parcel

- dev build

- Local server
  -HMR = hot module Replacement
- File watching Algorithm written in cpp
- Caching = Faster Builds
  -Image optimization
  -Bundling
  -Minification in the production build
  -Compressing
- Consistent Hashing
  -Code Splitting
- Differential Bundling
- Diagostic
- Error Handing
- Tree Shaking - remove unused code

# Episode_03 laying the foundation

- learning about jsx
- Type of component in React
- Functional Component
- jsx->converted into react.createElement->react Element->js object->render=HTML code on the browser.

# Episode_04 Talk is cheap show me the code

- planning to create food ordering app
  /_
  AppLayout
  header -> Logo and Nav
  body -> search bar and Restaurant Container
  Restaurant Container-> Res-card ,
  _/

- Learn about Props
- Passing props and learning about API
- Config driven UI
- Working On real swiggy API
- UI is powered by Data
- Always pass unique key with the map

# Episode_05 Lets get Hooked

- why React
- Best Practices about file and folders

# Two type of export/ Import

- Default Export/ Import
  Export default Component;
  import Component from "path"

- Named Export/ Import
  export const Component;
  import {Component} from "path"

# Hooks

- Hooks are normal js utility function written by fb developers
- Two Important Hooks are

1. usestate() - use to give us superpowerfull react variable
   whenever useState() variable is updated React restarts its render cycle;
   The second variable of useState() hook is to trigger the React Reconcilation so that It can find the the diff between the old virtual Dom and New Virtual Dom using Diff algoritham and Create a updated Actual Dom and re-rander the component.

- React is very good at Dom operation because of React Fiber which comes in React 16.

- we need to named import the useState() from React .
  syntax----
  const [list,setlist]=useState([]);

- useState() Hook always return a array; and its syntax shows how array elements are destructure on the fly ;

- React Reconsiliation / React Fiber
- Actual Dom and Virtual Dom
- Diff algoritham
- Why React is fast???
