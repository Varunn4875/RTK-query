import './typed.css'
import varunS from './assets/varunS.pdf'

function Navigation(){
  //container-fluid position-relative d-flex align-items-center justify-content-between
    return(

         <nav className='navbar navbar-expand-md navbar-light fixed-top' id='navbar'>
        <div className='container-xxl'>
          <a href='#intro' className='navbar-brand'>
            <span className='fw-bold text-black'>
              <h3>VS</h3>
            </span>
          </a>

           <button className='navbar-toggler secondary' type="button"
            data-bs-toggle="collapse"
      data-bs-target="#main-nav" aria-controls="main-nav" 
      aria-expanded="false"
      aria-label="Toggle navigation" style={{backgroundcolor:"white"}}>
        <span className='navbar-toggler-icon'style={{backgroundColor:"white",
          padding:"2px"}}></span>
      </button>


      <div className='collapse navbar-collapse justify-content-end align-center'
      id="main-nav">
        <ul className='navbar-nav'>
          <li className='nav-item me-4'>
            <a className='nav-link fw-bold custom-hover text-black' href='#About-me'>ABOUT ME</a>
          </li>
          <li className='nav-item me-4'>
            <a className='nav-link fw-bold text-black custom-hover' href='http://github.com/Varunn4875'target='_blank' rel='noopener noreferrer' >PROJECTS</a>
          </li>
          {/* <li className='nav-item'>
            <a className='nav-link fw-bold text-white' href='#contact'>Get in touch</a>
          </li> */}
          <li className='nav-item me-4'>
            <a className='nav-link fw-bold text-black custom-hover' href={varunS} target='_blank' rel='noopener noreferrer'>RESUME</a>
          </li>
           <li className='nav-item me-4'>
            <a className='nav-link fw-bold text-info custom-hover text-black' href='#'>BLOGS</a>
          </li>
          <li className='nav-item ms-2 d-none d-md-inline me-4'>
            <a className='btn btn-success bi bi-envelope fw-bold ' href='varunselvakumar6@gmail.com' target='_blank' rel='noopener noreferrer'>  varunselvakumar6@gmail.com</a>
          </li>

        </ul>
      </div>
      </div>
      </nav>
    )

}
export default Navigation