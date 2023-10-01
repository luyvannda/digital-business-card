import photo from "./images/profile-photo.jpg"

export default function Info() {
  return (
    <div className="info">
      <img className="profile-photo" src={photo} alt="a smiling web developer"></img>
      <h3>Luy Vannda</h3>
      <p className="job-title">Frontend Developer</p>
      <p><a href="https://github.com/luyvannda" rel="noreferrer" target="_blank">github.com/luyvannda</a></p>
    </div>
  )
}