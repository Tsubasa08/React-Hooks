import { useState, useEffect } from 'react';
import React = require('react');

export const CustomHook = () => {
  return (
    <React.Fragment>
      <RedComponent />
      <WhiteComponent />
      <BlueComponent />
    </React.Fragment>
  );
};

const RedComponent = () => {
  const isPrmaryColors = useCheckPrmaryColors('red');
  return <div>{`isPrmaryColors：${isPrmaryColors}`}</div>;
};

const WhiteComponent = () => {
  const isPrmaryColors = useCheckPrmaryColors('white');
  return <div>{`isPrmaryColors：${isPrmaryColors}`}</div>;
};

const BlueComponent = () => {
  const [color, setColor] = useState(null);
  const isPrmaryColors = useCheckPrmaryColors(color);
  const handleOnClick = (color: string) => {
    setColor(color);
  };
  return (
    <React.Fragment>
      <button onClick={() => handleOnClick('blue')}>blue</button>
      <div>{`isPrmaryColors：${isPrmaryColors}`}</div>
    </React.Fragment>
  );
};

function useCheckPrmaryColors(color: string) {
  const ThreePrimaryColors = ['red', 'blue', 'green'];
  const [isPrmaryColors, setIsPrmaryColors] = useState(null);

  useEffect(() => {
    setIsPrmaryColors(ThreePrimaryColors.includes(color));
  });

  return isPrmaryColors;
}
