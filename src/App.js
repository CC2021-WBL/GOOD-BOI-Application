import React from 'react';
import './App.css';
import PriSecBtn from './components/PriSecBtn';
import HomePage from './components/pages/HomePage';
import ClassCompetitorButton from './components/UI/Button/ClassCompetitorButton';
import classes from './dummy-data/test-data-classes';
import competitors from './dummy-data/test-data-competitor';

function App() {
  return (
    <div className="App">
      {/* #24/UI/Primary-secondary-btns - put here for test purposes only */}
      <PriSecBtn primary text="PRIMARY" />
      <PriSecBtn secondary text="SECONDARY" />
      {/* ==== */}
      <HomePage />
      {/*  #016/UI/class-competitor-button - put here for test purposes only */}
      Testowe buttony &quot;Lista klas&quot;
      {classes.map((e) => (
        <ClassCompetitorButton
          type="class"
          key={e.id}
          classNumber={e.classNumber}
          contestantsAmount={e.contestantsAmount}
          classCompleted={e.classCompleted}
        />
      ))}
      Testowe buttony &quot;Lista uczestników&quot;
      {competitors.map((e, index) => (
        <ClassCompetitorButton
          type="competitor"
          key={e.id}
          no={index + 1}
          nameOfCompetitor={e.nameOfCompetitor}
          exercisesCompleted={e.exercisesCompleted}
          exercisesAmount={e.exercisesAmount}
        />
      ))}
    </div>
  );
}

export default App;
