import React, { useState } from "react";
import "./Test.css";
import questions from "../QuizData";
import TestResult from "./TestResult";

export default function Test() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [score, setScore] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [showresult, setShowResult] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false); // Track whether the question is answered
  const [quest, setQuest] = useState(questions.length);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setCorrectAnswer(correctAnswer);
    }
    setIsAnswered(true);
  };

  const handleNext = () => {
    if (isAnswered) {
      setCorrectAnswer(correctAnswer + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < quest) {
      setCurrentQuestion(nextQuestion);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };
  const handleDifficulty = (e) => {
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
  };

  const handlePlay = () => {
    setCurrentQuestion(0);
    setCorrectAnswer(0);
    setShowResult(false);
  };

  return (
    <div className="container-body">
      <div style={{}} className="container">
        {showresult ? (
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
              <div className="question-text ">
                {questions[currentQuestion].question}
              </div>
              <div className="difficulty">
                <h3>Difficulty:</h3>
                <select className="difficulty" onChange={handleDifficulty}>
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
              {questions[currentQuestion].answerOptions.map((ans, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(ans.isCorrect)}
                    disabled={isAnswered}
                  >
                    {ans.answer}
                  </button>
                );
              })}

              <div className="actions">
                <button disabled={!isAnswered} onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
