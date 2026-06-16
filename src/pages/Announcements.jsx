import Sidebar from "../components/Sidebar";

function Announcements() {
  const announcements = [
    "Parade starts at 6:00 AM tomorrow.",
    "Bring full NCC uniform for inspection.",
    "Campfire event scheduled for Friday.",
  ];

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold text-green-900">
          Announcements
        </h1>

        <div className="space-y-5 mt-8">
          {announcements.map((notice, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-lg"
            >
              {notice}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Announcements;