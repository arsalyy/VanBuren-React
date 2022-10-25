import React from 'react'
import details from '../images/section1.png'
import waitTime from '../images/section2.png'
import accepted from '../images/section3.png'

const SectionDetailsHome = () => {
  return (
    <section id="sectionDetails">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 text-center">
            <a href="/services&pricing">
              <img src={details} alt="Details" className="center-block" />
            </a>
            <label className="center-block pt-3">Services & Pricing</label>
            <p className="text-dark text-center">
              Have a detailed look at our services and pricing
            </p>
            <a
              style={{ textDecoration: 'none', fontWeight: 'bold' }}
              href="/services&pricing"
              className="btnPrimarySmall"
            >
              See more
            </a>
          </div>

          <div className="col-lg-4 text-center centerSectionDetail">
            <img src={waitTime} alt="Wait Time" className="center-block" />
            <label className="center-block pt-3">
              Current Wait Time<p className="cwt">0 MINS</p>
            </label>
            <p className="text-dark text-center">
              Current wait time for our clinic check-up
            </p>
          </div>

          <div className="col-lg-4 text-center">
            <a href="/insuranceaccepted">
              <img src={accepted} alt="Accepted" className="center-block" />
            </a>
            <label className="center-block pt-3">Insurance Accepted</label>
            <p className="text-dark text-center">
              See details of insurance accepted
            </p>
            <a
              style={{ textDecoration: 'none', fontWeight: 'bold' }}
              href="/insuranceaccepted"
              className="btnPrimarySmall"
            >
              See more
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionDetailsHome

// class SectionDetailsHome extends React.Component {
//   render() {
//     return (
//       <section id="sectionDetails">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-4 text-center">
//               <a href="/services&pricing">
//                 <img src={details} alt="Details" className="center-block" />
//               </a>
//               <label className="center-block pt-3">Services & Pricing</label>
//               <p className="text-dark text-center">
//                 Have a detailed look at our services and pricing
//               </p>
//               <a
//                 style={{ textDecoration: 'none', fontWeight: 'bold' }}
//                 href="/services&pricing"
//                 className="btnPrimarySmall"
//               >
//                 See more
//               </a>
//             </div>

//             <div className="col-lg-4 text-center centerSectionDetail">
//               <img src={waitTime} alt="Wait Time" className="center-block" />
//               <label className="center-block pt-3">
//                 Current Wait Time<p className="cwt">0 MINS</p>
//               </label>
//               <p className="text-dark text-center">
//                 Current wait time for our clinic check-up
//               </p>
//             </div>

//             <div className="col-lg-4 text-center">
//               <a href="/insuranceaccepted">
//                 <img src={accepted} alt="Accepted" className="center-block" />
//               </a>
//               <label className="center-block pt-3">Insurance Accepted</label>
//               <p className="text-dark text-center">
//                 See details of insurance accepted
//               </p>
//               <a
//                 style={{ textDecoration: 'none', fontWeight: 'bold' }}
//                 href="/insuranceaccepted"
//                 className="btnPrimarySmall"
//               >
//                 See more
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     )
//   }
// }

// export default SectionDetailsHome
