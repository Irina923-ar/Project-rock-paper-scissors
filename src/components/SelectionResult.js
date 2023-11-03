import React from 'react';


const SelectionResult = ({ selection, player }) => {
  const className = `result-selection-${player}`;
  
  const wrapperDiv = (
    <div className={`emoji-${selection.name}-div`}>
      <div className={`emoji ${selection.name}`}>
        {selection.emoji}
      </div>
    </div>
  );

  return (
    <div className={className}>
      {wrapperDiv}
    </div>
  );
};

export default SelectionResult;