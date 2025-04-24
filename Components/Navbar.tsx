import React from "react";
import Link from "next/link";
import rsz_1logoblack from '@/public/rsz_1logoblack.png';
import Image from "next/image";

const Navbar = () => {
  return (
  <div>
    <div className="sticky mx-auto z-20 bg-white flex text-black  justify-between  text-xs font-semibold">
      <div>
            <Link href="/" className="w-60">
            <Image src={rsz_1logoblack} alt="logo" />
            </Link>
          </div>
      <div className="flex-1 py-4 font-semibold align-middle ">
        <ul className="flex my-1 ">
          <li>
            <Link href="/hoodie" passHref className="px-4 hover:font-bold align-middle">
              HOODIE
            </Link>
          </li>
          <li>
            <Link href="/tees" className="px-4 py-auto hover:font-bold align-middle">
              TEES
            </Link>
          </li>
          <li>
            <Link href="/bags" className="px-4 hover:font-bold align-middle">
              BAGS
            </Link>
          </li>
        </ul>
      </div>
      <div className="py-4">
        <ul className="flex justify-end font-semibold my-1">
          <li>
            <Link href="/bags" className="px-4 hover:font-bold align-middle">
              CART
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="h-[1px] w-full mx-auto bg-stone-200 mb-12"></div>
    </div>
  );
};

export default Navbar;