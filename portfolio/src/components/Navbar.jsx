import React from "react";

const Navbar = () => {
  const myName = "{ Pankaj.com }";
  return (
    <nav className="bg-neutral-40  w-4xl cursor-pointer pt-7 pb-2  flex items-center justify-between  shadow-md">
      <div>
        <a href="pankaj.com.np" className="text-green-600 text-2xl pl-2">
          {myName}
        </a>
      </div>
      <div className="w-1/2">
        <ul className="flex items-center justify-around gap-5">
          <li className="hover:text-blue-700 font-medium">About</li>
          <li className="hover:text-blue-700 font-medium">Project</li>
          <li className="hover:text-blue-700 font-medium">Contact</li>
          <li className="hover:text-blue-700 font-medium">Home</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
