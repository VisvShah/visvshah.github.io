import React, {useState}from 'react';
import './projects.scss';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import PreviewIcon from '@mui/icons-material/Preview';
import GitHubIcon from '@mui/icons-material/GitHub';
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
            title: "Dragon Dragon Dash",
            link: "https://apps.apple.com/tt/app/dragon-dragon-dash/id1621746085",
            videoLink: "https://www.youtube.com/embed/Kq7K9lWkZtI",
            gitLink: "https://github.com/VisvShah/Dragon-Dragon-Dash-Game",
            skills: "Swift, Spritekit",
            date: "April 2022 - May 2022",
            desc: "An original game idea I developed and published on the app store. Dragon Dragon Dash is a fun, infinite runner with varying difficulty, impactful upgrades, distinct powerups, and smooth gameplay.",
        },
        
        {
            id: "1",
            title: "Personal Portfolio",
            link: "https://apps.apple.com/tt/app/dragon-dragon-dash/id1621746085",
            videoLink: "https://youtu.be/Kq7K9lWkZtI",
            gitLink: "https://github.com/VisvShah/Dragon-Dragon-Dash-Game",
            skills: "React.js",
            date: "June 2022",
            desc: "This personal portfolio furthered my expereince with several asppects of React.js.",
        },
        {
            id: "2",
            title: "RankR",
            link: "https://apps.apple.com/tt/app/dragon-dragon-dash/id1621746085",
            videoLink: "https://youtu.be/Kq7K9lWkZtI",
            gitLink: "https://github.com/VisvShah/Dragon-Dragon-Dash-Game",
            skills: "MERN.js stack",
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
                            <h2>{pD.date}</h2>
                        </div>
                        <div className="middle">
                            <div className="left">
                                <div className="textHolder">
                                    <h2>Used: {pD.skills}</h2>
                                    <p>{pD.desc}</p>
                                </div>
                            </div>
                            <div className="right">
                                <iframe width="350" height="200" src={pD.videoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="link1">
                                <a href = {pD.link} target='_blank' rel="noreferrer noopener"><PreviewIcon className= "websiteLink"/></a>
                                <p className = 'linkName'>View</p>
                            </div>   
                            <div className="link2">
                                <a href = {pD.gitLink} target='_blank' rel="noreferrer noopener"><GitHubIcon className= "websiteLink"/></a>
                                <p className = 'linkName'>Github</p>
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
