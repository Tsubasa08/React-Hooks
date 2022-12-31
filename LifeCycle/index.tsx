import React = require('react');
import Counter from './class';
import UseState from './hooks';

export const LifeCycle = () => {
  return (
    <React.Fragment>
      <UseState />
      <Counter />
    </React.Fragment>
  );
};
