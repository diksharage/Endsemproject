import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function OrderHistory() {
  const orders =
    JSON.parse(
      localStorage.getItem("orders")
    ) || [];

  return (
    <div className="flex bg-[#F5F0E6] min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8">
        <Navbar />

        <h1 className="text-4xl font-bold text-[#4B5320] mb-6">
          📦 Order History
        </h1>

        {orders.length === 0 ? (
          <div className="bg-white p-6 rounded-xl shadow">
            No Orders Found
          </div>
        ) : (
          orders.map((order, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow mb-4"
            >
              <h3 className="font-bold text-xl">
                Order #{index + 1}
              </h3>

              <p>
                Total: ₹{order.total}
              </p>

              <p>
                Items: {order.items}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default OrderHistory;