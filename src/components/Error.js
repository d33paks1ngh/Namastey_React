import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  // console.log(err)
  return (
    <div className="font-bold text-center">
      <h1>Oops!!!</h1>
      <h2>Something went wrong</h2>
      <h1>This is the Error page of Namastey React</h1>
      <h1>{err.data}</h1>
    </div>
  );
};

export default Error;
