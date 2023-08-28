import "./App.css";
import Application from "./components/application/application";
import Counter from "./components/counter/counter";
import Skills from "./components/skills/skills";

const skills = ["CSS", "HTML", "JAVASCRIPT"];

function App() {
  return (
    <div className="App">
      <Application />
      <Skills skills={skills} />
      <Counter />
    </div>
  );
}

export default App;
