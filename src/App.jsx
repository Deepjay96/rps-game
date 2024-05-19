import React, { useState, useEffect, useCallback } from "react";
import "./App.css";

function App() {
  const [userchoice, setUserchoice] = useState("rock");

  const [computerchoice, setComputerchoice] = useState("rock");

  const [finalresult, setFinalresult] = useState("Let's see who wins");

  const [turn, setTurn] = useState("No one got a point");

  const [key, setKey] = useState(true);
  const [restart, setRestart] = useState(false);

  let img_arr = ["rock", "paper", "scissors"];

  let [userPoint, setUserPoint] = useState(0);

  let [computerPoint, setComputerPoint] = useState(0);

  let [val, setVal] = useState(0);

  let computerimg_name;

  const reset = () => {
    window.location.reload();
  };

  function rps() {
    if (val >= 1) {
      computerimg_name = img_arr[Math.round(Math.random() * 2)];

      setComputerchoice(computerimg_name);

      let comboMoves = userchoice + computerimg_name;

      if (
        comboMoves === "scissorspaper" ||
        comboMoves === "rockscissors" ||
        comboMoves === "paperrock"
      ) {
        // console.log(userPoint+1)
        setUserPoint(userPoint + 1);
        if (userPoint + 1 == 5) {
          setFinalresult("User's Wins");
          setKey(false);
          setRestart(true);
        }
        setTurn("User got the point");
      } else if (
        comboMoves === "paperscissors" ||
        comboMoves === "scissorsrock" ||
        comboMoves === "rockpaper"
      ) {
        //  console.log(computerPoint+1)
        setComputerPoint(computerPoint + 1);
        if (computerPoint + 1 == 5) {
          setFinalresult("Computer's Wins");
          setKey(false);
          setRestart(true);
        }
        console.log("computerPoint " + computerPoint);
        setTurn("Computer got the point");
      } else if (
        comboMoves === "rockrock" ||
        comboMoves === "paperpaper" ||
        comboMoves === "scissorsscissors"
      ) {
        setTurn("No one get's the point");
      }
    }
  }

  useEffect(() => {
    rps();
  }, [userchoice, val]);

  return (
    <>
      <h1 className="text-center text-4xl mt-4 font-bold">
        
        Rock Paper Scissors
      </h1>
      <div className="bg-black-900 flex justify-around mt-14">
        <p>
          
          <span className="text-2xl font-bold"> User Points : </span>
          <span className="text-2xl font-bold"> {userPoint} </span>
        </p>
        <p>
          
          <span className="text-2xl font-bold"> Computer Points : </span>
          <span className="text-2xl font-bold"> {computerPoint} </span>
        </p>
      </div>

      <div className="mt-8">
        <div className="flex justify-center">
          <img
            src={`public/${userchoice}.png`}
            className="user-hand"
            width={100}
            height={100}
            alt=""
          />
          <img
          src={`public/${computerchoice}.png`}
            width={100}
            height={100}
            alt=""
          />
        </div>

        <div className="flex justify-center">
          {key && (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  m-4"
              onClick={() => {
                setUserchoice("rock");
                setVal(val + 1);
              }}
            >
              rock
            </button>
          )}

          {key && (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
              onClick={() => {
                setUserchoice("paper");
                setVal(val + 1);
              }}
            >
              paper
            </button>
          )}

          {key && (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
              onClick={() => {
                setUserchoice("scissors");
                setVal(val + 1);
              }}
            >
              scissors
            </button>
          )}
        </div>
      </div>

      <div className="flex items-center justify-center flex-col">
        <p className="m-2">
          
          <span className="text-2xl font-bold"> Turn Result: </span>
          <span className="text-2xl font-bold"> {turn} </span>
        </p>
        <p className="m-2">
          <span className="text-2xl font-bold"> Final result: </span>
          <span className="text-2xl font-bold"> {finalresult} </span>
        </p>
      </div>

      <div className="flex items-center justify-center m-8">
        {restart && (
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded "
            onClick={reset}
          >
            Restart Game
          </button>
        )}
      </div>
    </>
  );
}

export default App;

// backdrop-blur-lg bg-opacity-30
