import React from 'react';
import { render } from 'react-dom';
import Todo from './components/todo';

const App = () => (
  <h1>
    Custom react starter! <Todo />{' '}
  </h1>
);

render(<App />, document.getElementById('app'));
