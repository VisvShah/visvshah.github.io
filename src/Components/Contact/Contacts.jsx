
import { useForm, ValidationError } from '@formspree/react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './contacts.scss';
export default function Contacts() {
  const [submitState, handleSubmit] = useForm("mvoleglo");
  
  return (
    <div className = 'contacts' id = 'contacts'>
        <div className="left">
          <div className="emailHolder">
            <h1>Get in Touch:</h1>
            <h2>visvshah0@gmail.com</h2>
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
        <div className='right'>
            <div className={"preResponse " + (submitState.succeeded && "active")}>
              <h2 className='rightHeader'>Send a Message!</h2>
              <form className='contactForm' onSubmit={handleSubmit}>
                  <input placeholder = "Email" id = "email" name = "email" type ="email"/>
                  <ValidationError prefix="Email" field="email" errors={submitState.errors}/>
                  <textarea placeholder='Message' id = "message" name = "message" type = "text"/>
                  <ValidationError prefix="Message" field="message" errors={submitState.errors}/>
                  <button type="submit" disabled={submitState.submitting}>Submit</button>
              </form>
            </div>
            
            <div className={'postResponse ' + (submitState.succeeded && 'active')}>
              <p>Thanks! I'll reply asap :)</p>
            </div>
        </div>
    </div>
  )
}
