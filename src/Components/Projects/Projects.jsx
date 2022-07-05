import React, {useState}from 'react';
import './projects.scss';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import LinkIcon from '@mui/icons-material/Link';
export default function Projects() {
    const [currentProject, changeProject] = useState(0)
    const moveLeft = ()=>{
        if(currentProject>0) {
            changeProject(currentProject-1);
        }
        else {
            changeProject(2);
        }
        
    }
    const moveRight = ()=>{
        if(currentProject<2) {
            changeProject(currentProject+1);
        }
        else {
            changeProject(0);
        }
    }
    const projectData = [
        {
            id: "0",
            title: "Dragon Dragon Dash - A Mobile Game",
            link: "https://apps.apple.com/tt/app/dragon-dragon-dash/id1621746085",
            videoLink: "https://youtu.be/Kq7K9lWkZtI",
            skills: "Swift, Spritekit",
            date: "April 2022 - May 2022",
            desc: "This is a game I developed to achive my goal of publishing an app on the app store. This casual mobile game includes: a variety of levels with altering difficulty, 7 different enemy types, 4 impactful upgrade systems, 4 unique power-ups, and fun controls. This was a fun project to make and it is made up of over 1500 lines of code. I completed it with image and audio assetts and it is now as functional as any other popular game on the app store.",
        },
        
        {
            id: "1",
            title: "This Personal Portfolio",
            link: "https://apps.apple.com/tt/app/dragon-dragon-dash/id1621746085",
            videoLink: "https://youtu.be/Kq7K9lWkZtI",
            skills: "JavaScript, React.js",
            date: "June 2022",
            desc: "This personal portfolio furthered my expereince with several asppects of React.js.",
        },
        {
            id: "2",
            title: "RankR - A Full Stack Social Media Site",
            link: "https://apps.apple.com/tt/app/dragon-dragon-dash/id1621746085",
            videoLink: "https://youtu.be/Kq7K9lWkZtI",
            skills: "JavaScript, React.js, Node.js, Express.js, MongoDB.js",
            date: "July 2022 - August 2022",
            desc: "in construction...",
        },
        {
            id: "3",
            title: "RankR - A Full Stack Social Media Site",
            link: "https://apps.apple.com/tt/app/dragon-dragon-dash/id1621746085",
            videoLink: "https://youtu.be/Kq7K9lWkZtI",
            skills: "JavaScript, React.js, Node.js, Express.js, MongoDB.js",
            date: "July 2022 - August 2022",
            desc: "in construction...",
        },
    ];
  return (
    <div className = 'projects' id = 'projects'>
        <h1 className = "projectHeader">Projects</h1>
        <div className="projectSlider" style = {{transform: `translateX(-${currentProject * 100}vw)`}}>
                {projectData.map((pD) => (
                <div className="projectHolder">
                    <div className="project">
                        <div className="top">
                            <h1>{pD.title}</h1>
                        </div>
                        <div className="bottom">
                            <div className="left">
                            <a href = {pD.link} target='_blank' rel="noreferrer noopener"><LinkIcon className= "websiteLink"/></a>
                                <h2>{pD.date}</h2>
                                <h2>Skills: {pD.skills}</h2>
                                <p>{pD.desc}</p>
                                
                            </div>
                            <div className="right">
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <ArrowCircleLeftIcon onClick = {()=>moveLeft()} className='leftArrow'/>
            <ArrowCircleRightIcon onClick = {()=>moveRight()} className = 'rightArrow'/>
    </div>
  )
}
