import React, { useEffect, useState } from "react";

const WishList = () => {
  const [wishList, setWishList] = useState([]);
  const [order, setOrder] = useState("none");

  // Load wishlist from localStorage when component mounts
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("wishList")) || [];
    setWishList(savedList);
  }, []);

  // Function to handle removing an item
  const handleRemove = (id) => {
    const updatedList = wishList.filter((item) => item.id !== id);
    setWishList(updatedList);
    localStorage.setItem("wishList", JSON.stringify(updatedList)); // update localStorage
  };

  // Sorting logic
  const sortedItem = () => {
    if (order === "price-asc") {
      return [...wishList].sort((a, b) => a.price - b.price);
    } else if (order === "price-desc") {
      return [...wishList].sort((a, b) => b.price - a.price);
    } else {
      return wishList;
    }
  };

  // Get the sorted list
  const displayedList = sortedItem();

  return (
    <div className="space-y-6 max-w-11/12 mx-auto py-10">
      {/* Header and Sorting */}
      <div className="flex justify-between items-center py-5">
        <h1 className="text-2xl font-bold">
          All Products:
          <span className="text-accent text-sm">
            {" "}
            ({wishList.length}) product
            {wishList.length !== 1 && "s"} found
          </span>
        </h1>
        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          >
            <option value="none">Sort By Price</option>
            <option value="price-asc">Low to High</option>
            <option value="price-desc">High to Low</option>
          </select>
        </label>
      </div>

      {/* Product List */}
      <div className="space-y-3">
        {displayedList.map((p) => (
          <div key={p.id} className="card card-side bg-base-100 shadow-sm h-40">
            <figure>
              <img
                src={p.image}
                alt={p.name}
                className="w-40 h-full object-cover"
              />
            </figure>

            <div className="card-body flex justify-between p-5">
              <div>
                <h2 className="card-title">{p.name}</h2>
                <p>{p.category}</p>
                <p className="text-sm text-gray-600">{p.description}</p>
              </div>

              <div className="card-actions justify-end  flex items-center text-right">
                <p className="font-semibold mb-2">${p.price}</p>
                <button
                  onClick={() => handleRemove(p.id)}
                  className="btn btn-error btn-sm text-white"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Show empty message */}
        {wishList.length === 0 && (
          <p className="text-center text-gray-500 py-10">
            Your wishlist is empty 😔
          </p>
        )}
      </div>
    </div>
  );
};

export default WishList;

