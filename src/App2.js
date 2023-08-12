import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from "./components/NavBar";

import SideBar from './components/SideBar/SideBar';
import Body from './components/Body/Body';
import Profile from './components/Profile/Profile';
import Achieve from './components/Achievement/Achievement';
import Project from './components/Project/Project';

export const Dashboard = () => {
  return (
    <>
      <NavBar />
      <SideBar />
      <Body />
    </>
  )
}
