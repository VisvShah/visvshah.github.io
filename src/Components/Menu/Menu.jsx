import React from 'react'
import './menu.scss'
export default function Menu({isMenuOpened, setMenuOpened}) {
  return (
    <div className = {'menu ' + (isMenuOpened && 'active')} onClick={()=>setMenuOpened(!isMenuOpened)}>
        <ul>
            <li onClick={()=>setMenuOpened(!isMenuOpened)}>
                <a href = '#about'>Home</a>
            </li>
            <li onClick={()=>setMenuOpened(!isMenuOpened)}>
                <a href = '#projects'>Projects</a>
            </li>
            {/* <li onClick={()=>setMenuOpened(!isMenuOpened)}>
                <a href = '#skills'>Skills</a>
            </li> */}
            <li onClick={()=>setMenuOpened(!isMenuOpened)}>
                <a href = '#contacts'>Contacts</a>
            </li>
        </ul>
    </div>
  )
}
