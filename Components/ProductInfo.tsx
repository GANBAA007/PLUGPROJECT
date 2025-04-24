export default function ProductInfo() {
    return (
      <div className="flex-1 space-y-4">
        <h1 className="text-3xl font-bold">Product Name</h1>
        <p className="text-gray-600">$99.99</p>
        <p className="text-sm text-gray-700">Product description goes here. Highlight features and benefits.</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    )
  }
  