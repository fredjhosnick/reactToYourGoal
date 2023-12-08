import React, { useState, useEffect } from "react";
import "./Test.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function TestResult({ quest, correctAnswer, handlePlay }) {
  const [text, setText] = useState("");

  if (
    typeof correctAnswer !== "number" ||
    typeof quest !== "number" ||
    quest <= 0
  ) {
    return <div>Error: Invalid inputs</div>;
  }

  useEffect(() => {
    switch (true) {
      case correctAnswer >= 0 && correctAnswer <= 6:
        setText("A1");
        break;
      case correctAnswer > 6 && correctAnswer <= 12:
        setText("A2");
        break;
      case correctAnswer > 12 && correctAnswer <= 30:
        setText("B1");
        break;
      case correctAnswer > 30 && correctAnswer <= 36:
        setText("B2");
        break;
      case correctAnswer > 36 && correctAnswer <= 42:
        setText("C1");
        break;
      case correctAnswer > 42 && correctAnswer <= 50:
        setText("C2");
        break;
      default:
        setText("Unknown Level");
    }
  }, [correctAnswer]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <div className="score-section">
        <h2>Completed!!</h2>

        <h4>
          Your Correct Answers {correctAnswer} out of {quest}
        </h4>
        <h3>
          Your Level is: <span>{text}</span>
        </h3>
        <Link className="bt-na" to="/courses">
          <button>Go to Courses</button>
        </Link>
        <Link className="bt-na">
          <button onClick={handlePlay}>Test Again</button>
        </Link>
      </div>
    </motion.div>
  );
}
