import React from 'react'
import './sidebar.css'
import {Link } from 'react-router-dom'

//Import Images=======>
import logo from './../SideBar Section/Assets/img/studfolio.webp'

// imported Icons======>
import {IoMdSpeedometer} from 'react-icons/io'
import {AiFillProfile} from 'react-icons/ai'
import {BsTrophyFill} from 'react-icons/bs'
import {GrProjects} from 'react-icons/gr'
import {MdOutlineExplore} from 'react-icons/md'
import {BsFillFastForwardFill} from 'react-icons/bs'
import {FiSettings} from 'react-icons/fi'
import {AiOutlineCalendar} from 'react-icons/ai'

const sidebar = () => {
    return (
        <div className='sideBar grid'>
            
            <div className='logoDiv flex'>
                <img src={logo} alt='Image Name'/>
                <h2>StudFolio</h2>
            </div>

           <div className="menuDiv">
                <h3 className="divTitle">
                    QUICK MENU
                </h3>
                <ul className="menuLists grid">

                    
                  
                   <li className="listItem">
                    <Link to="/" className='menuLink flex'>
                        <IoMdSpeedometer className="icon"/>
                        <span className="smallText">
                            Dash board
                        </span>
                    </Link>
                    </li> 

                    <li className="listItem">
                        <Link to="/profile" className='menuLink flex'>
                            <AiFillProfile className="icon"/>
                                <span className="smallText">Profile</span>
                        </Link>

                    </li> 

                    <li className="listItem">
                    <Link to="/achievements" className='menuLink flex'>
                        <BsTrophyFill className="icon"/>
                        <span className="smallText">
                            Achievements
                        </span>
                    </Link>
                    </li> 

                    <li className="listItem">
                    <Link to="/project" className='menuLink flex'>
                        <GrProjects className="icon"/>
                        <span className="smallText">
                            Projects
                        </span>
                    </Link>
                    </li>


                    <li className="listItem">
                    <Link to="/" className='menuLink flex'>
                        <BsFillFastForwardFill className="icon"/>
                        <span className="smallText">
                            Activities
                        </span>
                    </Link>
                    </li>                    

                </ul>
            </div>


            <div className="settingDiv">
                <h3 className="divTitle">
                    SETTINGS
                </h3>
                <ul className="menuLists grid">
                  
                   <li className="listItem">
                    <Link to="/" className='menuLink flex'>
                        <FiSettings className="icon"/>
                        <span className="smallText">
                            Settings
                        </span>
                    </Link>
                    </li> 

                    <li className="listItem">
                    <Link to="/" className='menuLink flex'>
                        <MdOutlineExplore className="icon"/>
                        <span className="smallText">
                            Explore
                        </span>
                    </Link>
                    </li>  

                    <li className="listItem">
                    <Link to="/" className='menuLink flex'>
                        <AiOutlineCalendar className="icon"/>
                        <span className="smallText">
                            Calendar
                        </span>
                    </Link>
                    </li>
                      
                </ul>
            </div>
        </div>
    )
}
export default sidebar