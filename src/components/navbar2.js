import React from 'react'
import { NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { BrowserRouter, Routes } from 'react-router-dom'

function navbar2() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Skills" element={<Skills/>}/>
                <Route path="/Team" element={<Team/>}/>
                <Route path="/Dashboard" element={<Dashboard/>}/>
            </Routes>    
        </BrowserRouter>
        <NavLink to="/Home"> Home </NavLink>
        <NavLink to="/Skills"> Skills </NavLink>
        <NavLink to="/Team"> Team </NavLink>
        <NavLink to="/Dashboard"> Dashboard </NavLink>
    </>
  )
}

export default navbar2