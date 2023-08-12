import React from 'react'
import './Body.css'
import Top from './Top/Top'
import Listing from './Listing/Listing'
// import Activity from './Activity Section/Activity'

const Body = () => {
    return (
        <div className='mainContent'>
            <Top/>

            <div className='bottom flex'></div>
            <Listing/> 
            {/* <Activity/> */}
        </div> 
    )
}

export default Body