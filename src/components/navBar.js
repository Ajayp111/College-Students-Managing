import React from "react";

const navBar = () => {
  return (
    <nav className="bg-green-500 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white text-2xl font-semibold pl-4">Ajay.Web</div>
          <ul className="flex space-x-4 pr-5">
            <li className="font-bold">
              <a
                href="/"
                className="text-gray-900 hover:text-gray-200 font-bold"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-900 hover:text-gray-200 font-bold"
              >
                About College
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-900 hover:text-gray-200 font-bold"
              >
                Professors
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-900 hover:text-gray-200 font-bold "
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navBar;
