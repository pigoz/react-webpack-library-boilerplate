import React from 'react';
import { add } from 'library-boilerplate';

/* eslint-disable react/prefer-stateless-function */
/* need a full blown component for HMR to work */
export default class App extends React.Component {
  render() {
    return (
      <p>
        2 + 2 = {add(2, 2)}
      </p>
    );
  }
}
