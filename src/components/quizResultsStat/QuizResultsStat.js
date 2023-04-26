import { useContext } from "react";
import Context from "../Context";

import { Link } from "react-router-dom";
function QuizResultsStat() {
  return (
    <div>
      <p>
        Dobrý den, toto je můj testovací úkol pro VIDA. Tato práce využívá HTML,
        CSS, JavaScript, React, useState, useReducer, Context, React Router a
        další technologie. Práce by se dala udělat složitější a pestřejší pomocí
        REDUX, ale pro tak malou úlohu mi i použití reduceru přijde zbytečné,
        mohlo by stačit obyčejné useState.
      </p>
      <button>
        <Link to="/">Zpet</Link>
      </button>
    </div>
  );
}

export default QuizResultsStat;
