import React from 'react'
import Image1 from '../images/S&P1.jpg'
import Image2 from '../images/S&P2.jpg'
import Image3 from '../images/S&P3.jpg'


const SectionDetailsSandP = () => {
  return (
    <section className="sectionDetailsBackground sliderSection">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="sectionHeading introductionHeading">
              <div>
                <h2>Services and Pricing</h2>
                <span className="highlight"></span>
              </div>

              <p className="introductionPara">
                At Van Buren Urgent Care, we are all about providing the best
                quality care before anything else. That is why our prices
                remained the same for nearly a decade, despite the rise of
                medical fees and inflation that have caused other urgent cares
                to raise prices. Van Buren Urgent Care prides our self on
                maintaining our prices that beat out all ERs and other Urgent
                Cares.
              </p>

              <div className="marginBottom20">
                <a
                  href="https://vanburenurgentcarecenter.com/vbuc-checkin/"
                  className="btnSuccessBordered btnCheckInOnlineTop"
                >
                  Check In Online
                </a>
              </div>
            </div>
          </div>

          <div className="col noPadding">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={Image1}
                    className="d-block w-100 customPic"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={Image2}
                    className="d-block w-100 customPic"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={Image3}
                    className="d-block w-100 customPic"
                    alt="..."
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
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
                href="#carouselExampleControls"
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
        </div>
      </div>
    </section>
  )
}

export default SectionDetailsSandP

// class SectionDetailsSandP extends React.Component {
//   render() {
//     return (
//       <section className="sectionDetailsBackground sliderSection">
//         <div className="container">
//           <div className="row">
//             <div className="col">
//               <div className="sectionHeading introductionHeading">
//                 <div>
//                   <h2>Services and Pricing</h2>
//                   <span className="highlight"></span>
//                 </div>

//                 <p className="introductionPara">
//                   At Van Buren Urgent Care, we are all about providing the best
//                   quality care before anything else. That is why our prices
//                   remained the same for nearly a decade, despite the rise of
//                   medical fees and inflation that have caused other urgent cares
//                   to raise prices. Van Buren Urgent Care prides our self on
//                   maintaining our prices that beat out all ERs and other Urgent
//                   Cares.
//                 </p>

//                 <div className="marginBottom20">
//                   <a
//                     href="https://vanburenurgentcarecenter.com/vbuc-checkin/"
//                     className="btnSuccessBordered btnCheckInOnlineTop"
//                   >
//                     Check In Online
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div className="col noPadding">
//               <div
//                 id="carouselExampleControls"
//                 className="carousel slide"
//                 data-ride="carousel"
//               >
//                 <div className="carousel-inner">
//                   <div className="carousel-item active">
//                     <img
//                       src={Image1}
//                       className="d-block w-100 customPic"
//                       alt="..."
//                     />
//                   </div>
//                   <div className="carousel-item">
//                     <img
//                       src={Image2}
//                       className="d-block w-100 customPic"
//                       alt="..."
//                     />
//                   </div>
//                   <div className="carousel-item">
//                     <img
//                       src={Image3}
//                       className="d-block w-100 customPic"
//                       alt="..."
//                     />
//                   </div>
//                 </div>
//                 <a
//                   className="carousel-control-prev"
//                   href="#carouselExampleControls"
//                   role="button"
//                   data-slide="prev"
//                 >
//                   <span
//                     className="carousel-control-prev-icon"
//                     aria-hidden="true"
//                   ></span>
//                   <span className="sr-only">Previous</span>
//                 </a>
//                 <a
//                   className="carousel-control-next"
//                   href="#carouselExampleControls"
//                   role="button"
//                   data-slide="next"
//                 >
//                   <span
//                     className="carousel-control-next-icon"
//                     aria-hidden="true"
//                   ></span>
//                   <span className="sr-only">Next</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     )
//   }
// }

// export default SectionDetailsSandP
