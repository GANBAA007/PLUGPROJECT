import plug1 from '@/public/plug1.png';
import Image from 'next/image';

export default function ProductImage() {
    return (
      <div className="flex-1">
        <div><Image src={plug1} alt="Plug Image" /></div>
      </div>
    )
  }
  