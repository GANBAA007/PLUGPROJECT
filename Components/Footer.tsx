import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="h-[1px] w-full mx-auto bg-stone-200 mt-12"></div>
      <div className="flex justify-between bg-white text-black mx-[2%]">
        <div className="hover:font-semibold">
          <Link href="/home">Newsletter</Link>
        </div>
        <div className="
         text-stone-400">Various Plug</div>
      </div>
    </div>
  );
};
export default Footer;
