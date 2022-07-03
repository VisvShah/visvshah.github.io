import React from 'react'
import './topbar.scss'
import gitLogo from '../../assets/githubLogo.png'
import linkedinLogo from '../../assets/linkedinLogo.png'
export default function TopBar({isMenuOpened, setMenuOpened}) {
  return (
    <div className = {'topbar ' + (isMenuOpened && 'active')}>
        <div className = 'header'>
            <div className="leftSide">
                <a href = '#about' className = 'logo'>visvshah.com</a>
                <div className="link1">
                    <a href = 'https://github.com/VisvShah' target='_blank' rel="noreferrer noopener"> <img src = {gitLogo} alt = 'Github Logo' className = 'gitLogo'></img></a>
                    <p className = 'linkName'>Github</p>
                </div>   
                <div className="link2">
                    <a href = 'https://www.linkedin.com/in/visvshah/' target='_blank' rel="noreferrer noopener"> <img src = {linkedinLogo} alt = 'Linkedin Logo' className = 'linkedinLogo'></img></a>
                    <p className = 'linkName'>Linkedin</p>
                </div>
            </div>
            <div className="rightSide">
                <div className="sideMenu" onClick = {()=>setMenuOpened(!isMenuOpened)}>
                    <span className = "line"></span>
                    <span className = "line"></span>
                    <span className = "line"></span>
                </div>
            </div>
        </div>
    </div>
  )
}
