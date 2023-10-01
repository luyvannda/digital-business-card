import photo from "./images/profile-photo.jpg"

export default function Info() {
  return (
    <div className="info">
      <img className="profile-photo" src={photo} alt="a smiling web developer"></img>
    </div>
  )
}