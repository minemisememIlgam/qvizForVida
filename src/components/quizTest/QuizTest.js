import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "../Context";

function QuizTest() {
  const value = useContext(Context);

  return (
    <div>
      <h1>Dobry den! </h1>
      <h1>Chcete zacit QVIZ?</h1>

      {value.startTest ? null : (
        <>
          {" "}
          <button>
            <Link to="/question">Jdu na to! </Link>
          </button>
          <p></p>
          <button>
            <Link to="/quiz">Mala informace o tomto projektu</Link>
          </button>{" "}
        </>
      )}
    </div>
  );
}

export default QuizTest;
