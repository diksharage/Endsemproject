import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Leave() {
  const [reason, setReason] =
    useState("");

  const [days, setDays] =
    useState("");

  // ADD THIS FUNCTION HERE
  function handleSubmit(e) {
    e.preventDefault();

    alert(
      "✅ Leave Request Submitted Successfully!"
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-8">
        <Navbar />

        <h1 className="text-3xl font-bold mb-6">
          Leave Request
        </h1>

        {/* ADD onSubmit HERE */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-md w-[400px]"
        >
          <input
            type="text"
            placeholder="Reason"
            value={reason}
            onChange={(e) =>
              setReason(e.target.value)
            }
            className="border p-3 w-full mb-4 rounded"
          />

          <input
            type="number"
            placeholder="Number of Days"
            value={days}
            onChange={(e) =>
              setDays(e.target.value)
            }
            className="border p-3 w-full mb-4 rounded"
          />

          <button
            type="submit"
            className="bg-green-700 text-white px-4 py-2 rounded"
          >
            Submit Leave
          </button>
        </form>
      </div>
    </div>
  );
}

export default Leave;