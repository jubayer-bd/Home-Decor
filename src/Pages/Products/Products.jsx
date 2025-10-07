import React, { useState } from "react";
import useProducts from "../../Hooks/useProducts";
import ProductCard from "../../Component/ProductCard";

const Products = () => {
  const { products } = useProducts();
  const [search, setSearch] = useState("");

  const term = search.trim("").toLocaleLowerCase();

  const searchedProducts = term
    ? products.filter((product) =>
        product.name.toLocaleLowerCase().includes(term)
      )
    : products;

  return (
    <div className="max-w-11/12 mx-auto py-10">
      <div className="flex justify-between items-center py-5">
        <h1 className="text-2xl font-bold">
          All Products :
          <span className="text-accent text-sm">
            ({searchedProducts.length}) product
            {searchedProducts.length !== 1 && "s"} found
          </span>
        </h1>

        <label className="input rounded">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Products"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        {searchedProducts.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
