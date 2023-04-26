import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../Context";
import { useReducer } from "react";
import { useState } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "NEXT":
      return { ...state, index: state.index + 1 };

    default:
      throw new Error();
  }
}
function Questions() {
  const [stranka, setStranka] = useState(0);
  const value = useContext(Context);
  const [state, dispatch] = useReducer(reducer, { index: 0 });
  const handleClick = () => {
    dispatch({ type: "NEXT" });
  };

  const changeStr = () => {
    setStranka((stranka) => stranka + 1);
  };

  return (
    <div className="mapd">
      <p>
        Odpovedel jste spravne na {stranka}/{value.arrayForQuiz.length}{" "}
      </p>
      {value.arrayForQuiz.map((elem, index) => {
        if (state.index === index) {
          return (
            <div key={elem.id} className="card mb-3" style={{ maxWidth: 540 }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={elem.img}
                    className="img-fluid rounded-start"
                    alt="..."
                    style={{ height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{elem.text}</h5>
                    <p></p>
                    <p className="card-text"> </p>
                    {state.index <= value.arrayForQuiz.length - 1 ? (
                      <>
                        <button
                          onClick={() => {
                            handleClick();
                            value.toRightAnswer(elem.answer);
                            changeStr();
                          }}
                        >
                          {elem.nazev}
                        </button>
                        <p> </p>
                        <button
                          onClick={() => {
                            handleClick();
                          }}
                        >
                          {elem.nazevNext}
                        </button>
                      </>
                    ) : (
                      <p> </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          <p> </p>;
        }
      })}
      {state.index === value.arrayForQuiz.length && (
        <div className="center">
          {value.counterRight < 1 ? (
            <p className="center"> Nemate za sebou zadnou otazku </p>
          ) : (
            <p className="center">
              {" "}
              Odpovedeli jste spravne na {value.counterRight} otazek!{" "}
            </p>
          )}
          <button className="center" onClick={() => value.clearResults()}>
            <Link to="/">Na hlavni stranku!</Link>{" "}
          </button>{" "}
        </div>
      )}
    </div>
  );
}

export default Questions;
