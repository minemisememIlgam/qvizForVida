import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import QuizResultsStat from "./components/quizResultsStat/QuizResultsStat";
import QuizTest from "./components/quizTest/QuizTest";
import Context from "./components/Context";
import Questions from "./components/questions/Questions";
import { useReducer } from "react";

function App() {
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const arrayForQuiz = [
    {
      id: 1,
      img: "/img/hlinik.jpg",
      nazev: "Hilnik",
      nazevNext: "Titan",
      text: "Znate toto?",
      answer: "Hilnik",
    },
    {
      id: 2,
      img: "/img/med.jpg",
      nazev: "Měď",
      nazevNext: "Olovo",
      text: "Takze, je to?",
      answer: "Měď",
    },
    {
      id: 3,
      img: "/img/nikl.jpg",
      nazev: "Nikl",
      nazevNext: "Kryptonit",
      text: "Co to je?",
      answer: "Nikl",
    },
    {
      id: 4,
      img: "/img/olovo.jpg",
      nazev: "Olovo",
      nazevNext: "Železo",
      text: "Mozna jste uz nekde videl(a) tohle?",
      answer: "Olovo",
    },
    {
      id: 5,
      img: "/img/titan.jpg",
      nazev: "Titan",
      nazevNext: "Nikl",
      text: "Co je na obrazku?",
      answer: "Titan",
    },
    {
      id: 6,
      img: "/img/zelezo.jpg",
      nazev: "Železo",
      nazevNext: "Hilnik",
      text: "Tohle je?",
      answer: "Zelezo",
    },
  ];

  function reducer(state, action) {
    switch (action.type) {
      case "NEXT_ANSWER":
        return { ...state, counterRight: state.counterRight + 1 };
      case "CLEAR_COUNT":
        return { ...state, counterRight: state.counterRight === 0 };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, { counterRight: 0 });
  const toRightAnswer = (answerByUser) => {
    for (let i = 0; i < arrayForQuiz.length; i++) {
      if (answerByUser === arrayForQuiz[i].answer) {
        dispatch({ type: "NEXT_ANSWER" });
        setIsAnswerCorrect(true);
      }
    }
  };

  const clearResults = () => {
    dispatch({ type: "CLEAR_COUNT" });
  };

  const [startTest, setStartTest] = useState(false);

  const [showResults, setShowResults] = useState(false);

  const wasStarted = () => {
    setStartTest(true);
  };

  const wasClickedZpet = () => {
    setStartTest(false);
  };

  const wasClickedZpetOnResultPage = () => {
    setShowResults(false);
  };

  const wannaShowResults = () => {
    setShowResults(true);
  };

  const value = {
    wasStarted,
    startTest,
    isAnswerCorrect,
    wannaShowResults,
    showResults,
    wasClickedZpet,
    wasClickedZpetOnResultPage,
    QuizTest,
    arrayForQuiz,
    toRightAnswer,
    counterRight: state.counterRight,
    reducer,
    clearResults,
  };

  return (
    <Context.Provider value={value}>
      <div className="container">
        <Routes>
          <Route path="/" element={<QuizTest />} />
          <Route path="quiz" element={<QuizResultsStat />} />
          <Route path="question" element={<Questions />} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
