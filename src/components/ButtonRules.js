import { useState } from "react";

const ButtonRules = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const showRules = () => {
    setPopupVisible(true);
  };

  const closeRules = () => {
    setPopupVisible(false);
  };

  return (
    <>
      <button className="btn-rules fs-200 fw-semi-bold" onClick={showRules}>
        RULES
      </button>
      <div className={`popup-rules ${isPopupVisible ? "visible" : ""}`}>
        <div className="popup-content">
          <div className="popup-header">
            <div className="popup-title fs-400 text-neutral-100">RULES</div>
            <button className="btn-close" onClick={closeRules}>
              <img src="images/icon-close.svg" alt="icon-close" />
            </button>
          </div>
          <div className="image-rules">
            <img src="images/image-rules.svg" alt="rules" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonRules;
