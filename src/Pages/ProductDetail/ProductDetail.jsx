import React from "react";
import { useParams } from "react-router";
import useProducts from "../../Hooks/useProducts";

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useProducts();

  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return <p className="text-center py-10">Loading product details...</p>;
  }

  const { image, name, category, description, stock, price } = product;

  const handleWishList = () => {
    const existingList = JSON.parse(localStorage.getItem("wishList")) || [];
    const alreadyAdded = existingList.some((item) => item.id === product.id);

    if (alreadyAdded) {
      alert("This product is already in your wishlist!");
      return;
    }

    const updatedList = [...existingList, product];
    localStorage.setItem("wishList", JSON.stringify(updatedList));
    alert("Product added to wishlist!");
  };

  return (
    <div className="py-10 max-w-[83%] md:max-w-5xl mx-auto">
      <div className="card bg-base-100 border border-gray-200 shadow-sm">
        <figure className="h-48 overflow-hidden">
          <img className="w-full object-cover" src={image} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            <span className="font-semibold">Category:</span> {category}
          </p>
          <p>
            <span className="font-semibold">Description:</span> {description}
          </p>
          <p>
            <span className="font-semibold">Price:</span> ${price}
          </p>
          <p>
            <span className="font-semibold">Stock:</span>{" "}
            {stock ? "In Stock" : "Out of Stock"}
          </p>
          <div className="card-actions justify-end">
            <button
              onClick={handleWishList}
              className="px-4 py-2 rounded-lg border border-blue-500 hover:bg-black cursor-pointer hover:text-white"
            >
              Add to WishList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
