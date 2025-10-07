import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const WishList = () => {
  const [wishList, setWishList] = useState([]);
  const [order, setOrder] = useState("none");

  // Load wishlist from localStorage
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("wishList")) || [];
    setWishList(savedList);
  }, []);

  // Remove item
  const handleRemove = (id) => {
    const updatedList = wishList.filter((item) => item.id !== id);
    setWishList(updatedList);
    localStorage.setItem("wishList", JSON.stringify(updatedList));
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

  const displayedList = sortedItem();

  // ✅ Chart data: Total price by category
  const totalsByCategory = wishList.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + product.price;
    return acc;
  }, {});

  const chartData = Object.entries(totalsByCategory).map(([category, total]) => ({
    category,
    total,
  }));

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

              <div className="card-actions justify-end flex items-center text-right">
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

        {/* Empty Message */}
        {wishList.length === 0 && (
          <p className="text-center text-gray-500 py-10">
            Your wishlist is empty 😔
          </p>
        )}
      </div>

      {/* Chart Section */}
      {chartData.length > 0 && (
        <div className="space-y-3">
          <h1 className="text-xl font-semibold">Wishlist Summary</h1>
          <div className="bg-base-100 border rounded-xl p-4 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#8884d8" name="Total Price" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default WishList;
