import React from "react";

const Model = ({ handleClose, handleAccept }) => {
  const handleOutsideClose = (e) => {
    if (e.target.className == "model") {
      handleClose();
    }
  };
  return (
    <>
      <div className="model" onClick={handleOutsideClose}>
        <div className="model-container">
          <button className="close-button" onClick={handleClose}>
            X
          </button>
          <div className="container">Click below button to accept offer</div>
          <button className="accept-button" onClick={handleAccept}>
            Accept
          </button>
        </div>
      </div>
    </>
  );
};

export default Model;
