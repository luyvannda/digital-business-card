import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function Social() {
  return (
    <div className="social">
      <a href="https://twitter.com/luyvannda" rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faSquareXTwitter} className='twitter' />
      </a>

      <a href="https://www.facebook.com/lvannda/" rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faSquareFacebook} className='facebook' />
      </a>

      <a href="https://github.com/luyvannda/digital-business-card" rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faSquareGithub} className='github' />
      </a>

      <a href="https://api.whatsapp.com/send?phone=85577697586&text=Hello%20Vannda!" rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faSquareWhatsapp} className='whatsapp' />
      </a>

    </div>
  )
}