import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BrowserRouter, Outlet, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import App2 from './App2';
// import NavBar from "./components/NavBar";
import { Dashboard } from "./App2";
import SideBar from "./components/SideBar/SideBar";
import Body from "./components/Body/Body";
import Profile from "./components/Profile/Profile";
import Project from "./components/Project/Project";
import Achievement from "./components/Achievement/Achievement";

function App() {
  return (
    <>
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
    {/* <BrowserRouter>
        <Routes>
          <Route path="/App2" element={<App2 />} />
        </Routes>
    </BrowserRouter> */}
    <BrowserRouter>
            <Routes>
                <Route path="/Dashboard" element={<Dashboard/>}>
                  <Route path="/Dashboard/SideBar" element={<SideBar/>}>
                    <Route path="/Dashboard/SideBar/Body" element={<Body/>}/>
                    <Route path="/Dashboard/SideBar/Profile" element={<Profile/>}/>
                    <Route path="/Dashboard/SideBar/Project" element={<Project/>}/>
                    <Route path="/Dashboard/SideBar/Achievement" element={<Achievement/>}/>
                  </Route>
                </Route>
            </Routes>    
      </BrowserRouter>
      <Outlet />
    </>
  );
}

export default App;
