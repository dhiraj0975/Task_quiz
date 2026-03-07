import React, { useState, useEffect } from 'react';
import axiosClient from './api/axiosClient';
import MCQCard from './components/MCQCard';
import ScoreBoard from './components/ScoreBoard';
import Loading from './components/Loading';
import NoQuestions from './components/NoQuestions';
import ProgressSidebar from './components/ProgressSidebar';
import ExplanationBox from './components/ExplanationBox';

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axiosClient.get('/questions');
        setQuestions(response.data);
        setTimeout(() => setLoading(false), 800);
      } catch (error) {
        console.error("Error fetching questions:", error);
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  const handleOptionClick = (optionIdx) => {
    if (isAnswered) return;
    setSelectedOption(optionIdx);
    setIsAnswered(true);

    if (optionIdx === questions[currentIndex].correctOption) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResult(false);
  };

  if (loading) return <Loading />;
  if (questions.length === 0) return <NoQuestions />;
  if (showResult) return <ScoreBoard score={score} total={questions.length} onReset={resetQuiz} />;

  const currentQ = questions[currentIndex];

  return (
    <div className="min-h-screen bg-[#f9fafb] text-slate-900 flex items-center justify-center p-6 lg:p-12">
      <div className="max-w-5xl w-full grid lg:grid-cols-12 gap-10 items-start">

        <MCQCard
          question={currentQ}
          currentIndex={currentIndex}
          total={questions.length}
          score={score}
          isAnswered={isAnswered}
          selectedOption={selectedOption}
          onOptionClick={handleOptionClick}
        />

        <div className="lg:col-span-4 flex flex-col gap-6">
          <ProgressSidebar questions={questions} currentIndex={currentIndex} />

          {isAnswered && (
            <ExplanationBox
              isCorrect={selectedOption === currentQ.correctOption}
              explanation={currentQ.explanation}
              onNext={handleNext}
              isLastQuestion={currentIndex + 1 === questions.length}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
