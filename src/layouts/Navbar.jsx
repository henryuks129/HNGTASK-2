import '../styles/Navbar.css'
import tvicon from '../assets/tv-icon.svg'
import menuicon from '../assets/Menu-icon.svg'
import Search from './Search'

const Navbar = () => {
  return (
    <div className='container'>
        <nav className='d-flex justify-content-between pt-3'>
            <div className='d-flex gap-4 text-white'>
                <img src={tvicon} alt="menu" className='tvIcon'/>
                <h5 className='d-none d-md-block'>MovieBox</h5>
            </div>
            <div>
                <Search/>
            </div>
            <div className='d-flex '>
                <h5 className='text-white w-100 d-none d-md-block'>Sign in</h5>
                <img src={menuicon} alt="menu icon"/>
            </div>
        </nav>
    </div>
  )
}

export default Navbar