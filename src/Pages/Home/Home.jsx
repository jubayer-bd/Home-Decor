import React from "react";
import { Link, useLoaderData } from "react-router";
import ProductCard from "../../Component/ProductCard";
import useProducts from "../../Hooks/useProducts";

const Home = () => {
  const  { products, loading, error } = useProducts();
  console.log(products);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong: {error.message}</p>;

  const featuredProducts = products.slice(0, 6);

  return (
    <div className="max-w-11/12 mx-auto py-10">
      <div className="flex justify-between items-center py-5">
        <h1 className="text-2xl font-bold">Featured Products</h1>
        <Link
          className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-blue-500 hover:text-white"
          to={"/products"}
        >
          See All Products
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
