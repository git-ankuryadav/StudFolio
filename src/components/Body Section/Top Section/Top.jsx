import React from 'react'
import './Top.css'
//Import icon=====>
import {BiSearchAlt} from 'react-icons/bi';
import {TbMessageCircle} from 'react-icons/tb';
import {GrNotification} from 'react-icons/gr';

//imported image=======>
import img from '../Assets/img/ankur  1.jpg'
import video from '../Assets/img/video.mp4'

const Top = () => {
    return (
        <div className='topSection'>
            <div className="headerSection flex">
                <div className="title">
                    <h1>Welcome To StudFolio</h1>
                    <p>Your personal record keeper</p>
                </div>

                <div className="searchBar flex">
                    <input type="text" placeholder='Search Dashboard'/>
                    <BiSearchAlt className="icon"/>
                </div>

                <div className="adminDiv flex">
                    <TbMessageCircle className='icon'/>
                    <GrNotification className='icon'/>
                    <div className="adminImage">
                        <img src={img} alt="ankur  1.jpg" />
                    </div>
                </div>
            </div>

            <div className="cardSection flex">

                <div className="rightCard flex">
                    <h1> Create and sell extraordinary </h1>
                    <p> The world's fast growing industry today are natural made products</p>

                    <div className="buttons flex">
                        <button className='btn'>Explore More</button>
                        <button className='btn transparent'>Top sellers</button>
                    </div>

                    <div className="videoDiv">
                        <video src={video} autoPlay loop muted></video>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Top