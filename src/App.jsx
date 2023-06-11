import About from "./Components/About/About";
import Contacts from "./Components/Contact/Contacts";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Topbar from "./Components/Topbar/Topbar";
import Menu from "./Components/Menu/Menu";
import "./app.scss"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import React, {useEffect} from "react";

function App() {
  const [isMenuOpened, setMenuOpened] = useState(false);
  useEffect(() => {
    toast.info('This website is outdated, new updates coming soon!', {
        position: "top-center",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
}, []);
  return (
    <div className="app">
       <ToastContainer
            position="top-center"
            autoClose={10000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
      <Topbar isMenuOpened = {isMenuOpened} setMenuOpened={setMenuOpened}/>
      <Menu isMenuOpened = {isMenuOpened} setMenuOpened={setMenuOpened}/>
      <div className = "sections">
        <About/>
        <Projects/>
        {/* <Skills/> */}
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
