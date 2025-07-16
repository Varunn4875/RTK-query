 import './typed.css'
function AboutSection(){
    return (
        <>
     <div className="container section-title fw-bold"data-aos="fade-up"id="About-me">
        <h2>About</h2>
        {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
      </div>

      <div className="container fw-bold text-white" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4 justify-content-center">
          {/* <div className="col-lg-4">
            <img src="assets/img/profile-img.jpg" className="img-fluid" alt="">
          </div> */}
          <div className="col-lg-8 content"style={{textAlign:'justify'}}>
            {/* <h1>Know Who I Am</h1> */}
            <h3 className=" py-3">
              Hi Everyone, I am Varun from Karur, India.
            </h3>
             <h3 className=" py-3">
              I am currently Self-Employed as a Web Designer in Karur, TamilNadu
            </h3>
             <h3 className=" py-3">
             I have completed Bachelors of computer Applications.
            </h3>
             <h3 className=" py-3">
              Apart from coding, I love to do are Running,Reading Novels and playing Badminton.
            </h3>
          </div>
        </div>

      </div>
      </>
      )
}
export default AboutSection