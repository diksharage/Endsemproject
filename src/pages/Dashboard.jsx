import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import CampCard from "../components/CampCard";

import { camps } from "../services/campService";

function Dashboard() {
  const [
    selectedWing,
    setSelectedWing,
  ] = useState("");

  const [
    selectedCamp,
    setSelectedCamp,
  ] = useState(null);

  const filteredCamps =
    camps.filter(
      (camp) =>
        camp.wing ===
        selectedWing
    );

  // Theme according to wing
  const wingTheme = {
    Army: {
      bg:
        "bg-[#F5F0E6]",
      title:
        "text-[#4B5320]",
      card:
        "bg-[#D6C7A1]",
    },

    Navy: {
      bg:
        "bg-blue-50",
      title:
        "text-blue-900",
      card:
        "bg-blue-100",
    },

    Air: {
      bg:
        "bg-sky-50",
      title:
        "text-sky-900",
      card:
        "bg-sky-100",
    },
  };

  const theme =
    wingTheme[
      selectedWing
    ] ||
    wingTheme.Army;

  return (
    <div
      className={`flex ${theme.bg} min-h-screen`}
    >
      <Sidebar />

      <div className="flex-1 p-8">
        <Navbar />

        {/* Heading */}
        <h1
          className={`text-4xl font-bold mt-6 ${theme.title}`}
        >
          NCC Dashboard
        </h1>

        <p className="text-gray-600 mt-2">
          Select Wing →
          Select Camp
        </p>

        {/* Wing Selection */}
        <div className="mt-8">
          <label className="font-bold">
            Select NCC Wing
          </label>

          <br />

          <select
            className="border p-3 rounded-lg w-80 mt-2 shadow-sm"
            value={
              selectedWing
            }
            onChange={(e) => {
              const wing =
                e.target
                  .value;

              setSelectedWing(
                wing
              );

              // Save wing
              localStorage.setItem(
                "selectedWing",
                wing
              );

              // Reset camp
              setSelectedCamp(
                null
              );

              localStorage.removeItem(
                "selectedCamp"
              );
            }}
          >
            <option value="">
              Select Wing
            </option>

            <option value="Army">
              🪖 Army Wing
            </option>

            <option value="Navy">
              ⚓ Navy Wing
            </option>

            <option value="Air">
              ✈ Air Wing
            </option>
          </select>
        </div>

        {/* Camp Selection */}
        {selectedWing && (
          <div className="mt-6">
            <label className="font-bold">
              Select Camp
            </label>

            <br />

            <select
              className="border p-3 rounded-lg w-80 mt-2 shadow-sm"
              onChange={(e) => {
                const camp =
                  camps.find(
                    (
                      c
                    ) =>
                      c.id ===
                      Number(
                        e
                          .target
                          .value
                      )
                  );

                setSelectedCamp(
                  camp
                );

                if (
                  camp
                ) {
                  // Save camp
                  localStorage.setItem(
                    "selectedCamp",
                    camp.name
                  );

                  alert(
                    `✅ ${camp.name} Selected Successfully`
                  );
                }
              }}
            >
              <option value="">
                Select Camp
              </option>

              {filteredCamps.map(
                (
                  camp
                ) => (
                  <option
                    key={
                      camp.id
                    }
                    value={
                      camp.id
                    }
                  >
                    {
                      camp.name
                    }
                  </option>
                )
              )}
            </select>
          </div>
        )}

        {/* Camp Details */}
        {selectedCamp && (
          <CampCard
            name={
              selectedCamp.name
            }
            location={
              selectedCamp.location
            }
            duration={
              selectedCamp.duration
            }
            reportingTime={
              selectedCamp.reportingTime
            }
            uniform={
              selectedCamp.uniform
            }
            activities={
              selectedCamp.activities
            }
          />
        )}

        {/* Selected Wing Info */}
        {selectedWing && (
          <div
            className={`${theme.card} p-6 rounded-2xl shadow-lg mt-8`}
          >
            <h2
              className={`text-2xl font-bold ${theme.title}`}
            >
              Selected Wing:
              {" "}
              {
                selectedWing
              }
            </h2>

            <p className="mt-2 text-gray-700">
              {selectedWing ===
                "Army" &&
                "Army Wing focuses on discipline, weapon training, field craft and parade."}

              {selectedWing ===
                "Navy" &&
                "Navy Wing focuses on navigation, sailing and naval communication."}

              {selectedWing ===
                "Air" &&
                "Air Wing focuses on aviation, aeromodelling and aircraft systems."}
            </p>
          </div>
        )}

        {/* NCC Wings */}
        <div className="mt-12">
          <h2
            className={`text-3xl font-bold mb-5 ${theme.title}`}
          >
            NCC Wings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Army */}
            <div className="bg-[#D6C7A1] rounded-2xl shadow-lg p-5 hover:scale-105 transition">

              <h3 className="text-2xl font-bold text-[#4B5320]">
                🪖 Army Wing
              </h3>

              <p className="mt-3 text-gray-700">
                Focuses on
                drill,
                weapon
                training,
                field craft,
                discipline
                and
                leadership.
              </p>

              <h4 className="font-bold mt-4">
                Related
                Camps:
              </h4>

              <p>
                RDC,
                CATC,
                TSC,
                Army
                Attachment
              </p>
            </div>

            {/* Navy */}
            <div className="bg-blue-100 rounded-2xl shadow-lg p-5 hover:scale-105 transition">

              <h3 className="text-2xl font-bold text-blue-900">
                ⚓ Navy Wing
              </h3>

              <p className="mt-3 text-gray-700">
                Covers
                navigation,
                sailing,
                seamanship
                and naval
                communication.
              </p>

              <h4 className="font-bold mt-4">
                Related
                Camps:
              </h4>

              <p>
                Naval
                Attachment,
                Sea Training
              </p>
            </div>

            {/* Air */}
            <div className="bg-sky-100 rounded-2xl shadow-lg p-5 hover:scale-105 transition">

              <h3 className="text-2xl font-bold text-sky-900">
                ✈ Air Wing
              </h3>

              <p className="mt-3 text-gray-700">
                Includes
                aviation,
                flying,
                aeromodelling
                and aircraft
                systems.
              </p>

              <h4 className="font-bold mt-4">
                Related
                Camps:
              </h4>

              <p>
                Air Force
                Attachment
                Camp
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;