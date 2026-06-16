import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Quiz() {
  const questions = [
    {
      question: "What is the NCC Motto?",
      options: [
        "Unity and Discipline",
        "Service Before Self",
        "Jai Hind",
        "Nation First",
      ],
      answer: "Unity and Discipline",
    },

    {
      question: "Which certificate is highest in NCC?",
      options: [
        "A Certificate",
        "B Certificate",
        "C Certificate",
        "D Certificate",
      ],
      answer: "C Certificate",
    },

    {
      question: "RDC stands for?",
      options: [
        "Republic Day Camp",
        "Regional Development Camp",
        "Rifle Drill Camp",
        "Rural Development Camp",
      ],
      answer: "Republic Day Camp",
    },

    {
      question: "Which wing focuses on aviation?",
      options: [
        "Army",
        "Navy",
        "Air",
        "Medical",
      ],
      answer: "Air",
    },

    {
      question: "NCC Day is celebrated in?",
      options: [
        "January",
        "February",
        "November",
        "December",
      ],
      answer: "November",
    },
  ];

  const [current, setCurrent] =
    useState(0);

  const [score, setScore] =
    useState(0);

  const [finished, setFinished] =
    useState(false);

  const handleAnswer = (
    option
  ) => {
    let newScore = score;

    if (
      option ===
      questions[current].answer
    ) {
      newScore++;
      setScore(newScore);
    }

    if (
      current ===
      questions.length - 1
    ) {
      localStorage.setItem(
        "quizScore",
        newScore
      );

      setFinished(true);
    } else {
      setCurrent(
        current + 1
      );
    }
  };

  return (
    <div className="flex bg-[#F5F0E6] min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8">
        <Navbar />

        <h1 className="text-4xl font-bold text-[#4B5320] mb-6">
          NCC Quiz
        </h1>

        {finished ? (
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">

            <h2 className="text-3xl font-bold text-green-700">
              Quiz Completed
            </h2>

            <p className="mt-4 text-xl">
              Score: {score}/5
            </p>

            <p className="mt-3">
              Your score has been
              saved to your profile.
            </p>

          </div>
        ) : (
          <div className="bg-white p-8 rounded-xl shadow-lg">

            <h2 className="text-2xl font-bold mb-6">
              {
                questions[current]
                  .question
              }
            </h2>

            <div className="space-y-4">

              {questions[
                current
              ].options.map(
                (
                  option,
                  index
                ) => (
                  <button
                    key={index}
                    onClick={() =>
                      handleAnswer(
                        option
                      )
                    }
                    className="block w-full p-4 bg-gray-100 rounded-lg hover:bg-[#4B5320] hover:text-white"
                  >
                    {option}
                  </button>
                )
              )}

            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;