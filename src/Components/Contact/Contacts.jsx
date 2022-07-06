import React from 'react';
import './contacts.scss';
export default function Contacts() {
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
  return (
    <div className = 'contacts' id = 'contacts'>
        <div className="left">
          {environments.map((e) => (
              <div className="skill" key = {e.id}>
                  hello
              </div>
            ))}
        </div>
        <div className="right">

        </div>
    </div>
  )
}
