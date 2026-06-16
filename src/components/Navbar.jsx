function Navbar() {
  const cadetId =
    localStorage.getItem(
      "cadetId"
    );

  const certificate =
    localStorage.getItem(
      "certificate"
    );

  return (
    <div className="bg-[#4B5320] text-white p-4 rounded-xl flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold">
        NCC Camp Portal 🇮🇳
      </h1>

      <div>
        <p className="font-semibold">
          Cadet ID:
          {cadetId}
        </p>

        <p>
          Certificate:
          {certificate}
        </p>
      </div>
    </div>
  );
}

export default Navbar;