
import React from 'react';
import plug1 from '@/public/plug1.png';
import Image from 'next/image';
import RootLayout from '../layout';
const tees = () => {
  return (
     <RootLayout>
        <div>
              <div className="mx-auto grid grid-cols-3 justify-items-center gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
                <div>
                  <div><Image src={plug1} alt="Plug Image" /></div>
                  <div className='text-center'>Shirt1</div>
                </div>
                <div>
                  <div><Image src={plug1} alt="Plug Image" /></div>
                  <a href=""><div className='text-center'>Shirt2</div></a>
                </div><div>
                  <div><Image src={plug1} alt="Plug Image" /></div>
                  <div className='text-center'>Shirt3</div>
                </div><div>
                  <div><Image src={plug1} alt="Plug Image" /></div>
                  <div className='text-center'>Shirt4</div>
                </div><div>
                  <div><Image src={plug1} alt="Plug Image" /></div>
                  <div className='text-center'>Shirt5</div>
                </div>
                <div>
                  <div><Image src={plug1} alt="Plug Image" /></div>
                  <div className='text-center'>Shirt6</div>
                </div>
              </div>
            </div>
    </RootLayout>

  );
};

export default tees;
