import { useState } from "react";
import Navigation from "../components/Navigation";
import Chat from "../components/Chat";
import QuestionsData from "../data/questionsData";
import AnswersData from "../data/answersData";
import Translations from "../data/translations";
import frontImg from "../img/frontImg.jpg";
import "../style/pages/FAQ.css";

function FAQ() {
  const [showAnswer, setShowAnswer] = useState(-1);

  const questions = QuestionsData();
  const answers = AnswersData();
  const translations = Translations();

  const handleClick = (number) => {
    if (number === showAnswer) return setShowAnswer(-1);
    setShowAnswer(number);
  };

  const mappedAnswers = answers.map((answer, i) => {
    if (i === showAnswer) return answer;
  });

  const mappedQuestions = questions.map((question, i) => {
    return (
      <div key={i}>
        <div onClick={() => handleClick(i)} className="FAQQuestion">
          {question}
        </div>
        <div>{mappedAnswers[i]}</div>
      </div>
    );
  });

  return (
    <div>
      <div className="frontFAQ">
        <Navigation />
        <img src={frontImg} alt="frontImage" className="frontImageFAQ" />
        <div className="FAQ">
          <div>{translations.FAQ}</div>
          <div>{mappedQuestions}</div>
        </div>
      </div>
      <Chat />
    </div>
  );
}

export default FAQ;
