import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import Spline from "@splinetool/react-spline";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResults,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Lumi</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResults ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Buddy.</span>
              </p>
              <p>How can i help you today?</p>
            </div>

            <div className="cards">
              <div
                onClick={() =>
                  onSent(
                    "Suggest beautiful places to see on an upcoming road trip."
                  )
                }
                className="card"
              >
                <p>Suggest beautiful places to see on an upcoming road trip.</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div
                onClick={() =>
                  onSent(
                    "Briefly summarize the concept: how to hire a candidate."
                  )
                }
                className="card"
              >
                <p>Briefly summarize the concept: how to hire a candidate.</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div
                onClick={() =>
                  onSent(
                    "Brainstorm tem bonding activities for out work retreat."
                  )
                }
                className="card"
              >
                <p>Brainstorm tem bonding activities for out work retreat.</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div
                onClick={() => onSent("Improve readibility of given code")}
                className="card"
              >
                <p>Improve readibility of given code.</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
            <div className="greet" id="note">
              <span>
                I am trying to add more functionalities in this project to make
                it more powerful.. <span>🚀</span>
              </span>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <Spline scene="https://prod.spline.design/cH1R2UisKbM839H6/scene.splinecode" />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }} />
              )}
            </div>
            
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter prompt here"
            />
            <div>
              {/* <img src={assets.gallery_icon} alt="" /> */}
              {/* <img src={assets.mic_icon} alt="" /> */}
              <img onClick={() => onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Lumi may display inaccurate info, please verify with a reliable
            source.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
