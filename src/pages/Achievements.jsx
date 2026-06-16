import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Achievements() {
  const attendance = 89;
  const quizScore =
    Number(localStorage.getItem("quizScore")) || 0;

  const certificate =
    localStorage.getItem("certificate");

  return (
    <div className="flex bg-[#F5F0E6] min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8">
        <Navbar />

        <h1 className="text-4xl font-bold text-[#4B5320] mt-6">
          🏅 Cadet Achievements
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl">
              🎖
            </h2>
            <h3 className="font-bold mt-2">
              Regular Cadet
            </h3>
            <p>
              Attendance above 75%
            </p>

            {attendance >= 75 && (
              <p className="text-green-600 mt-3">
                Unlocked ✅
              </p>
            )}
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl">
              🧠
            </h2>
            <h3 className="font-bold mt-2">
              Quiz Champion
            </h3>
            <p>
              Score 4+ in NCC Quiz
            </p>

            {quizScore >= 4 && (
              <p className="text-green-600 mt-3">
                Unlocked ✅
              </p>
            )}
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl">
              🏆
            </h2>
            <h3 className="font-bold mt-2">
              C Certificate Holder
            </h3>
            <p>
              Earn NCC C Certificate
            </p>

            {certificate === "C" && (
              <p className="text-green-600 mt-3">
                Unlocked ✅
              </p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Achievements;