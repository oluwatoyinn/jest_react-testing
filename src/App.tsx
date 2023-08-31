import "./App.css";
import Application from "./components/application/application";
import Counter from "./components/counter/counter";
import Skills from "./components/skills/skills";
import { AppProviders } from "./providers/app-providers";
import {MuiMode} from './components/mui/mui-mode'

const skills = ["CSS", "HTML", "JAVASCRIPT"];

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
        <Application />
        <Skills skills={skills} />
        <Counter />
      </div>
    </AppProviders>
  );
}

export default App;
