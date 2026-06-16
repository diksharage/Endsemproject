import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Comments() {
  const [name, setName] =
    useState("");

  const [wing, setWing] =
    useState("");

  const [
    feedbackType,
    setFeedbackType,
  ] = useState("");

  const [
    comment,
    setComment,
  ] = useState("");

  const [
    comments,
    setComments,
  ] = useState([]);

  const handleSubmit = (
    e
  ) => {
    e.preventDefault();

    if (
      !name ||
      !wing ||
      !feedbackType ||
      !comment
    ) {
      alert(
        "⚠ Please fill all fields"
      );
      return;
    }

    const newComment = {
      id: Date.now(),
      name,
      wing,
      feedbackType,
      comment,
    };

    setComments([
      newComment,
      ...comments,
    ]);

    alert(
      "✅ Feedback Submitted Successfully!"
    );

    // Clear form
    setName("");
    setWing("");
    setFeedbackType("");
    setComment("");
  };

  const deleteComment = (
    id
  ) => {
    const updated =
      comments.filter(
        (
          item
        ) =>
          item.id !==
          id
      );

    setComments(
      updated
    );
  };

  return (
    <div className="flex bg-[#F5F0E6] min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8">
        <Navbar />

        {/* Heading */}
        <h1 className="text-4xl font-bold text-[#4B5320] mt-6">
          NCC Feedback
        </h1>

        <p className="text-gray-600 mt-2">
          Share your NCC
          camp experience
          and suggestions
        </p>

        {/* Form */}
        <div className="bg-white shadow-lg rounded-2xl p-6 mt-8">

          <form
            onSubmit={
              handleSubmit
            }
          >
            {/* Name */}
            <div className="mb-4">
              <label className="font-bold">
                Cadet Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                value={
                  name
                }
                onChange={(
                  e
                ) =>
                  setName(
                    e
                      .target
                      .value
                  )
                }
                className="w-full border p-3 rounded-lg mt-2"
              />
            </div>

            {/* Wing */}
            <div className="mb-4">
              <label className="font-bold">
                NCC Wing
              </label>

              <select
                value={
                  wing
                }
                onChange={(
                  e
                ) =>
                  setWing(
                    e
                      .target
                      .value
                  )
                }
                className="w-full border p-3 rounded-lg mt-2"
              >
                <option value="">
                  Select Wing
                </option>

                <option value="Army">
                  🪖 Army
                </option>

                <option value="Navy">
                  ⚓ Navy
                </option>

                <option value="Air">
                  ✈ Air
                </option>
              </select>
            </div>

            {/* Feedback Type */}
            <div className="mb-4">
              <label className="font-bold">
                Feedback Type
              </label>

              <select
                value={
                  feedbackType
                }
                onChange={(
                  e
                ) =>
                  setFeedbackType(
                    e
                      .target
                      .value
                  )
                }
                className="w-full border p-3 rounded-lg mt-2"
              >
                <option value="">
                  Select
                </option>

                <option>
                  Camp Experience
                </option>

                <option>
                  Parade Training
                </option>

                <option>
                  Drill Practice
                </option>

                <option>
                  Weapon Training
                </option>

                <option>
                  Leadership Session
                </option>

                <option>
                  Overall NCC Experience
                </option>
              </select>
            </div>

            {/* Comment */}
            <div className="mb-4">
              <label className="font-bold">
                Your Feedback
              </label>

              <textarea
                rows="4"
                placeholder="Share your experience..."
                value={
                  comment
                }
                onChange={(
                  e
                ) =>
                  setComment(
                    e
                      .target
                      .value
                  )
                }
                className="w-full border p-3 rounded-lg mt-2"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#4B5320] text-white px-6 py-3 rounded-lg hover:bg-[#394016]"
            >
              Submit Feedback
            </button>
          </form>
        </div>

        {/* Comments Display */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-[#4B5320] mb-4">
            Cadet Reviews
          </h2>

          {comments.length ===
          0 ? (
            <div className="bg-white p-5 rounded-xl shadow">
              No feedback
              submitted yet.
            </div>
          ) : (
            <div className="space-y-4">

              {comments.map(
                (
                  item
                ) => (
                  <div
                    key={
                      item.id
                    }
                    className="bg-white p-5 rounded-2xl shadow-lg border-l-4 border-[#4B5320]"
                  >
                    <div className="flex justify-between">

                      <div>
                        <h3 className="font-bold text-lg">
                          {
                            item.name
                          }
                        </h3>

                        <p className="text-gray-500">
                          {
                            item.wing
                          }
                          {" "}
                          Wing |
                          {" "}
                          {
                            item.feedbackType
                          }
                        </p>
                      </div>

                      <button
                        onClick={() =>
                          deleteComment(
                            item.id
                          )
                        }
                        className="text-red-600 font-bold"
                      >
                        Delete
                      </button>
                    </div>

                    <p className="mt-3 text-gray-700">
                      {
                        item.comment
                      }
                    </p>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Comments;