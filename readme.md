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

# Episode_06 Exploring The World...

- Monolith architecture and Microservices architecture
- useEffect() hook it take two arguments callback fun and []- dependency array;
- fetch the real swiggy api data and make use of useEffect() hook to render the component
- CORS plugin
- shimmer UI
- Conditional Rendering
- add login and logout feacture and get more knowledge about useStata() hook
- wheneven a local state variable is updated React re-render the component.
- build search feature

# Episode_07 Finding the path...

- Routing In React
- Install React-router-dom using npm commands
- named import from react-router CreateBrowserRouter() from which take array of objects and set the browser configuration
- named import RouterProvider from react-router which provides the routing configuration to out app
- set the error page
- Router also provide a useRouterError() Hook to give use more details about the error

- Create children Routes and keep the header intact.
- learn about outlet .
- Learn about dynamic Routing
- create the menu page with live swiggy Api
- named emport useParam() from react-router Learn how it works.

# Episode_08 Lets Get classy...

- Q: What is the order of life cycle method calls in `Class Based Components`?

A: Following is the order of lifecycle methods calls in `Class Based Components`:

1. constructor()
2. render ()
3. componentDidMount()
4. componentDidUpdate()
5. componentWillUnmount()

For more reference [React-Lifecycle-methods-Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

- Q: Why do we use `componentDidMount`?

A: The `componentDidMount()` method allows us to execute the React code when the component is already placed in the DOM (Document Object Model). This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered.
Wwe can run any piece of react code to modify the components. For ex. It's the best place to `make API calls`.

- Q: Why do we use `componentWillUnmount`? Show with example.

A: `componentWillUnmount()` is useful for the cleanup of the application when we switch routes from one place to another. Since we are working with a SPA(Single Page Application) the component process always runs in the background even if we switch to another route. So it is required to stop those processes before leaving the page. If we revisit the same page, a new process starts that affects the browser performance.
For example, in Repo class, during `componentDidMount()` a timer is set with an interval of every one second to print in console. When the component is unmounted (users moves to a different page), the timer will be running in the background, which we might not even realize and causing huge performance issue. To avoid such situations the cleanup function can be done in componentWillUnmount, in this example `clearInterval`(timer) to clear the timer interval before unmounting Repo component.

- Q: (Research) Why do we use `super(props)` in constructor?

A: `super(props)` is used to inherit the properties and access of variables of the React parent class when we initialize our component.
super() is used inside constructor of a class to derive the parent's all properties inside the class that extended it. If super() is not used, then Reference Error : Must call super constructor in derived classes before accessing 'this' or returning from derived constructor is thrown in the console.
The main difference between super() and super(props) is the this.props is undefined in child's constructor in super() but this.props contains the passed props if super(props) is used.

- Q: (Research) Why can't we have the `callback function` of `useEffect async`?

A: `useEffect` expects it's callback function to return nothing or return a function (cleanup function that is called when the component is unmounted). If we make the callback function as `async`, it will return a `promise` and the promise will affect the clean-up function from being called.

# Episode_09 Optimising our App...

- Modularity provides readable code, easy testing, Reusability, and
- follow single responsibility Principal

-Custom Hooks

- Create a Custom Hook for RestaurantMenu page.
- create a custom Hook for Restaurant list page.
- Create a Custom hook for online status

### Make you application in small size know as

- lazy loading
- Dynamic loading
- Code spitting
- on Demand Loading
- Chunking
- Dynamic Bundling

import the Grocery Component using Lazy Loading...

- Lazy loading,
- Suspense Component
- fallback ...

# Episode_10 Jo Dikhta hai wo Bikata hai...

Ways to style your page.

- Normal CSS.
- SCSS
- SASS
- Styled Component
- Material UI
- Ant Design
- Bootstrap
- Chakra UI
- Tailwind CSS

- configure Tailwind with your projects

# Episode_11 Data is the new oil...

- Higher Order Components
  Higher order Component is a function which takes a function and returns a function / takes a function and enhance it and return the function
  also called as enhancer.

- Filter item Categories
- Introduction to accordian
- Create the menu page
- Create header and body of accordian
- Lifting the state up

1. Controlled Component and
2. Uncontrolled Component

- Creating auto collapsable Accordian
- How parent controls the child component
- child compopent can set data of the parent component also not directly but indirectly.

- React Tool kit chrome extension
  1 .Component and profiler

- Props Drilling
- React has one direction data flow from parent to children
- Context API
- Create globle data using create context - named import from React.
- useContext() is a hook provided by react to use the item created using CreateContext();
- useContext in class base components...

# Episode_12 Lets Build Our Store... (REDUX and RTK)

- Introduction to Redux Redux is not mendetory all the application which has build with redux can also be build without Redux.
- zustand is also a state management library which works similar to Redux.
- Redux is a state management library of javaScript and it work fine with react
- Redux and react are two different thing
- RTK stards for Redux tool kit and it provides few and standard way to write code of redux
- Redux store is logically divided into partition and each partition hold the data / information regarding different component and each partition is called as slice.

- how redux works
  let us consider an example of adding an item in card from the menu page.

- when we click on the add button it depatches an action which call a function() (reducer function) and that function changes/updates the slice.

- After making update in the slice we can read the slice using the SELECTOR .
- Selection helps us to read the inforamtion of tha Slice.
- The process of modifying the Store/Slice and reading the updating the info on the card is called as Subscribing to the store.

# Redux Toolkit

- Part_04 Lets Build Our Store
- Install @reduxjs/toolkit and react-redux
- build our store using configeStore() import from @redux/toolkit.
- Connect ourstore to app using Provider import from react-redux.
- create Slice (cardSlice) create slice using createSlice() function which takes
  name of the slice and initialState and reducers.
- Connect your slice to the Store.
- Dispatch Action using useDispatch Hook.
- Selector - Read the data of the Store using useSelector() hook import from react-redux

  -Create add and remove items from the cart using dispatch and Reducer function ...

# Few important points related to Redux...

1.  Always select the small portion of the Store / Only select the slice which you gonna use.
2.  Reducer and Reducers are two different things keep this in mind...
3.  Features and Difference between Vanilla Redux and RTK.
4.  we have to not mutate the state in vanilla redux but in RTK we have to mutate the state and the
    imagine thing is that in back-end redux run the same vanilla redux logic with the help of immer
5.  RTK usage Immer in background...
6.  Introduction to Immer
7.  In vanilla we have to return the state but in RTK we do not need to return the same return
8.  RTK says either you mutate the state or return the new full state.

# Install Redux dev tools for your browser.

play with Redux dev tools
Read about Redux Toolkit Query...

# Episode_13 Time For the Test...
# Setting up testing...
- install React testing library
- install jest
- Install babel dependencies which required to use jest with babel
- Configure Babel
- Configure parcel config file to disable default babel transpilation.
