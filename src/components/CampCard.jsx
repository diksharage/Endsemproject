function CampCard({
  name,
  location,
  duration,
  reportingTime,
  uniform,
  activities,
}) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 mt-8">

      <h2 className="text-2xl font-bold text-[#4B5320]">
        {name}
      </h2>

      <p className="mt-3">
        📍
        <strong>
          Location:
        </strong>{" "}
        {location}
      </p>

      <p>
        📅
        <strong>
          Duration:
        </strong>{" "}
        {duration}
      </p>

      <p>
        ⏰
        <strong>
          Reporting:
        </strong>{" "}
        {reportingTime}
      </p>

      <p>
        👕
        <strong>
          Uniform:
        </strong>{" "}
        {uniform}
      </p>

      <h3 className="font-bold mt-4">
        Activities
      </h3>

      <ul className="list-disc ml-6 mt-2">
        {activities?.map(
          (
            activity,
            index
          ) => (
            <li
              key={
                index
              }
            >
              {
                activity
              }
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default CampCard;