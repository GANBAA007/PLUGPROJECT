import { useState } from "react";

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


async function getProduct(id: string): Promise<Product> {
    const res = await fetch(`http://localhost:8080/ecomm/getproducts/${id}`, {
        cache: 'no-store', // make sure it's fresh on every request
    });

    if (!res.ok) {
        throw new Error('Failed to fetch product');
    }

    return res.json();
}


export default async function ProductPage({ params }: { params: { id: string } }) {
    const product = await getProduct(params.id);

    return (
        <div className="max-w-4xl  flex mx-auto">
            <div>
                <img src={product.image} alt={product.Name} className="w-full max-w-md mx-auto" />
            </div>
            <div className="ml-4">
                <h1 className="text-3xl font-bold mt-6">{product.Name}</h1>
                <p className="text-xl text-black mt-2">${product.Price.toFixed(2)}</p>
                <div>
                <p className="mt-2 text-sm text-gray-500">In stock: YES</p></div>
                <p className="mt-4 text-gray-700">{product.Description}</p>
                <button className="border px-5 my-2">Add to Cart</button></div>
        </div>
    );
}