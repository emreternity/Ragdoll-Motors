import { Link } from "react-router-dom";
import "../../assets/Error.css";

export default function Error() {
  return (
    <>
      <main className="bgerror flex h-screen justify-left items-center px-36 py-24">
        <div className="text-center">
          <p className="text-6xl font-bold text-orange-500">404</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-orange-500 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-white">
            Let's head back{" "}
            <Link className="text-orange-500 hover:text-2xl" to="/">
              home.
            </Link>{" "}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6"></div>
        </div>
      </main>
    </>
  );
}
