import React from "react";
import plug1 from '../public/plug1.png';
import Image from 'next/image';




export default function Home() {
  return (
    <div>
    <div className="mx-auto grid grid-cols-3 justify-items-center gap-4 max-md:grid-cols-2 max-sm:grid-cols-1" >
      <div><Image src={plug1} alt="Plug Image" /></div>
      <div><Image src={plug1} alt="Plug Image" /></div>
      <div><Image src={plug1} alt="Plug Image" /></div>
      <div><Image src={plug1} alt="Plug Image" /></div>
      <div><Image src={plug1} alt="Plug Image" /></div>
      <div><Image src={plug1} alt="Plug Image" /></div>
    </div>
    </div>
  );
}
