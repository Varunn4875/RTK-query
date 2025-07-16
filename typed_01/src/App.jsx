import { useState,useEffect} from 'react'
import Clock from './clock'
import MyComponent from './bg';
import Typing from './typ';
import Navigation from './nav';
import AboutSection from './About';
import Resume from './Resume';
import Icons from './Icons';
import './App.css'
// import Icons from './icons';


function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {/* <h1>Device Width: {width}px</h1>
      {width < 768 ? <p>Mobile View</p> : <p>Desktop View</p>} */}
       <Navigation/>
      <MyComponent/>
       <Typing/>
       {/* <Icons/> */}
       <AboutSection/>
       {/* <Resume/> */}
       <Icons/>
    </div>
  );
}
export default App;
  

  

 