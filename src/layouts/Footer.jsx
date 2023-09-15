import '../styles/Footer.css'
import facebook from '../assets/fa-brands_facebook-square.svg'
import instagram from '../assets/fa-brands_instagram.svg' 
import twitter from '../assets/fa-brands_twitter.svg'
import youtube from '../assets/fa-brands_youtube.svg'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <div className='footer-body'>
        <div className='inner-footer'>
            <div className='d-flex footer-image'>
                <img src={facebook} alt="facebook-icon" />
                <img src={instagram} alt="instagram-icon" />
                <img src={twitter} alt="twitter-icon" />
                <img src={youtube} alt="youtube-icon" />
            </div>
            <div className='d-flex justify-content-between align-items-center footer-text-area'>
                <p>Conditions of Use</p>
                <p>Privacy & Policy</p>
                <p>Press Room</p>
            </div>
            <p className='text-center footer-time'>&copy; {year} MovieBox by Adriana Eka Prayudha  </p>
        </div>
    </div>
  )
}

export default Footer