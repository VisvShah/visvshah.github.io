import React from 'react'
import './skills.scss'
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
      level: "Competent",
      skill: "Swift",
    },
    {
      id: "3",
      level: "Competent",
      skill: "JavaScript",
    },
    {
      id: "4",
      level: "Competent",
      skill: "HTML + CSS",
    },
  ];
  const libraries = [
    {
      id: "0",
      level: "Competent",
      skill: "Spritekit",
    },
    {
      id: "1",
      level: "Competent",
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
      level: "Competent",
      skill: "VS Code",
    },
    {
      id: "1",
      level: "Competent",
      skill: "XCode 12",
    },
    {
      id: "2",
      level: "Competent",
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
    else if(level === "Competent"){
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
        <div className="skillHolder env">
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
    </div>
  )
}