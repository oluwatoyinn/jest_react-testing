import "./App.css";
import Application from "./components/application/application";
import Skills from "./components/skills/skills";

const skills = ["CSS", "HTML", "JAVASCRIPT"];

function App() {
  return (
    <div className="App">
      <Application />
      <Skills skills={skills} />
    </div>
  );
}

export default App;
