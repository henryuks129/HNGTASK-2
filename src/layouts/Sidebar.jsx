// import { Link } from 'react-router-dom'
import home from '../assets/Home.svg'
import tvicon from '../assets/tv-icon.svg'
import projector from '../assets/Movie Projector.svg'
import tvseries from '../assets/TV Show.svg'
import calendar from '../assets/Calendar.svg'
import logout from '../assets/Logout.svg'
import '../styles/Sidebar.css'
import { useState } from 'react'

const Sidebar = () => {
    const [open, setOpen] = useState(true)
    const toggle = ()=> setOpen(!open)
  return (
    <div className='sidebar_container'>
        <div style={{width: open ? "240px" : "50px"}} className="sidebar">
            <div className="top_section mt-4 mb-3">
                <img className=''  src={tvicon} onClick={toggle} alt="" />
                <h3 className='link_text mt-2' style={{display: open ? "block" : "none"}}>MovieBox</h3>
            </div>
            <div>
                <div className='link mt-1 mb-1'>
                    <img src={home} alt="" className='icon'/>
                    <h4 className='link_text' style={{display: open ? "block" : "none"}}>Home</h4>
                </div>
                <div className='link active mt-1 mb-1'>
                    <img src={projector} alt="" className='icon'/>
                        <h4 className='link_text' style={{display: open ? "block" : "none"}}>Movies</h4>
                </div>
                <div className='link mt-1 mb-1'>
                    <img src={tvseries} alt="" className='icon'/>
                        <h4 className='link_text' style={{display: open ? "block" : "none"}}>TV Series</h4>
                </div>
                <div className='link mt-1 mb-1'>
                    <img src={calendar} alt="" className='icon'/>
                        <h4 className='link_text' style={{display: open ? "block" : "none"}}>Upcoming</h4>
                </div>
                <div style={{width: open ? "block" : "none"}} className='start-playing mb-2 mt-4'>
                    <h4 style={{width: open ? "block" : "none"}}>Play movie quizes and earn free tickets</h4>
                    <p style={{width: open ? "block" : "none"}}>50K people are playing now</p>
                </div>
                <div className='link mb-5'>
                    <img src={logout} alt="" />
                        <h4 className='link_text' style={{display: open ? "block" : "none"}}>Log out</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar