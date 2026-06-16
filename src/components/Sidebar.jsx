import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-[#4B5320] text-white w-64 min-h-screen p-5 shadow-xl">
      <h2 className="text-3xl font-bold mb-10">
        NCC Portal
      </h2>

      <ul className="space-y-5">

        <li>
          <Link
            to="/dashboard"
            className="hover:text-yellow-300"
          >
            🏠 Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/events"
            className="hover:text-yellow-300"
          >
            🎖 Events
          </Link>
        </li>

        <li>
          <Link
            to="/leave"
            className="hover:text-yellow-300"
          >
            📝 Leave
          </Link>
        </li>

        <li>
          <Link
           to="/quiz"
           className="hover:text-yellow-300"
          >
    📝 NCC Quiz
  </Link>
</li>

        <li>
          <Link
            to="/users"
            className="hover:text-yellow-300"
          >
            👤 Shop
          </Link>
        </li>

        <li>
          <Link
           to="/leaderboard"
           className="hover:text-yellow-300"
          >
    🏆 Leaderboard
         </Link>
      </li>

      <li>
  <Link
    to="/orders"
    className="hover:text-yellow-300"
  >
    📦 Order History
  </Link>
</li>

          <li>
           <Link
            to="/attendance"
            className="hover:text-yellow-300"
           >
       📊 Attendance
      </Link>
      </li>

      <li>
  <Link
    to="/achievements"
    className="hover:text-yellow-300"
  >
    🏅 Achievements
  </Link>
</li>

        <li>
          <Link
            to="/cart"
            className="hover:text-yellow-300"
          >
            🛒 Cart
          </Link>
        </li>

        <li>
          <Link
            to="/comments"
            className="hover:text-yellow-300"
          >
            💬 Comments
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;