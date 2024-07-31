import { Link } from "react-router-dom";

import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

export default function FooterFunct() {
  return (
    <footer className="bghead static bottom-0">
      <div className=" w-full h-[6.1rem] flex items-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center">
            <img
              className="w-8 ml-5"
              src="../../../images/logo.svg"
              alt="logo"
            />
            <p className="text-white text-xl ml-3 font-light">Ragdoll Motors</p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <Link className="text-white flex items-center" to="/faq">
              <QuestionMarkCircleIcon className="text-white size-5 mr-1" />
              F.A.Q.
            </Link>
            <p className="text-white mr-5 ml-3">2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
