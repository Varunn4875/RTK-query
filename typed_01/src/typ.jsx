  import {ReactTyped} from 'react-typed'
  import {useTypewriter,Cursor} from 'react-simple-typewriter'
  import './typed.css'
  import cuteboy from './assets/backgroundImage.jpg'
  
  function Typing(){
    
      return(
        <>
        <div className='container-xl my-5'>
           <div className="col-sm-4 col-lg-10 fw-bold text-black  "id='Animated-typing'>
            {/* <h1>Varun Selvakumar</h1> */}
             <h1 className='varun'>  I'm Varun selvakumar </h1>
        <ReactTyped
            strings={ ["React js developer.",'Freelancer','Open Source Contributor']}
            typeSpeed={150}
             backSpeed={100}
             loop
            /> 
            {/* <h1 style={{margin: '50px'}}>
              I'm a{' '}
              <span style={{fontWeight:'bold', color:'green'}}>
                {text}
              </span>
              <Cursor/>
            </h1> */}
            <div className="social-links">
              <a href="http://github.com/Varunn4875" target='_blank'><i className="bi bi-github fw-bold text-black"></i></a>
              <a href="#"target='_blank'><i className="bi bi-instagram fw-bold text-black"></i></a>
              <a href="https://wa.me/919360141042" target='_blank'><i className="bi bi-whatsapp fw-bold text-black"></i></a>
               <a href="mailto:example@example.com" target='_blank'><i className="bi bi-linkedin fw-bold text-black"></i></a>
              {/* <a href="mailto:example@example.com">Send Email</a> */}
            </div>
          </div>
          
          {/* <div className='col-sm-3 col-lg-5'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laudantium.</p>
            
          </div>
           */}
            
        </div> 

      
            </>
            

      )
  }
export default Typing;