import React from 'react'
import './topbar.scss'
import gitLogo from '../../assets/githubLogo.png'
import linkedinLogo from '../../assets/linkedinLogo.png'
export default function TopBar() {
  return (
    <div className = 'topbar active'>
        <div className = 'header'>
            <div className="leftSide">
                <a href = '#about' className = 'logo'>visvshah.com</a>
                <a href = 'https://github.com/VisvShah' target='_blank' rel="noreferrer noopener"> <img src = {gitLogo} alt = 'Github Logo' className = 'gitLogo'></img></a>
                <a href = 'https://www.linkedin.com/in/visvshah/' target='_blank' rel="noreferrer noopener"> <img src = {linkedinLogo} alt = 'Linkedin Logo' className = 'linkedinLogo'></img></a>
            </div>
            <div className="rightSide">
                <div className="menu">
                    <span className = "line"></span>
                    <span className = "line"></span>
                    <span className = "line"></span>
                </div>
            </div>
        </div>
    </div>
  )
}
