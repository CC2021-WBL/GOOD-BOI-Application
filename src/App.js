import "./App.css";
import PriSecBtn from "./components/PriSecBtn";
import HomePage from "./components/pages/HomePage";
import ClassCompetitorButton from "./components/UI/Button/ClassCompetitorButton";

function App() {
  return (
    <div className="App">
      {/* #24/UI/Primary-secondary-btns - put here for test purposes only */}
      <PriSecBtn primary text="PRIMARY" />
      <PriSecBtn secondary text="SECONDARY" />
      {/* ==== */}
      <HomePage />
      Testowe buttony /contest/1/classes
      <ClassCompetitorButton type='class' nameOfCompetitor='Good Boi'  classNumber='0' contestantsAmount='15' exercisesAmount='15' exercisesCompleted='15'/>
      <ClassCompetitorButton type='class' nameOfCompetitor='Naughty Boi' classNumber='1' contestantsAmount='30' exercisesAmount='6' exercisesCompleted='3'/>
      <ClassCompetitorButton type='class' nameOfCompetitor='Pjes' classNumber='2' contestantsAmount='1' exercisesAmount='1' exercisesCompleted='0'/>
      <ClassCompetitorButton type='class' nameOfCompetitor='Ollie'   classNumber='3' contestantsAmount='5' exercisesAmount='5' exercisesCompleted='0'/>

      Testowe buttony /contest/1/class/1
      <ClassCompetitorButton type='competitor' nameOfCompetitor='Good Boi' classNumber='' contestantsAmount='' exercisesAmount='15' exercisesCompleted='15'/>
      <ClassCompetitorButton type='competitor' nameOfCompetitor='Naughty Boi'  classNumber='' contestantsAmount='' exercisesAmount='6' exercisesCompleted='3'/>
      <ClassCompetitorButton type='competitor' nameOfCompetitor='Pjes'  classNumber='' contestantsAmount='' exercisesAmount='1' exercisesCompleted='0'/>
      <ClassCompetitorButton type='competitor' nameOfCompetitor='Ollie'  classNumber='' contestantsAmount='' exercisesAmount='5' exercisesCompleted='0'/>


    </div>
  );
}

export default App;
