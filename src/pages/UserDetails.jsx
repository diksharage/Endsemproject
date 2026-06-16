import {
  useEffect,
  useState,
} from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  calculateAttendance,
  getCertificateBadge,
} from "../utils/helpers";

function UserDetails() {
  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const cadetName =
    localStorage.getItem(
      "cadetName"
    );

  const cadetId =
    localStorage.getItem(
      "cadetId"
    );

  const certificate =
    localStorage.getItem(
      "certificate"
    );

  const selectedWing =
    localStorage.getItem(
      "selectedWing"
    );

  useEffect(() => {
    fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    )
      .then((response) =>
        response.json()
      )
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => {
        alert(
          "Failed to load cadet profile"
        );
      });
  }, []);

  const attendance =
    calculateAttendance(
      100,
      89
    );

  const attendanceValue = 89;

  const quizScore =
    Number(
      localStorage.getItem(
        "quizScore"
      )
    ) || 0;

  const campsAttended = 4;

  let rank = "Cadet";

  if (
    attendanceValue >= 75 &&
    certificate === "A"
  ) {
    rank =
      "Lance Corporal";
  }

  if (
    attendanceValue >= 80 &&
    certificate === "B"
  ) {
    rank = "Corporal";
  }

  if (
    attendanceValue >= 85 &&
    certificate === "B" &&
    quizScore >= 3
  ) {
    rank = "Sergeant";
  }

  if (
    attendanceValue >= 90 &&
    certificate === "C" &&
    quizScore >= 4
  ) {
    rank =
      "Under Officer";
  }

  if (
    attendanceValue >= 95 &&
    certificate === "C" &&
    quizScore === 5
  ) {
    rank =
      "Senior Under Officer";
  }

  let performance =
    "Average";

  if (
    attendanceValue >= 90 &&
    quizScore >= 4
  ) {
    performance =
      "Excellent";
  } else if (
    attendanceValue >= 80
  ) {
    performance =
      "Good";
  }

  const wingTheme = {
    Army: {
      bg:
        "bg-[#F5F0E6]",
      title:
        "text-[#4B5320]",
      card:
        "bg-[#C3B091]",
      badge:
        "bg-[#4B5320]",
    },

    Navy: {
      bg:
        "bg-blue-50",
      title:
        "text-blue-900",
      card:
        "bg-blue-100",
      badge:
        "bg-blue-900",
    },

    Air: {
      bg:
        "bg-sky-50",
      title:
        "text-sky-900",
      card:
        "bg-sky-100",
      badge:
        "bg-sky-900",
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

        <h1
          className={`text-4xl font-bold mt-6 ${theme.title}`}
        >
          NCC Cadet Profile
        </h1>

        <p className="text-gray-600 mt-2">
          Personal details &
          eligibility
        </p>

        {loading ? (
          <p className="mt-5">
            Loading...
          </p>
        ) : (
          <div
            className={`${theme.card} shadow-lg rounded-2xl p-8 mt-8`}
          >
            <div className="flex justify-between items-center border-b pb-4">
              <div>
                <h2
                  className={`text-3xl font-bold ${theme.title}`}
                >
                  👤 {cadetName}
                </h2>

                <p className="text-gray-700">
                  NCC Cadet
                </p>
              </div>

              <div
                className={`${theme.badge} text-white px-5 py-2 rounded-full font-semibold`}
              >
                {getCertificateBadge(
                  certificate
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">

              <div className="bg-white p-5 rounded-xl shadow-sm">
                <h3
                  className={`text-xl font-bold mb-4 ${theme.title}`}
                >
                  Personal Details
                </h3>

                <p>
                  <strong>
                    Cadet ID:
                  </strong>{" "}
                  {cadetId}
                </p>

                <p>
                  <strong>
                    Email:
                  </strong>{" "}
                  {user.email}
                </p>

                <p>
                  <strong>
                    Phone:
                  </strong>{" "}
                  {user.phone}
                </p>

                <p>
                  <strong>
                    Website:
                  </strong>{" "}
                  {user.website}
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm">
                <h3
                  className={`text-xl font-bold mb-4 ${theme.title}`}
                >
                  NCC Details
                </h3>

                <p>
                  <strong>
                    Wing:
                  </strong>{" "}
                  {selectedWing}
                </p>

                <p>
                  <strong>
                    Attendance:
                  </strong>{" "}
                  {attendance}
                </p>

                <p>
                  <strong>
                    Quiz Score:
                  </strong>{" "}
                  {quizScore}/5
                </p>

                <p>
                  <strong>
                    Camps Attended:
                  </strong>{" "}
                  {campsAttended}
                </p>

                <p>
                  <strong>
                    Rank:
                  </strong>{" "}
                  {rank}
                </p>

                <p>
                  <strong>
                    Performance:
                  </strong>{" "}
                  {performance}
                </p>

                <p>
                  <strong>
                    Next Promotion:
                  </strong>{" "}
                  {rank ===
                  "Senior Under Officer"
                    ? "Highest Rank Achieved"
                    : "Complete More Camps & Improve Attendance"}
                </p>

                <p>
                  <strong>
                    Eligible Camp:
                  </strong>{" "}
                  {certificate ===
                  "A"
                    ? "CATC"
                    : certificate ===
                      "B"
                    ? "CATC, TSC"
                    : "RDC, TSC, Army Attachment"}
                </p>
              </div>

            </div>

            <div className="bg-white p-5 rounded-xl mt-8 shadow-sm">
              <h3
                className={`text-xl font-bold mb-4 ${theme.title}`}
              >
                Achievement Badges
              </h3>

              <div className="flex flex-wrap gap-3">

                {attendanceValue >=
                  75 && (
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
                    🎖 Regular Cadet
                  </span>
                )}

                {quizScore >=
                  3 && (
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                    🧠 NCC Quiz Expert
                  </span>
                )}

                {certificate ===
                  "A" && (
                  <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">
                    🟢 A Certificate Holder
                  </span>
                )}

                {certificate ===
                  "B" && (
                  <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">
                    🟡 B Certificate Holder
                  </span>
                )}

                {certificate ===
                  "C" && (
                  <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full">
                    🔴 C Certificate Holder
                  </span>
                )}

              </div>
            </div>

            <div className="bg-white p-5 rounded-xl mt-8 shadow-sm">
              <h3
                className={`text-xl font-bold mb-4 ${theme.title}`}
              >
                Rank Progress
              </h3>

              <div className="w-full bg-gray-300 rounded-full h-6">

                <div
                  className="bg-[#4B5320] h-6 rounded-full text-center text-white"
                  style={{
                    width: `${attendanceValue}%`,
                  }}
                >
                  {attendanceValue}%
                </div>

              </div>

              <p className="mt-4 text-gray-700">
                Increase attendance,
                participate in camps,
                and improve quiz score
                to achieve higher NCC ranks.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl mt-8 shadow-sm">
              <h3
                className={`text-xl font-bold ${theme.title}`}
              >
                NCC Motto
              </h3>

              <p className="italic text-gray-700 mt-2">
                "Unity and Discipline"
              </p>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default UserDetails;