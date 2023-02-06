import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  // destructuring the error object
  const { status, statusText } = err;
  console.log(err);
  return (
    <div>
      <h1>Oops!!</h1>
      <h2>Something went wrong!!</h2>
      {/* <h2>{err.status + " : " + err.statusText}</h2> */}
      <h2>{status + " : n  " + statusText}</h2>
    </div>
  );
}
   

export default Error;
