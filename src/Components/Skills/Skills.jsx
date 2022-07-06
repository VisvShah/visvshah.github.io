import React from 'react'
import './skills.scss'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function Skills() {
  const languages = [
    {
      id: "0",
      level: "Advanced",
      skill: "Java",
    },
    {
      id: "1",
      level: "Advanced",
      skill: "Swift",
    },
    {
      id: "2",
      level: "Advanced",
      skill: "Python",
    },
    {
      id: "3",
      level: "Intermediate",
      skill: "JavaScript",
    },
    {
      id: "4",
      level: "Intermediate",
      skill: "HTML",
    },
    {
      id: "5",
      level: "Intermediate",
      skill: "CSS",
    },
  ];
  const libraries = [
    {
      id: "0",
      level: "Intermediate",
      skill: "Spritekit",
    },
    {
      id: "1",
      level: "Intermediate",
      skill: "React.js",
    },
    {
      id: "2",
      level: "Starter",
      skill: "MongoDB.js",
    },
    {
      id: "3",
      level: "Starter",
      skill: "Express.js",
    },
    {
      id: "4",
      level: "Starter",
      skill: "Node.js",
    },
  ];
  const environments = [
    {
      id: "0",
      level: "Intermediate",
      skill: "Git",
    },
    {
      id: "1",
      level: "Intermediate",
      skill: "VS Code",
    },
    {
      id: "2",
      level: "Intermediate",
      skill: "XCode 12",
    },
  ];
  const getColor= (level)=>{
    if(level === "Expert"){
      return "#8B0000";
    }
    else if(level === "Pro"){
      return "#ff0000";
    }
    else if(level === "Advanced"){
      return "#FF652F";
    }
    else if(level === "Intermediate"){
      return "#FFE400";
    }
    else if(level === "Starter"){
      return "#14A76C";
    }
    else{
      return "green";
    }
  }
  return (
    <div className = 'skills' id = 'skills'>
      <h1 className ="Header">Skills</h1>
      <div className="skillHolder">
        <h2 className = "sectionHeader">Languages: </h2>
          {languages.map((s) => (
            <div className="skill" key = {s.id}>
                <div className="information">
                  <h3 className = "skillName">{s.skill}</h3>
                  <p className = "skillLevel">Level: <span style={{color: `${getColor(s.level)}`}}>{s.level}</span></p>
                </div>
            </div>
          ))}
      </div>
      <div className="skillHolder">
        <h2 className = "sectionHeader">Libraries: </h2>
          {libraries.map((l) => (
            <div className="skill" key = {l.id}>
                <div className="information">
                  <h3 className = "skillName">{l.skill}</h3>
                  <p className = "skillLevel">Level: <span style={{color: `${getColor(l.level)}`}}>{l.level}</span></p>
                </div>
            </div>
          ))}
      </div>
      <div className="skillHolder">
        <h2 className = "sectionHeader">Environments: </h2>
          {environments.map((e) => (
            <div className="skill" key = {e.id}>
                <div className="information">
                  <h3 className = "skillName">{e.skill}</h3>
                  <p className = "skillLevel">Level: <span style={{color: `${getColor(e.level)}`}}>{e.level}</span></p>
                </div>
            </div>
          ))}
      </div>
      <div className="legend">
            <div className="level intro">
              <p>Introductory</p>
            </div>
            <ArrowForwardIcon className ="arrow"/>
            <div className="level starter">
              <p>Starter</p>
            </div>
            <ArrowForwardIcon className ="arrow"/>
            <div className="level intermediate">
              <p>Intermediate</p>
            </div>
            <ArrowForwardIcon className ="arrow"/>
            <div className="level advanced">
              <p>Advanced</p>
            </div>
            <ArrowForwardIcon className ="arrow"/>
            <div className="level professional">
              <p>Professional</p>
            </div>
            <ArrowForwardIcon className ="arrow"/>
            <div className="level expert">
              <p>Expert</p>
            </div>
      </div>
    </div>
  )
}