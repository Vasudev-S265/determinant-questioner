import { useState } from "react";
import YesPage from "./YesPage";
import "./App.css";

function App(){
  const[answer, setAnswer]=useState(null);
  const[noCount, setNoCount]=useState(0);
  const[noExploding, setNoExploding]=useState(false);
  const[cryingGif, setCryingGif]=useState(false);
  const[questiongif, setQuestionGif]=useState(true);
  const[smirkgif, setSmirkgif]=useState(false);

  function handleNo(){
    const newCount=noCount+1
    setNoCount(newCount);
    setCryingGif(true);
    setQuestionGif(false);

    if (newCount>=10){
      setNoExploding(true);
      setSmirkgif(true);
      setCryingGif(false);
      setTimeout(()=>{
        setNoExploding(false);
      }, 1300);
    }
  }
    if (answer==="yes"){
      return(
        <YesPage 
        onBack={()=> {setAnswer(null);
        setCryingGif(false);
        setNoCount(0);
        setNoExploding(false);
        setQuestionGif(true)
        setSmirkgif(false);}}
        />
      );
      }


  return(
    <div className="app-container">
      <div className="card">
        {cryingGif &&(
          <div className="gif-overlay">
            <img src="/cat-cry.gif" alt="NOOO"/>
          </div>
        )}
        {questiongif &&(
        <div className="gif-overlay">
        <img src="cat-rose.gif" alt="Rose"/>
        </div>
        )}
        {smirkgif &&(
          <div className="gif-overlay">
            <img src="cat-smirk.png" alt="smirk"/>
          </div>
        )}
        <p className="question">Do you Like me?? 🥺</p>
        <div className="button-row">
          <button className="pixel-btn" onClick={()=> setAnswer("yes")}>
            <img src="/yes.png" alt="Yes!!!"/>
          </button>
            {noCount <10 &&(
              <button className="pixel-btn" onClick={handleNo}>
                <img src="/no.png" alt="No!!!"/>
              </button>
            )}

            {noExploding &&(
              <img
              src="/explode.gif"
              alt="boom!"
              className="explosion-gif"
              />
            )}
        </div>
        {noCount>0 && noCount<10 &&(
          <p className="nooo-text">NOOOO!!!!😭 Please click yes...</p>
        )}

        {noCount>=10 &&(
          <>
          <p className="nooo-text">Now you have to click yes!</p>
          </>
        )}

      </div>
    </div>

  );

}

export default App;
