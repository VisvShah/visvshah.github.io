import {useState} from 'react';
import { useForm, ValidationError } from '@formspree/react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './contacts.scss';
export default function Contacts() {
  const [didSubmit, replyToSubmit] = useState(false);
  const [submitState, handleSubmit] = useForm("mvoleglo");
  const checkIfSubmitted = ()=>{
    if (submitState.succeeded) {
      replyToSubmit(true);
    }
    
  }
  return (
    <div className = 'contacts' id = 'contacts'>
        <div className="left">
          <div className="emailHolder">
            <h1>Get in Touch:</h1>
            <h2 onClick={()=>replyToSubmit(!didSubmit)}>visvshah0@gmail.com</h2>
            <div className="linkHolder">
              <div className="link1">
                <a href = 'https://github.com/VisvShah' target='_blank' rel="noreferrer noopener"> <GitHubIcon className='gitLogo'/></a>
                <p className = 'linkName'>Github</p>
              </div>   
              <div className="link2">
                <a href = 'https://www.linkedin.com/in/visvshah/' target='_blank' rel="noreferrer noopener"> <LinkedInIcon className = 'linkedinLogo'/></a>
                <p className = 'linkName'>Linkedin</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
            <h2>Send a Message!</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder = "Email" id = "email" name = "email" type ="email"/>
                <ValidationError prefix="Email" field="email" errors={submitState.errors}/>
                <textarea placeholder='Message' id = "message" name = "message" type = "text"/>
                <ValidationError prefix="Message" field="message" errors={submitState.errors}/>
                <button onClick = {checkIfSubmitted} type="submit" disabled={submitState.submitting}>Submit</button>
            </form>
            <p className={'messageResponse ' + (didSubmit && 'active')}>Thanks! I'll reply asap :)</p>
        </div>
    </div>
  )
}
