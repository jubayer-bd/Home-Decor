import React from "react";
import useProducts from "../../Hooks/useProducts";
import ProductCard from "../../Component/ProductCard";

const Products = () => {
  const { products } = useProducts();
  return (
    <div className="max-w-11/12 mx-auto py-10">
      <div className="flex justify-between items-center py-5">
        <h1 className="text-2xl font-bold">All Products</h1>
        <button
          className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-blue-500 hover:text-white"
         
        >
          search product
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
