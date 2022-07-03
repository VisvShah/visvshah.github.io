import About from "./Components/About/About";
import Contacts from "./Components/Contact/Contacts";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Topbar from "./Components/Topbar/Topbar";
import Menu from "./Components/Menu/Menu";
import "./app.scss"
import { useState } from "react";

function App() {
  const [isMenuOpened, setMenuOpened] = useState(false);
  return (
    <div className="app">
      <Topbar isMenuOpened = {isMenuOpened} setMenuOpened={setMenuOpened}/>
      <Menu isMenuOpened = {isMenuOpened} setMenuOpened={setMenuOpened}/>
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
