import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Attendance() {
  const attendanceData = [
    {
      date: "01 June",
      status: "Present",
    },

    {
      date: "02 June",
      status: "Present",
    },

    {
      date: "03 June",
      status: "Absent",
    },

    {
      date: "04 June",
      status: "Present",
    },

    {
      date: "05 June",
      status: "Present",
    },

    {
      date: "06 June",
      status: "Present",
    },

    {
      date: "07 June",
      status: "Absent",
    },
  ];

  const totalDays =
    attendanceData.length;

  const presentDays =
    attendanceData.filter(
      (item) =>
        item.status ===
        "Present"
    ).length;

  const absentDays =
    totalDays -
    presentDays;

  const attendancePercentage =
    Math.round(
      (presentDays /
        totalDays) *
        100
    );

  return (
    <div className="flex bg-[#F5F0E6] min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8">
        <Navbar />

        <h1 className="text-4xl font-bold text-[#4B5320] mt-6">
          Attendance Analytics
        </h1>

        <p className="text-gray-600 mt-2">
          Track your NCC attendance performance
        </p>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-bold text-gray-500">
              Total Days
            </h3>

            <p className="text-4xl font-bold text-[#4B5320] mt-3">
              {totalDays}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-bold text-gray-500">
              Present
            </h3>

            <p className="text-4xl font-bold text-green-600 mt-3">
              {presentDays}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-bold text-gray-500">
              Absent
            </h3>

            <p className="text-4xl font-bold text-red-600 mt-3">
              {absentDays}
            </p>
          </div>
        </div>

        {/* Attendance Percentage */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mt-8">

          <h2 className="text-2xl font-bold text-[#4B5320]">
            Attendance Percentage
          </h2>

          <div className="mt-5">
            <div className="flex justify-between mb-2">

              <span>
                Current Attendance
              </span>

              <span className="font-bold">
                {attendancePercentage}%
              </span>
            </div>

            <div className="w-full bg-gray-300 rounded-full h-6">

              <div
                className="bg-green-600 h-6 rounded-full text-white text-center"
                style={{
                  width: `${attendancePercentage}%`,
                }}
              >
                {attendancePercentage}%
              </div>
            </div>
          </div>
        </div>

        {/* Performance Badge */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mt-8">

          <h2 className="text-2xl font-bold text-[#4B5320]">
            Attendance Status
          </h2>

          <div className="mt-5 text-2xl">

            {attendancePercentage >=
            90
              ? "🏆 Excellent Attendance"

              : attendancePercentage >=
                75
              ? "🎖 Good Attendance"

              : "⚠ Attendance Improvement Required"}
          </div>
        </div>

        {/* Attendance Records */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mt-8">

          <h2 className="text-2xl font-bold text-[#4B5320] mb-5">
            Attendance Record
          </h2>

          <table className="w-full">
            <thead>

              <tr className="bg-[#4B5320] text-white">
                <th className="p-3">
                  Date
                </th>

                <th className="p-3">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>

              {attendanceData.map(
                (
                  item,
                  index
                ) => (
                  <tr
                    key={index}
                    className="text-center border-b"
                  >
                    <td className="p-3">
                      {item.date}
                    </td>

                    <td className="p-3">

                      <span
                        className={
                          item.status ===
                          "Present"
                            ? "text-green-600 font-bold"
                            : "text-red-600 font-bold"
                        }
                      >
                        {
                          item.status
                        }
                      </span>

                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default Attendance;