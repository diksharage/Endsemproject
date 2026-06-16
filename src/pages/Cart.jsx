import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Cart() {
  const [cart, setCart] =
    useState([]);

  const products = [
  {
    id: 1,
    name: "NCC Uniform Set",
    price: 2500,
    image: "🪖",
    category: "Uniform",
    rating: 4.8,
    stock: "In Stock",
  },
  {
    id: 2,
    name: "NCC Track Suit",
    price: 1800,
    image: "🏃",
    category: "Clothing",
    rating: 4.7,
    stock: "In Stock",
  },
  {
    id: 3,
    name: "Beret Cap",
    price: 500,
    image: "🎖",
    category: "Accessories",
    rating: 4.5,
    stock: "In Stock",
  },
  {
    id: 4,
    name: "NCC Belt",
    price: 350,
    image: "🧵",
    category: "Accessories",
    rating: 4.4,
    stock: "In Stock",
  },
  {
    id: 5,
    name: "Black Drill Shoes",
    price: 1200,
    image: "👞",
    category: "Footwear",
    rating: 4.8,
    stock: "In Stock",
  },
  {
    id: 6,
    name: "NCC Badge",
    price: 200,
    image: "🏅",
    category: "Accessories",
    rating: 4.9,
    stock: "In Stock",
  },
  {
    id: 7,
    name: "Camp Backpack",
    price: 1500,
    image: "🎒",
    category: "Equipment",
    rating: 4.7,
    stock: "In Stock",
  },
  {
    id: 8,
    name: "Water Bottle",
    price: 400,
    image: "🍼",
    category: "Equipment",
    rating: 4.4,
    stock: "In Stock",
  },
  {
    id: 9,
    name: "Parade Gloves",
    price: 300,
    image: "🧤",
    category: "Uniform",
    rating: 4.5,
    stock: "In Stock",
  },
  {
    id: 10,
    name: "Whistle",
    price: 150,
    image: "📯",
    category: "Accessories",
    rating: 4.3,
    stock: "In Stock",
  },
  {
    id: 11,
    name: "Rain Coat",
    price: 900,
    image: "🧥",
    category: "Clothing",
    rating: 4.6,
    stock: "Limited",
  },
  {
    id: 12,
    name: "Torch Light",
    price: 650,
    image: "🔦",
    category: "Equipment",
    rating: 4.8,
    stock: "In Stock",
  },
  {
    id: 13,
    name: "Compass",
    price: 450,
    image: "🧭",
    category: "Equipment",
    rating: 4.7,
    stock: "In Stock",
  },
  {
    id: 14,
    name: "Notebook",
    price: 120,
    image: "📒",
    category: "Stationery",
    rating: 4.5,
    stock: "In Stock",
  },
  {
    id: 15,
    name: "NCC T-Shirt",
    price: 700,
    image: "👕",
    category: "Clothing",
    rating: 4.6,
    stock: "In Stock",
  },
  {
    id: 16,
    name: "Sports Shoes",
    price: 2200,
    image: "👟",
    category: "Footwear",
    rating: 4.9,
    stock: "In Stock",
  },
  {
    id: 17,
    name: "Sleeping Bag",
    price: 1800,
    image: "🛌",
    category: "Equipment",
    rating: 4.7,
    stock: "Limited",
  },
  {
    id: 18,
    name: "First Aid Kit",
    price: 950,
    image: "🩹",
    category: "Equipment",
    rating: 4.9,
    stock: "In Stock",
  },
  {
    id: 19,
    name: "Identity Card Holder",
    price: 120,
    image: "🪪",
    category: "Accessories",
    rating: 4.4,
    stock: "In Stock",
  },
  {
    id: 20,
    name: "Camp Mug",
    price: 250,
    image: "☕",
    category: "Equipment",
    rating: 4.3,
    stock: "In Stock",
  },
];

  const addToCart = (
    item
  ) => {
    const exists =
      cart.find(
        (
          product
        ) =>
          product.id ===
          item.id
      );

    if (
      exists
    ) {
      const updatedCart =
        cart.map(
          (
            product
          ) =>
            product.id ===
            item.id
              ? {
                  ...product,
                  quantity:
                    product.quantity +
                    1,
                }
              : product
        );

      setCart(
        updatedCart
      );
    } else {
      setCart([
        ...cart,
        {
          ...item,
          quantity: 1,
        },
      ]);
    }

    alert(
      `✅ ${item.name} Added to Cart`
    );
  };

  const totalPrice =
    cart.reduce(
      (
        total,
        item
      ) =>
        total +
        item.price *
          item.quantity,
      0
    );

    const placeOrder = () => {
  const order = {
    total: totalPrice,
    items: cart.length,
    date: new Date().toLocaleDateString(),
  };

  const existingOrders =
    JSON.parse(localStorage.getItem("orders")) || [];

  localStorage.setItem(
    "orders",
    JSON.stringify([...existingOrders, order])
  );

  alert("✅ Order Placed Successfully!");

  setCart([]);
};

  return (
    <div className="flex bg-[#F5F0E6] min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8">
        <Navbar />

        <h1 className="text-4xl font-bold text-[#4B5320] mt-6">
          NCC Store
        </h1>

        <p className="text-gray-600 mt-2">
          Order NCC camp
          essentials
        </p>

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">

          {products.map(
            (
              item
            ) => (
              <div
                key={
                  item.id
                }
                className="bg-white rounded-2xl shadow-lg p-5 hover:scale-105 transition"
              >
                <div className="text-6xl text-center">
                  {
                    item.image
                  }
                </div>

                <h2 className="text-xl font-bold text-center mt-4 text-[#4B5320]">
                  {
                    item.name
                  }
                </h2>

                <p className="text-center text-gray-700 mt-2">
                  ₹
                  {
                    item.price
                  }
                </p>

                <button
                  onClick={() =>
                    addToCart(
                      item
                    )
                  }
                  className="bg-[#4B5320] text-white w-full mt-4 p-3 rounded-lg hover:bg-[#3B4419]"
                >
                  Add to Cart
                </button>
              </div>
            )
          )}
        </div>

        {/* Cart Section */}
        <div className="bg-white shadow-xl rounded-2xl p-6 mt-12">

          <h2 className="text-2xl font-bold text-[#4B5320]">
            🛒 My Cart
          </h2>

          {cart.length ===
          0 ? (
            <p className="text-gray-500 mt-4">
              No items in
              cart
            </p>
          ) : (
            <>
              <div className="mt-4 space-y-4">

                {cart.map(
                  (
                    item
                  ) => (
                    <div
                      key={
                        item.id
                      }
                      className="flex justify-between bg-gray-100 p-4 rounded-lg"
                    >
                      <div>
                        <h3 className="font-bold">
                          {
                            item.name
                          }
                        </h3>

                        <p>
                          Quantity:
                          {" "}
                          {
                            item.quantity
                          }
                        </p>
                      </div>

                      <p className="font-bold">
                        ₹
                        {item.price *
                          item.quantity}
                      </p>
                    </div>
                  )
                )}
              </div>

              <div className="border-t mt-6 pt-4 flex justify-between items-center">

                <h3 className="text-2xl font-bold text-[#4B5320]">
                  Total:
                </h3>

                <h3 className="text-2xl font-bold">
                  ₹
                  {
                    totalPrice
                  }
                </h3>
              </div>

              <button
  onClick={placeOrder}
  className="bg-[#4B5320] text-white w-full mt-6 p-4 rounded-lg text-lg hover:bg-[#3B4419]"
>
  Place Order
</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;