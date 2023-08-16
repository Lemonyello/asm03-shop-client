import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const message = "Something went wrong";
  if (error.status === 500) message = error.data.message;
  return <p>{message}</p>;
};

export default ErrorPage;
