import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Schedule() {
  const wing =
    localStorage.getItem(
      "selectedWing"
    );

  const certificate =
    localStorage.getItem(
      "certificate"
    );

  const camp =
    localStorage.getItem(
      "selectedCamp"
    );

  // Theme
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
      wing
    ] ||
    wingTheme.Army;

  const schedule = [];

  // Common schedule
  schedule.push({
    time:
      "05:00 AM",
    task:
      "Physical Training",
  });

  schedule.push({
    time:
      "07:00 AM",
    task:
      "Morning Parade",
  });

  // Wing-based schedule
  if (
    wing ===
    "Army"
  ) {
    schedule.push({
      time:
        "10:00 AM",
      task:
        "Weapon Training",
    });

    schedule.push({
      time:
        "02:00 PM",
      task:
        "Field Craft",
    });
  }

  if (
    wing ===
    "Navy"
  ) {
    schedule.push({
      time:
        "09:00 AM",
      task:
        "Navigation & Sailing",
    });

    schedule.push({
      time:
        "02:00 PM",
      task:
        "Naval Communication",
    });
  }

  if (
    wing ===
    "Air"
  ) {
    schedule.push({
      time:
        "09:00 AM",
      task:
        "Aviation Basics",
    });

    schedule.push({
      time:
        "01:00 PM",
      task:
        "Aircraft Systems",
    });
  }

  // Camp-specific schedule
  if (
    camp ===
    "RDC Camp"
  ) {
    schedule.push({
      time:
        "05:00 PM",
      task:
        "Republic Day Parade Practice",
    });
  }

  if (
    camp ===
    "CATC Camp"
  ) {
    schedule.push({
      time:
        "04:00 PM",
      task:
        "Camp Activities & Games",
    });
  }

  if (
    camp ===
    "TSC Camp"
  ) {
    schedule.push({
      time:
        "04:30 PM",
      task:
        "Shooting Practice",
    });
  }

  // Certificate based
  if (
    certificate ===
    "A"
  ) {
    schedule.push({
      time:
        "06:00 PM",
      task:
        "Basic Cadet Training",
    });
  }

  if (
    certificate ===
    "B"
  ) {
    schedule.push({
      time:
        "06:00 PM",
      task:
        "Leadership Session",
    });
  }

  if (
    certificate ===
    "C"
  ) {
    schedule.push({
      time:
        "06:00 PM",
      task:
        "Officer-Level Training",
    });
  }

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
          NCC Schedule
        </h1>

        <p className="text-gray-600 mt-2">
          Daily schedule
          based on wing,
          camp and
          certificate
        </p>

        {!wing ? (
          <div className="bg-red-100 text-red-700 p-5 rounded-xl mt-8">
            ⚠ Please
            select a wing
            and camp from
            Dashboard
            first.
          </div>
        ) : (
          <div className="mt-8 space-y-4">

            <div
              className={`${theme.card} p-5 rounded-xl shadow-md`}
            >
              <h2 className="text-xl font-bold">
                Wing:
                {" "}
                {wing}
              </h2>

              <p>
                Certificate:
                {" "}
                {
                  certificate
                }
              </p>

              <p>
                Camp:
                {" "}
                {camp}
              </p>
            </div>

            {schedule.map(
              (
                item,
                index
              ) => (
                <div
                  key={
                    index
                  }
                  className="bg-white p-5 rounded-xl shadow-md flex justify-between hover:scale-105 transition"
                >
                  <span className="font-bold">
                    {
                      item.time
                    }
                  </span>

                  <span>
                    {
                      item.task
                    }
                  </span>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Schedule;