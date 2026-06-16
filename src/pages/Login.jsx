import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

function Login() {
  const navigate =
    useNavigate();

  const [
    cadetName,
    setCadetName,
  ] = useState("");

  const [cadetId,
    setCadetId] =
    useState("");

  const [certificate,
    setCertificate] =
    useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (
      !cadetName ||
      !cadetId ||
      !certificate
    ) {
      alert(
        "Please fill all details"
      );
      return;
    }

    localStorage.setItem(
      "cadetName",
      cadetName
    );

    loginUser(
      cadetId,
      certificate
    );

    alert(
      "✅ Login Successful"
    );

    navigate(
      "/dashboard"
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F5F0E6]">

      <form
        onSubmit={
          handleLogin
        }
        className="bg-white p-10 rounded-2xl shadow-xl w-[420px]"
      >
        <h1 className="text-3xl font-bold text-center text-[#4B5320] mb-6">
          NCC Login
        </h1>

        <input
          type="text"
          placeholder="Cadet Name"
          className="border p-3 rounded-lg w-full mb-4"
          value={cadetName}
          onChange={(e) =>
            setCadetName(
              e.target.value
            )
          }
        />

        <input
          type="text"
          placeholder="Cadet ID"
          className="border p-3 rounded-lg w-full mb-4"
          value={cadetId}
          onChange={(e) =>
            setCadetId(
              e.target.value
            )
          }
        />

        <select
          className="border p-3 rounded-lg w-full mb-5"
          value={
            certificate
          }
          onChange={(e) =>
            setCertificate(
              e.target.value
            )
          }
        >
          <option value="">
            Select Certificate
          </option>

          <option value="A">
            A Certificate
          </option>

          <option value="B">
            B Certificate
          </option>

          <option value="C">
            C Certificate
          </option>
        </select>

        <button className="bg-[#4B5320] text-white p-3 rounded-lg w-full hover:scale-105">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;