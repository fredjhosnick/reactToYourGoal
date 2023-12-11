import React, { useState } from "react";
import "./Test.css";
import questions from "../QuizData";
import TestResult from "./TestResult";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Test() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quest, setQuest] = useState(questions.length);
  const [testStarted, setTestStarted] = useState(false);

  const handleAnswer = (isCorrect, index) => {
    setSelectedAnswer(index);
    if (isCorrect) {
      setCorrectAnswer(correctAnswer + 1);
    }
  };

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < quest) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const handleDifficulty = (e) => {
    if (!testStarted) {
      let value = e.target.value;
      if (value === "A1") {
        setQuest(6);
      } else if (value === "A2") {
        setQuest(12);
      } else if (value === "B1") {
        setQuest(30);
      } else if (value === "B2") {
        setQuest(36);
      } else if (value === "C1") {
        setQuest(42);
      } else if (value === "C2") {
        setQuest(50);
      }
    }
  };

  const handlePlay = () => {
    setCurrentQuestion(0);
    setCorrectAnswer(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setQuest(questions.length);
    setTestStarted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="container-body"
    >
      <div className="container">
        {showResult ? (
          <TestResult
            quest={quest}
            correctAnswer={correctAnswer}
            handlePlay={handlePlay}
          />
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>
                  Question {currentQuestion + 1} / {quest}
                </span>
              </div>
              <div className="question-text">
                {questions[currentQuestion].question}
              </div>
              <div className="difficulty-container">
                <h3>Difficulty:</h3>
                <select
                  disabled={testStarted}
                  className="difficulty"
                  onChange={handleDifficulty}
                >
                  <option value="C2">C2</option>
                  <option value="C1">C1</option>
                  <option value="B2">B2</option>
                  <option value="B1">B1</option>
                  <option value="A2">A2</option>
                  <option value="A1">A1</option>
                </select>
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((ans, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(ans.isCorrect, index)}
                  disabled={selectedAnswer !== null}
                  className={`
                    button 
                    ${selectedAnswer === index ? "selected" : ""}
                    
                  `}
                >
                  {ans.answer}
                </button>
              ))}
              <div className="actions">
                <Link to="/courses">
                  <button>Quit</button>
                </Link>

                <button disabled={selectedAnswer === null} onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}
