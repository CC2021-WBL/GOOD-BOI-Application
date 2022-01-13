import "./App.css";
import PriSecBtn from "./Atoms/PriSecBtn/PriSecBtn";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      {/* #24/UI/Primary-secondary-btns - put here for test purposes only */}
      <PriSecBtn primary text="PRIMARY" />
      <PriSecBtn secondary text="SECONDARY" />
      {/* ==== */}
      <HomePage />
    </div>
  );
}

export default App;
