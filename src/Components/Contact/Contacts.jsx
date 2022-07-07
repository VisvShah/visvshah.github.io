import React from 'react';
import './contacts.scss';
export default function Contacts() {
  const sendEmail = (e) =>{
    e.preventDefault();
  }
  return (
    <div className = 'contacts' id = 'contacts'>
        <div className="left">
          
          <div className="emailHolder">
            <h1>Get in Touch:</h1>
            <h2>visvshah0@gmail.com</h2>
          </div>
          
        </div>
        <div className="right">
            <h2>or.. Send a Message!</h2>
            <form onSubmit={sendEmail}>
                <input placeholder = "Email" type ="text"/>
                <textarea placeholder='Message' type = "text"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
  )
}
