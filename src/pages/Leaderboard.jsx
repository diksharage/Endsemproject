import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Leaderboard() {
  const quizScore =
    Number(
      localStorage.getItem(
        "quizScore"
      )
    ) || 0;

  const cadetName =
    localStorage.getItem(
      "cadetName"
    ) || "You";

  const cadets = [
    {
      name: cadetName,
      attendance: 89,
      camps: 4,
      quiz: quizScore,
    },

    {
      name: "Rahul",
      attendance: 85,
      camps: 3,
      quiz: 4,
    },

    {
      name: "Anjali",
      attendance: 92,
      camps: 5,
      quiz: 5,
    },

    {
      name: "Arjun",
      attendance: 80,
      camps: 2,
      quiz: 3,
    },

    {
      name: "Sneha",
      attendance: 95,
      camps: 4,
      quiz: 5,
    },
  ];

  const leaderboard =
    cadets
      .map((cadet) => ({
        ...cadet,

        points:
          cadet.attendance +
          cadet.camps * 10 +
          cadet.quiz * 20,
      }))
      .sort(
        (a, b) =>
          b.points -
          a.points
      );

  return (
    <div className="flex bg-[#F5F0E6] min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8">
        <Navbar />

        <h1 className="text-4xl font-bold text-[#4B5320] mt-6">
          NCC Leaderboard
        </h1>

        <p className="text-gray-600 mt-2">
          Top Performing Cadets
        </p>

        <div className="bg-white mt-8 rounded-2xl shadow-xl overflow-hidden">

          <table className="w-full">
            <thead>
              <tr className="bg-[#4B5320] text-white">
                <th className="p-4">
                  Rank
                </th>

                <th className="p-4">
                  Cadet
                </th>

                <th className="p-4">
                  Attendance
                </th>

                <th className="p-4">
                  Camps
                </th>

                <th className="p-4">
                  Quiz
                </th>

                <th className="p-4">
                  Points
                </th>
              </tr>
            </thead>

            <tbody>

              {leaderboard.map(
                (
                  cadet,
                  index
                ) => (
                  <tr
                    key={index}
                    className="text-center border-b hover:bg-gray-100"
                  >
                    <td className="p-4">

                      {index ===
                        0 &&
                        "🥇"}

                      {index ===
                        1 &&
                        "🥈"}

                      {index ===
                        2 &&
                        "🥉"}

                      {index >
                        2 &&
                        `#${index + 1}`}
                    </td>

                    <td className="p-4 font-bold">
                      {
                        cadet.name
                      }
                    </td>

                    <td className="p-4">
                      {
                        cadet.attendance
                      }
                      %
                    </td>

                    <td className="p-4">
                      {
                        cadet.camps
                      }
                    </td>

                    <td className="p-4">
                      {
                        cadet.quiz
                      }
                    </td>

                    <td className="p-4 font-bold text-green-700">
                      {
                        cadet.points
                      }
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg mt-8">

          <h2 className="text-2xl font-bold text-[#4B5320]">
            Points Formula
          </h2>

          <p className="mt-3">
            Attendance %
            +
            (Camp Count ×
            10)
            +
            (Quiz Score ×
            20)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;