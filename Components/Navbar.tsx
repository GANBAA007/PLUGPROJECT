import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky z-20 flex bg-white text-black w-full justify-between text-xs font-semibold">
      <div className="flex-1 align-middle">
        <ul className="flex p-4 ">
          <li>
            <Link href="/hoodie" className="px-4 hover:font-bold">
              HOODDIE
            </Link>
          </li>
          <li>
            <Link href="/tees" className="px-4 hover:font-bold">
              TEES
            </Link>
          </li>
          <li>
            <Link href="/bags" className="px-4 hover:font-bold">
              BAGS
            </Link>
          </li>
        </ul>
      </div>
      <div className="p-4">
        <ul className="flex justify-end">
          <li>
            <Link href="/bags" className="px-4 hover:font-bold">
              CART
            </Link>
          </li>
        </ul>
      </div>
      <div className="h-[1px] max-w-full bg-black"></div>
    </div>
  );
};

export default Navbar;
