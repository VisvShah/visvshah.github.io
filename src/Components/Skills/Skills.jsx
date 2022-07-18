import React from 'react'
import './skills.scss'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function Skills() {
  const languages = [
    {
      id: "0",
      level: "Proficient",
      skill: "Java",
    },
    
    {
      id: "1",
      level: "Proficient",
      skill: "Python",
    },
    {
      id: "2",
      level: "Competant",
      skill: "Swift",
    },
    {
      id: "3",
      level: "Competant",
      skill: "JavaScript",
    },
    {
      id: "4",
      level: "Competant",
      skill: "HTML",
    },
    {
      id: "5",
      level: "Competant",
      skill: "CSS",
    },
  ];
  const libraries = [
    {
      id: "0",
      level: "Competant",
      skill: "Spritekit",
    },
    {
      id: "1",
      level: "Competant",
      skill: "React.js",
    },
    {
      id: "2",
      level: "Beginner",
      skill: "MongoDB.js",
    },
    {
      id: "3",
      level: "Beginner",
      skill: "Express.js",
    },
    {
      id: "4",
      level: "Beginner",
      skill: "Node.js",
    },
  ];
  const environments = [
    {
      id: "0",
      level: "Competant",
      skill: "VS Code",
    },
    {
      id: "1",
      level: "Competant",
      skill: "XCode 12",
    },
    {
      id: "2",
      level: "Competant",
      skill: "Git",
    },
    
  ];
  const getColor= (level)=>{
    if(level === "Expert"){
      return "#ff0000";
    }
    else if(level === "Advanced"){
      return "#FF652F";
    }
    else if(level === "Proficient"){
      return "#FFE400";
    }
    else if(level === "Competant"){
      return "#14A76C";
    }
    else{
      return "green";
    }
  }
  return (
    <div className = 'skills' id = 'skills'>
      <h1 className ="header">Skills</h1>
      <div className = 'allSkills'>
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
      </div>
      <div className="legend">
            <div className="level a">
              <p>Beginner</p>
            </div>
            <ArrowForwardIcon className ="arrow"/>
            <div className="level b">
              <p>Competenant</p>
            </div>
            <ArrowForwardIcon className ="arrow"/>
            <div className="level c">
              <p>Proficient</p>
            </div>
            <ArrowForwardIcon className ="arrow"/>
            <div className="level d">
              <p>Advanced</p>
            </div>
            <ArrowForwardIcon className ="arrow"/>
            <div className="level e">
              <p>Expert</p>
            </div>
      </div>
    </div>
  )
}