import "./App.css";
import PriSecBtn from "./components/PriSecBtn";
import HomePage from "./components/pages/HomePage";
import ClassCompetitorButton from "./components/UI/Button/ClassCompetitorButton";
import classes from "./dummy-data/test-data-classes";
import competitors from "./dummy-data/test-data-competitor";

function App() {
    console.log(classes)
  return (
    <div className="App">
      {/* #24/UI/Primary-secondary-btns - put here for test purposes only */}
      <PriSecBtn primary text="PRIMARY" />
      <PriSecBtn secondary text="SECONDARY" />
      {/* ==== */}
      <HomePage />

      Testowe buttony "Lista klas"

      {classes.map(e=>
        <ClassCompetitorButton
          type='class'
          key={e.id}
          classNumber={e.classNumber}
          contestantsAmount={e.contestantsAmount}
          classCompleted={e.classCompleted}
        />)}

      Testowe buttony "Lista uczestników"

      {competitors.map((e, index) =>
        <ClassCompetitorButton
          type='competitor'
          key={e.id}
          no={index+1}
          nameOfCompetitor={e.nameOfCompetitor}
          exercisesCompleted={e.exercisesCompleted}
          exercisesAmount={e.exercisesAmount}
        />)};

    </div>
  );
}

export default App;
