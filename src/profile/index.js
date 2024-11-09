import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const Profile = ({ userName }) => {
  const handleStartGame = () => {
    // Логика для начала игры (например, редирект на страницу игры)
    // Можно добавить редирект на страницу игры
    window.location.href = '/game'; // Замените '/game' на путь к вашей странице игры
  };

  return (
    <div className="welcome-page">
      <h1>Hello, {userName}!</h1> {/* Отображаем имя пользователя */}
      <p>Welcome to the game! Here's a brief description:</p>
      <p>1. The Goal of the Game
Your goal is to answer a series of 15 multiple-choice questions correctly. Each question has four possible answers, but only one correct answer. The more questions you answer correctly, the higher your prize!

2. How to Play
Answering Questions: You will be presented with a question and four possible answers. You must select one answer that you believe is correct. If you're unsure, you can use one of the available "lifelines" (see below).
Time Limit: Each question must be answered within a certain amount of time. If time runs out, your answer will automatically be selected.
3. Lifelines
You have three lifelines to help you answer the questions:

50:50: The system will eliminate two incorrect answers, leaving you with one correct answer and one incorrect answer.
Phone a Friend: You can call a friend for advice on the correct answer.
Ask the Audience: The audience will give you their opinion on what they think the correct answer is.
4. Prize Money
The prize money increases with each correct answer. The prize scale is as follows:

Question 1-5: Small prizes, starting from $100 to $1,000.
Question 6-10: Medium prizes, ranging from $1,000 to $32,000.
Question 11-15: Big prizes, starting from $64,000 and up to the million-dollar jackpot!
If you answer a question incorrectly, you will lose all the money you earned from that point, except for certain safety points (usually after the 5th and 10th questions).

5. Winning the Game
The game is won when you successfully answer all 15 questions. If you answer all questions correctly, you win the grand prize: $1,000,000!

6. Important Notes
You can quit at any time during the game and take home the money you’ve earned up until that point.
The questions get harder as you go, so be prepared to think fast and use your lifelines wisely!
Good luck, and may you become the next millionaire!

</p>
      
      <div className="d-grid">
        <button onClick={handleStartGame} className="btn btn-primary">
          Start Game
        </button>
      </div>
    </div>
  );
};

export default Profile;
