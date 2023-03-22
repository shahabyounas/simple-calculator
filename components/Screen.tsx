import React from 'react';

function Screen(props) {
  const { mathStr = null, result = null } = props;
  return (
    <div>
      <div className="screen-str"> {mathStr} </div>
      <div className="screen-result">{result}</div>
    </div>
  );
}

export default Screen;
