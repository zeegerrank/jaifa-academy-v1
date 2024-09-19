import { useNavigate, useRouteError } from "react-router-dom";

useRouteError;

function HandleError() {
  const error = useRouteError();
  const navigate = useNavigate();
  console.log(error);

  return (
    <section className="flex h-screen w-screen items-center justify-center">
      <div className="flex max-w-4xl flex-col items-center gap-6 rounded-sm bg-accent-100 p-6 ring-prime-100">
        <h1 className="text-9xl font-bold text-prime-100">Oops!</h1>
        <h2 className="text-4xl font-bold text-prime-100">
          {error.status} {error.statusText}
        </h2>
        <p className="line-clamp-6 text-prime-100">{error.error.stack}</p>
        <div className="flex items-center justify-end gap-6">
          <button
            onClick={() => navigate(-1)}
            className="animate-pulse bg-prime-100 p-3 font-semibold text-accent-100"
          >
            Go Back
          </button>
          <span className="text-prime-100">OR</span>
          <button
            onClick={() => navigate("/")}
            className="animate-pulse bg-prime-100 p-3 font-semibold text-accent-100"
          >
            Go Home
          </button>
        </div>
      </div>
    </section>
  );
}

export default HandleError;
