
import React from 'react';
import Image from 'next/image';
import RootLayout from '../layout';

type Product = {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    Name: string;
    Description: string;
    Price: number;
    Stock: number;
    image: string;
};
async function getProducts(): Promise<Product[]> {
    const res = await fetch('http://localhost:8080/ecomm/products', {
        cache: 'no-store', // ensures fresh data on every request
    });

    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }

    return res.json();
}

const Tees = async () => {
    const products = await getProducts();
  return (
     <RootLayout>
        <div className=" p-4">
                <div className="mx-auto grid grid-cols-3 justify-items-center gap-4 max-md:grid-cols-3 max-sm:grid-cols-2">
                    {products.map((product) => (
                        <div
                            key={product.ID}
                            className=" p-4 text-center shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-full h-72 relative mb-4">
                                <Image
                                    src={product.image}
                                    alt={product.Name}
                                    fill
                                    className="object-cover "
                                />
                            </div>
                            <div className="font-semibold text-lg mb-2">{product.Name}</div>
                            <div className="text-xl text-black">${product.Price.toFixed(2)}</div>
                        </div>
                    ))}
                </div>
            </div>
    </RootLayout>

  );
};

export default Tees;
