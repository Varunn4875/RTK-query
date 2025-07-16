import js from "./assets/js.svg"
import nodes from './assets/nodes.svg'
import css from './assets/css.svg'
import rea from './assets/rea.svg'
import html from './assets/html.svg'
import bootstrap from './assets/bootstrap.svg'
import c from './assets/c.svg'
import vs from './assets/vs.svg'
import post from './assets/post.png'
import github from './assets/github.svg'
import macos from './assets/macos.svg'
import figma from './assets/figma.png'
import './typed.css'


function Icons(){
    return(
        <>
        <h1 className="project-heading">Professional Skillset</h1>
        {/* <div className="container">
          <div className="row justify-content-start align-items-center">
            <div className="  col-md-2 col-4 text-center"id="items">
            <img src={nodes} alt="node" style={{ height:'150px', width: '150px' }}/>
            </div>
             <div className=" col-md-2 col-4 text-center">
            <img src={js} alt="node" style={{ height:'100px', width: '100px' }}/>
            </div>
          </div>
        </div> */}
        <div className="row" style={{justifyContent:'center',paddingBottom:"50px"}}>
               <div className="tech-icons col-md-2 col-4 text-center"id="items">
            <img src={html} alt="node" style={{ height:'125px', width: '125px' }}/>
               </div>
              <div className="tech-icons col-md-2 col-4 text-center">
            <img src={css} alt="node" style={{ height:'100px', width: '100px' }}/>
            </div>
              <div className="tech-icons col-md-2 col-4 text-center">
            <img src={js} alt="node" style={{ height:'100px', width: '100px' }}/>
            </div>
               <div className="tech-icons col-md-2 col-4 text-center">
            <img src={nodes} alt="node" style={{ height:'100px', width: '100px' }}/>
            </div>
             <div className="tech-icons col-md-2 col-4 text-center">
            <img src={rea} alt="node" style={{ height:'100px', width: '100px' }}/>
            </div>
            <div className="tech-icons col-md-2 col-4 text-center">
            <img src={c} alt="node" style={{ height:'100px', width: '100px' }}/>
            </div>
             <div className="tech-icons col-md-2 col-4 text-center">
            <img src={bootstrap} alt="node" style={{ height:'100px', width: '100px' }}/>
            </div>
            <div className="tech-icons col-md-2 col-4 text-center">
            <img src={figma} alt="node" style={{ height:'100px', width: '100px' }}/>
            </div>

          </div>

           <h1 className="project-heading">Tools I Use</h1>
           <div className="row" style={{justifyContent:'center',paddingBottom:"50px"}}>
               <div className="tech-icons col-md-2 col-4 text-center"id="items">
            <img src={vs} alt="node" style={{ height:'125px', width: '125px' }}/>
               </div>
               <div className="tech-icons col-md-2 col-4 text-center">
            <img src={post} alt="node" style={{ height:'100px', width: '100px' }}/>
            </div>
             <div className="tech-icons col-md-2 col-4 text-center">
            <img src={github} alt="node" style={{ height:'100px', width: '100px' }}/>
            </div>
             <div className="tech-icons col-md-2 col-4 text-center">
            <img src={macos} alt="node" style={{ height:'100px', width: '100px' }}/>
            </div>
            </div>


        
        </>
    )
}
export default Icons;