import About from "./Components/About/About";
import Contacts from "./Components/Contact/Contacts";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Topbar from "./Components/Topbar/Topbar";
import "./app.scss"


function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className = "sections">
        <About/>
        <Projects/>
        <Skills/>
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
