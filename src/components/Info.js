import photo from "./images/profile-photo.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'



export default function Info() {
  return (
    <div className="info">
      <img className="profile-photo" src={photo} alt="a smiling web developer"></img>
      <h3>Luy Vannda</h3>
      <p className="job-title">Frontend Developer</p>
      <p><a href="https://github.com/luyvannda" rel="noreferrer" target="_blank">github.com/luyvannda</a></p>

      <div className="contact">

        <button type="button" className="email-btn">
          <a href="mailto:luyvannda@gmail.com" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} className="email-icon" />Email</a>
        </button>

        <button type="button" className="linkedin-btn">
          <a href="https://www.linkedin.com/in/luyvannda/" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />Linkedin
          </a>
        </button>

      </div>
    </div>
  )
}