import React, {Component} from 'react';

import ReactDOM from 'react-dom';

console.log("app run")
class App extends Component {
  render () {
    console.log("RUN")
    return (
      <div>
        Hello World
      </div>
    );
  }
};

ReactDOM.render(
  <App />,
  document.querySelector('#app')
);
