import React from 'react'
import donteTaylor from '../images/donte-taylor.png'
import clarisaRomero from '../images/clarisa-romero.png'
import leslieDiana from '../images/leslie-diana.png'
import ivoryGilyard from '../images/ivory-gilyard.png'
import nBrig from '../images/n-brig.png'
import dashandaReed from '../images/dashanda-reed.png'
import toniWalsh from '../images/toni-walsh.png'
import brittanyMosley from '../images/brittany-mosley.png'
import danteUnderwood from '../images/dante-underwood.png'

const Testimonials = () => {
  return (
    <section className="sectionTestimonials">
      <div className="container-fluid">
        <div className="sectionHeading">
          <h2 className="text-center">Testimonials</h2>
          <p className="text-center">
            Don’t take our word for it, see what our actual patients are saying
            about us on Google Reviews
          </p>
        </div>

        <div
          id="carouselExampleIndicators"
          className="carousel slide w-100"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row text-center">
                <div className="col bg-white py-4 mx-3">
                  <img src={donteTaylor} alt="Donte Taylor" />
                  <label className="text-center center-block">
                    Donte Taylor
                  </label>
                  <div className="rating"></div>
                  <p className="text-center px-5">
                    They best urgent care you can take your loved ones. Dr. Deya
                    Abdelbaki and the nursing staff are awesome and very
                    professional. They always explain the solution to every
                    problem with ease and get me and my family well quick. Great
                    job.
                  </p>
                </div>
                <div className="col bg-white py-4 mx-3">
                  <img src={clarisaRomero} alt="Clarisa Romero" />
                  <label className="text-center center-block">
                    Clarisa Romero
                  </label>
                  <div className="rating"></div>
                  <p className="text-center px-5">
                    Brought my 3 year old son since he was not feeling good.
                    Everyone knows the ER has a long wait. They saw me asap.
                    Service was excellent, place was very clean. Everyone was so
                    kind! Great place if you are looking for quick and great
                    service.
                  </p>
                </div>
                <div className="col bg-white py-4 mx-3">
                  <img src={leslieDiana} alt="Leslie Diane" />
                  <label className="text-center center-block">
                    Leslie Diane
                  </label>
                  <div className="rating"></div>
                  <p className="text-center px-5">
                    I went in for my gout and within 15 minutes I was seen and
                    out. They really explained what gout was and the do’s and
                    don’ts to control the pain. They are wonderful and made me
                    and my son feel comfortable. I would recommend them as the
                    best for urgent care in Belleville.
                  </p>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="row text-center">
                <div className="col bg-white py-4 mx-3">
                  <img src={ivoryGilyard} alt="Ivory Gilyard" />
                  <label className="text-center center-block">
                    Ivory Gilyard
                  </label>
                  <div className="rating"></div>
                  <p className="text-center px-5">
                    Was seen in a timely manner and treated with excellent care.
                    Would definitely recommend. I even moved out of the area and
                    still come here.
                  </p>
                </div>
                <div className="col bg-white py-4 mx-3">
                  <img src={nBrig} alt="N Brig" />
                  <label className="text-center center-block">N Brig</label>
                  <div className="rating"></div>
                  <p className="text-center px-5">
                    Everyone in there is awesome! Super nice and extremely fast.
                    Nurse Deya went above and beyond to make sure I was
                    satisfied.
                  </p>
                </div>
                <div className="col bg-white py-4 mx-3">
                  <img src={dashandaReed} alt="Dashanda Reed" />
                  <label className="text-center center-block">
                    Dashanda Reed
                  </label>
                  <div className="rating"></div>
                  <p className="text-center px-5">
                    Really satisfied with Deya Abdelbaki and his staff, they all
                    were wonderful and definitely recommend them.
                  </p>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="row text-center">
                <div className="col bg-white py-4 mx-3">
                  <img src={toniWalsh} alt="Toni Walsh" />
                  <label className="text-center center-block">Toni Walsh</label>
                  <div className="rating"></div>
                  <p className="text-center px-5">
                    I have come to the Van Buren Urgent Care on several
                    occasions. The care I received was fantastic and the staff
                    are always friendly and willing to go the extra distance for
                    the patients. I would highly recommend this urgent care.
                  </p>
                </div>
                <div className="col bg-white py-4 mx-3">
                  <img src={brittanyMosley} alt="Brittany Mosley" />
                  <label className="text-center center-block">
                    Brittany Mosley
                  </label>
                  <div className="rating"></div>
                  <p className="text-center px-5">
                    I went to a urgent care before going here and the urgent
                    care before made me pay for the copay and the balance I had
                    from a previous visit. This urgent care was great I was in
                    and out within 30 mins. No copay need at the desk. Friendly
                    staff and doctors.
                  </p>
                </div>
                <div className="col bg-white py-4 mx-3">
                  <img src={danteUnderwood} alt="Dante Underwood" />
                  <label className="text-center center-block">
                    Dante Underwood
                  </label>
                  <div className="rating"></div>
                  <p className="text-center px-5">
                    The staff was very nice and attentive. I felt welcomed from
                    the moment I stepped in. The wait time wasn’t very long
                    which was a big plus in my opinion. Overall great place and
                    would recommend to Family & Friends.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

// class Testimonials extends React.Component {
//   render() {
//     return (
//       <section className="sectionTestimonials">
//         <div className="container-fluid">
//           <div className="sectionHeading">
//             <h2 className="text-center">Testimonials</h2>
//             <p className="text-center">
//               Don’t take our word for it, see what our actual patients are
//               saying about us on Google Reviews
//             </p>
//           </div>

//           <div
//             id="carouselExampleIndicators"
//             className="carousel slide w-100"
//             data-ride="carousel"
//           >
//             <ol className="carousel-indicators">
//               <li
//                 data-target="#carouselExampleIndicators"
//                 data-slide-to="0"
//                 className="active"
//               ></li>
//               <li
//                 data-target="#carouselExampleIndicators"
//                 data-slide-to="1"
//               ></li>
//               <li
//                 data-target="#carouselExampleIndicators"
//                 data-slide-to="2"
//               ></li>
//             </ol>
//             <div className="carousel-inner">
//               <div className="carousel-item active">
//                 <div className="row text-center">
//                   <div className="col bg-white py-4 mx-3">
//                     <img src={donteTaylor} alt="Donte Taylor" />
//                     <label className="text-center center-block">
//                       Donte Taylor
//                     </label>
//                     <div className="rating"></div>
//                     <p className="text-center px-5">
//                       They best urgent care you can take your loved ones. Dr.
//                       Deya Abdelbaki and the nursing staff are awesome and very
//                       professional. They always explain the solution to every
//                       problem with ease and get me and my family well quick.
//                       Great job.
//                     </p>
//                   </div>
//                   <div className="col bg-white py-4 mx-3">
//                     <img src={clarisaRomero} alt="Clarisa Romero" />
//                     <label className="text-center center-block">
//                       Clarisa Romero
//                     </label>
//                     <div className="rating"></div>
//                     <p className="text-center px-5">
//                       Brought my 3 year old son since he was not feeling good.
//                       Everyone knows the ER has a long wait. They saw me asap.
//                       Service was excellent, place was very clean. Everyone was
//                       so kind! Great place if you are looking for quick and
//                       great service.
//                     </p>
//                   </div>
//                   <div className="col bg-white py-4 mx-3">
//                     <img src={leslieDiana} alt="Leslie Diane" />
//                     <label className="text-center center-block">
//                       Leslie Diane
//                     </label>
//                     <div className="rating"></div>
//                     <p className="text-center px-5">
//                       I went in for my gout and within 15 minutes I was seen and
//                       out. They really explained what gout was and the do’s and
//                       don’ts to control the pain. They are wonderful and made me
//                       and my son feel comfortable. I would recommend them as the
//                       best for urgent care in Belleville.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="carousel-item">
//                 <div className="row text-center">
//                   <div className="col bg-white py-4 mx-3">
//                     <img src={ivoryGilyard} alt="Ivory Gilyard" />
//                     <label className="text-center center-block">
//                       Ivory Gilyard
//                     </label>
//                     <div className="rating"></div>
//                     <p className="text-center px-5">
//                       Was seen in a timely manner and treated with excellent
//                       care. Would definitely recommend. I even moved out of the
//                       area and still come here.
//                     </p>
//                   </div>
//                   <div className="col bg-white py-4 mx-3">
//                     <img src={nBrig} alt="N Brig" />
//                     <label className="text-center center-block">N Brig</label>
//                     <div className="rating"></div>
//                     <p className="text-center px-5">
//                       Everyone in there is awesome! Super nice and extremely
//                       fast. Nurse Deya went above and beyond to make sure I was
//                       satisfied.
//                     </p>
//                   </div>
//                   <div className="col bg-white py-4 mx-3">
//                     <img src={dashandaReed} alt="Dashanda Reed" />
//                     <label className="text-center center-block">
//                       Dashanda Reed
//                     </label>
//                     <div className="rating"></div>
//                     <p className="text-center px-5">
//                       Really satisfied with Deya Abdelbaki and his staff, they
//                       all were wonderful and definitely recommend them.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="carousel-item">
//                 <div className="row text-center">
//                   <div className="col bg-white py-4 mx-3">
//                     <img src={toniWalsh} alt="Toni Walsh" />
//                     <label className="text-center center-block">
//                       Toni Walsh
//                     </label>
//                     <div className="rating"></div>
//                     <p className="text-center px-5">
//                       I have come to the Van Buren Urgent Care on several
//                       occasions. The care I received was fantastic and the staff
//                       are always friendly and willing to go the extra distance
//                       for the patients. I would highly recommend this urgent
//                       care.
//                     </p>
//                   </div>
//                   <div className="col bg-white py-4 mx-3">
//                     <img src={brittanyMosley} alt="Brittany Mosley" />
//                     <label className="text-center center-block">
//                       Brittany Mosley
//                     </label>
//                     <div className="rating"></div>
//                     <p className="text-center px-5">
//                       I went to a urgent care before going here and the urgent
//                       care before made me pay for the copay and the balance I
//                       had from a previous visit. This urgent care was great I
//                       was in and out within 30 mins. No copay need at the desk.
//                       Friendly staff and doctors.
//                     </p>
//                   </div>
//                   <div className="col bg-white py-4 mx-3">
//                     <img src={danteUnderwood} alt="Dante Underwood" />
//                     <label className="text-center center-block">
//                       Dante Underwood
//                     </label>
//                     <div className="rating"></div>
//                     <p className="text-center px-5">
//                       The staff was very nice and attentive. I felt welcomed
//                       from the moment I stepped in. The wait time wasn’t very
//                       long which was a big plus in my opinion. Overall great
//                       place and would recommend to Family & Friends.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <a
//               className="carousel-control-prev"
//               href="#carouselExampleIndicators"
//               role="button"
//               data-slide="prev"
//             >
//               <span
//                 className="carousel-control-prev-icon"
//                 aria-hidden="true"
//               ></span>
//               <span className="sr-only">Previous</span>
//             </a>
//             <a
//               className="carousel-control-next"
//               href="#carouselExampleIndicators"
//               role="button"
//               data-slide="next"
//             >
//               <span
//                 className="carousel-control-next-icon"
//                 aria-hidden="true"
//               ></span>
//               <span className="sr-only">Next</span>
//             </a>
//           </div>
//         </div>
//       </section>
//     )
//   }
// }

// export default Testimonials
