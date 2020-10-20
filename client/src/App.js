import React from 'react';
import Baner from './components/Baner';
import QuizInfo from './../src/components/QuizInfo';
import { Route, Switch } from 'react-router-dom';
import QuizSelection from './components/QuizSelection';

const App = () => {
  return (
    <div className='l-grid'>
      <Switch>
        <Route exact path='/' component={Baner} />
        <Route exact path='/quiz-info' component={QuizInfo} />
        <Route exact path='/select-quiz' component={QuizSelection} />
      </Switch>
    </div>
  );
};

export default App;
