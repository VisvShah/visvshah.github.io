import React, {useState}from 'react';
import './projects.scss';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import PreviewIcon from '@mui/icons-material/Preview';
import GitHubIcon from '@mui/icons-material/GitHub';
import Trailer3 from '../../assets/DDDTrailer.mp4';
import Trailer2 from '../../assets/visvTrailer.mp4';
import Trailer1 from '../../assets/rankRtrailer.mp4';
export default function Projects() {
    const [currentProject, changeProject] = useState(0);
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
            title: "RankR",
            link: "https://apps.apple.com/tt/app/dragon-dragon-dash/id1621746085",
            videoLink: Trailer1,
            gitLink: "https://github.com/VisvShah/Dragon-Dragon-Dash-Game",
            skills: "MERN.js stack",
            date: "July 2022 - August 2022",
            desc: "Fullstack JS project featuring an authentication process, all CRUD actions, and a search functionallity. View github for more information.",
        },
        {
            id: "1",
            title: "Personal Portfolio",
            link: "#about",
            videoLink: Trailer2,
            gitLink: "https://github.com/VisvShah/Dragon-Dragon-Dash-Game",
            skills: "React.js",
            date: "June 2022",
            desc: "This website :)",
        },
        {
            id: "2",
            title: "Dragon Dragon Dash",
            link: "https://apps.apple.com/tt/app/dragon-dragon-dash/id1621746085",
            videoLink: Trailer3,
            gitLink: "https://github.com/VisvShah/Dragon-Dragon-Dash-Game",
            skills: "Swift, Spritekit",
            date: "April 2022 - May 2022",
            desc: "An original game idea I developed and published on the app store.",
        },
    ];
  return (
    <div className = 'projects' id = 'projects'>
        <h1 className = "projectHeader">Projects</h1>
        <div className="projectSlider" style = {{transform: `translateX(-${currentProject * 100}vw)`}}>
                {projectData.map((pD) => (
                <div className="projectHolder" key = {pD.id}>
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
                                <video src = {pD.videoLink} type="video/mp4" width="280" height="160" controls controlsList="nomute noremoteplayback nodownload noplaybackrate foobar">
                                </video>
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
