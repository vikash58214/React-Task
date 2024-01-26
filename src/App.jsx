import "./App.css";
import React, { useState } from "react";
import Model from "./Model";

const App = () => {
  const [isShow, setIsShow] = useState(false);
  const [offerMsg, setOffermsg] = useState(false);
  const handleAccept = () => {
    setIsShow(false);
    setOffermsg(true);
  };
  const handleShow = () => {
    setIsShow(true);
  };
  const handleclose = () => {
    setIsShow(false);
  };
  return (
    <>
      <div className="show-offer">
        {offerMsg ? (
          <p style={{ fontSize: 50 }}>Accepted</p>
        ) : (
          <button className="offer-button" onClick={handleShow}>
            Show Offer
          </button>
        )}
      </div>
      {isShow && (
        <Model handleClose={handleclose} handleAccept={handleAccept} />
      )}
    </>
  );
};

export default App;
