import React, { useState, useEffect } from 'react';
import './Game.css';

const questions = [
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },
    { question: "Who developed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Marie Curie"], answer: "Albert Einstein" },
    { question: "What is the largest planet in our solar system?", options: ["Earth", "Jupiter", "Saturn", "Mars"], answer: "Jupiter" },
    { question: "What is the boiling point of water?", options: ["100°C", "90°C", "120°C", "150°C"], answer: "100°C" },
    { question: "What is the smallest country in the world?", options: ["Monaco", "Vatican City", "Nauru", "San Marino"], answer: "Vatican City" },
    { question: "Who painted the Mona Lisa?", options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Michelangelo"], answer: "Leonardo da Vinci" },
    { question: "Which element has the chemical symbol 'O'?", options: ["Oxygen", "Osmium", "Ozone", "Opium"], answer: "Oxygen" },
    { question: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "J.K. Rowling", "George Orwell"], answer: "William Shakespeare" },
    { question: "Which planet is known as the Red Planet?", options: ["Venus", "Earth", "Mars", "Saturn"], answer: "Mars" },
    { question: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Ganges"], answer: "Nile" },
    { question: "Who is known as the Father of Computers?", options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"], answer: "Charles Babbage" },
    { question: "Which country has the most pyramids?", options: ["Mexico", "Egypt", "Sudan", "Peru"], answer: "Sudan" },
    { question: "What is the currency of Japan?", options: ["Yuan", "Won", "Yen", "Ringgit"], answer: "Yen" },
    { question: "In which city would you find the Colosseum?", options: ["Athens", "Rome", "Paris", "Cairo"], answer: "Rome" },
    { question: "Which animal is known as the 'King of the Jungle'?", options: ["Tiger", "Elephant", "Lion", "Giraffe"], answer: "Lion" },
    { question: "What is the largest continent?", options: ["Africa", "Asia", "Europe", "Australia"], answer: "Asia" },
    { question: "What is the main ingredient in guacamole?", options: ["Tomato", "Onion", "Avocado", "Chili"], answer: "Avocado" },
    { question: "Which famous scientist developed the laws of motion?", options: ["Nikola Tesla", "Albert Einstein", "Isaac Newton", "Galileo Galilei"], answer: "Isaac Newton" },
    { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Diamond", "Iron", "Platinum"], answer: "Diamond" },
    { question: "What is the tallest mountain in the world?", options: ["Mount Everest", "K2", "Mount Kilimanjaro", "Mount Fuji"], answer: "Mount Everest" },
    { question: "What is the primary ingredient in sushi?", options: ["Rice", "Seaweed", "Fish", "Ginger"], answer: "Rice" },
    { question: "Which country is known for its kangaroos?", options: ["Canada", "Australia", "India", "South Africa"], answer: "Australia" }
  ];

function getRandomQuestions() {
  const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
  return shuffledQuestions.slice(0, 10); // 10 harcery
}

const Game = ({ setIsGameStarted }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [descriptionVisible, setDescriptionVisible] = useState(true);
  const [lifelineUsed, setLifelineUsed] = useState(false); 

  useEffect(() => {
    if (gameStarted) {
      const randomQuestions = getRandomQuestions();
      setQuestions(randomQuestions);
    }
  }, [gameStarted]);

  const handleStartGame = () => {
    setDescriptionVisible(false); //hanum enq opisaanian
    setGameStarted(true); 
    setIsGameStarted(true); 
  };

  const handleAnswer = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.answer) {
      setScore(score + 1); // ete jista patasxany + 1
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1); // hajord harcy
    } else {
      alert(`Game Over! Your score is: ${score}`);
      setGameStarted(false); //xaxy prcav
      setCurrentQuestionIndex(0); // 
      setScore(0); // 
      setDescriptionVisible(true); //cuyc enq talis opisanina
      setLifelineUsed(false);
    }
  };


  const handle50_50 = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (!lifelineUsed) {
      setLifelineUsed(true); // anjatum enq 50 50

      // gtnum enq 2 sxal patasxan
      const incorrectOptions = currentQuestion.options.filter(option => option !== currentQuestion.answer);
      const randomIncorrectOptions = incorrectOptions.sort(() => Math.random() - 0.5).slice(0, 2); //patahakan yntrum enq 1 sxal patasxan

      // toxum enq jist harcy ev mek sxal
      const updatedOptions = currentQuestion.options.filter(option => option === currentQuestion.answer || !randomIncorrectOptions.includes(option));

      // poxum enq harcy
      const updatedQuestions = [...questions];
      updatedQuestions[currentQuestionIndex] = { ...currentQuestion, options: updatedOptions };
      setQuestions(updatedQuestions); // tarmacnum enq zangvacy
    }
  };

  //ete xaxy chi skskel cuyc en talis opisanian ev start game
  if (!gameStarted) {
    return (
      <div className="game-container">
        {descriptionVisible && (
          <div>
            <h2>Welcome to the Game!</h2>
            <p className="game-description">
              In this game, you will answer 10 random trivia questions. Try to get as many correct answers as possible!
            </p>
            <button onClick={handleStartGame}>Start Game</button>
          </div>
        )}
      </div>
    );
  }

  // qani harcery chen ekel
  if (questions.length === 0) return <div>Loading...</div>;

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="game-container">
      <h2>{currentQuestion.question}</h2>
      <div>
        {currentQuestion.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
      <div className="score">Score: {score}</div>


      {!lifelineUsed && (
        <div>
          <button onClick={handle50_50} className="lifeline-button">
            50:50
          </button>
        </div>
      )}


      {!descriptionVisible && !gameStarted && (
        <button onClick={handleStartGame} className="restart-button">
          Restart Game
        </button>
      )}
    </div>
  );
};

export default Game;
