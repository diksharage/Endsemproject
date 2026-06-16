import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Events() {
  const [selectedEvent, setSelectedEvent] =
    useState("");

  const [registered, setRegistered] =
    useState(false);

  const cadetId =
    localStorage.getItem("cadetId");

  const certificate =
    localStorage.getItem(
      "certificate"
    );

  const handleRegister = () => {
    if (!selectedEvent) {
      alert(
        "❌ Please select an event"
      );
      return;
    }

    alert(
      "✅ Registered Successfully!"
    );

    setRegistered(true);
  };

  return (
    <div className="flex bg-[#F5F0E6] min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8">
        <Navbar />

        <h1 className="text-4xl font-bold text-[#4B5320] mb-6">
          NCC Events
        </h1>

        <div className="bg-white shadow-lg rounded-xl p-6 w-[450px]">
          <label className="font-bold">
            Select Event
          </label>

          <select
            className="border p-3 rounded-lg w-full mt-3"
            value={selectedEvent}
            onChange={(e) =>
              setSelectedEvent(
                e.target.value
              )
            }
          >
            <option value="">
              Select Event
            </option>

            <option>
              Republic Day Parade
            </option>

            <option>
              Drill Competition
            </option>

            <option>
              Weapon Training
            </option>

            <option>
              Cultural Fest
            </option>

            <option>
              Leadership Camp
            </option>

            <option>
              Independence Day Parade
            </option>
          </select>

          <button
            onClick={handleRegister}
            className="bg-[#4B5320] text-white px-6 py-3 rounded-lg mt-5 w-full hover:scale-105 transition"
          >
            Register
          </button>
        </div>

        {/* Special Registration Pass */}
        {registered && (
          <div className="bg-gradient-to-r from-green-900 to-[#4B5320] text-white rounded-2xl shadow-xl p-8 mt-10 max-w-[500px]">
            <h2 className="text-3xl font-bold">
              🎖 Event Registration Pass
            </h2>

            <p className="mt-4">
              <strong>
                Cadet ID:
              </strong>{" "}
              {cadetId}
            </p>

            <p>
              <strong>
                Certificate:
              </strong>{" "}
              {certificate}
            </p>

            <p>
              <strong>
                Event:
              </strong>{" "}
              {selectedEvent}
            </p>

            <p>
              <strong>
                Status:
              </strong>{" "}
              Registered ✅
            </p>

            <div className="mt-5 border-t border-white pt-3">
              <p className="italic">
                “Unity and Discipline”
              </p>

              <p>
                National Cadet Corps 🇮🇳
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Events;