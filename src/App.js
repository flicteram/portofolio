import {lazy} from 'react'
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import withSuspense from './Hocs/withSuspense';

const Home = withSuspense(lazy(()=>import("./Pages/Home.js")))
const About = withSuspense(lazy(()=>import("./Pages/About.js")))
const Projects = withSuspense(lazy(()=>import("./Pages/Projects.js")))

function App() {
  return (
    <div style={{display:'flex', flexDirection:"column", minHeight:'100vh', position:'relative'}}>
      <Header/>
        <div style={{margin:'100px 0 360px 0'}}>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/projects' element={<Projects/>}/>
              <Route path='/about' element={<About/>}/>
          </Routes>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
