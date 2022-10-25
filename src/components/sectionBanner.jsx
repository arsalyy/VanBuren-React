import React from 'react'
import tick from '../images/tick-blue.png'

const SectionBanner = () => {
  return (
    <section className="sectionBanner" style={{ marginTop: '80px' }}>
      <div className="row w-100">
        <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 noPadding backgroundcurvedimageParent">
          <div className="sectionHeadingImage"></div>
        </div>

        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 text-center">
          <div className="sectionHeading paddingTop60">
            <h2>Quality Care Without The Wait</h2>
            <p className="infoPara text-center pt-2">
              Van Buren Urgent Care is for the person who requires the
              convenience of non-scheduled medical attention at any time. Check
              in online to reduce your wait time. Once you arrive we will have
              your information ready.
            </p>

            <div className="marginBottom20">
              <ul className="qualityCareList">
                <li>
                  <img src={tick} alt="" />{' '}
                  <span>Lowest prices in the area </span>
                </li>
                <li>
                  <img src={tick} alt="" /> <span>Short wait time</span>
                </li>
                <li>
                  <img src={tick} alt="" />{' '}
                  <span>Process is fast and simple</span>
                </li>
                <li>
                  <img src={tick} alt="" />{' '}
                  <span>Receive expert medical service</span>
                </li>
                <li>
                  <img src={tick} alt="" /> <span>Cupping therapy</span>
                </li>
                <li>
                  <img src={tick} alt="" /> <span>Walk-ins welcome</span>
                </li>
              </ul>
            </div>

            <a
              className="btnPrimaryLarge"
              style={{ background: '#f00' }}
              href="https://vanburenurgentcarecenter.com/vbuc-checkin/"
            >
              COVID-19 Testing Available!
            </a>

            <p className="checkInPara">
              Once you&#8217;re registered, you will be sent an email confirming
              your check in.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionBanner

// class SectionBanner extends React.Component {
//   render() {
//     return (
//       <section className="sectionBanner" style={{ marginTop: '80px' }}>
//         <div className="row w-100">
//           <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 noPadding backgroundcurvedimageParent">
//             <div className="sectionHeadingImage"></div>
//           </div>

//           <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 text-center">
//             <div className="sectionHeading paddingTop60">
//               <h2>Quality Care Without The Wait</h2>
//               <p className="infoPara text-center pt-2">
//                 Van Buren Urgent Care is for the person who requires the
//                 convenience of non-scheduled medical attention at any time.
//                 Check in online to reduce your wait time. Once you arrive we
//                 will have your information ready.
//               </p>

//               <div className="marginBottom20">
//                 <ul className="qualityCareList">
//                   <li>
//                     <img src={tick} alt="" />{' '}
//                     <span>Lowest prices in the area </span>
//                   </li>
//                   <li>
//                     <img src={tick} alt="" /> <span>Short wait time</span>
//                   </li>
//                   <li>
//                     <img src={tick} alt="" />{' '}
//                     <span>Process is fast and simple</span>
//                   </li>
//                   <li>
//                     <img src={tick} alt="" />{' '}
//                     <span>Receive expert medical service</span>
//                   </li>
//                   <li>
//                     <img src={tick} alt="" /> <span>Cupping therapy</span>
//                   </li>
//                   <li>
//                     <img src={tick} alt="" /> <span>Walk-ins welcome</span>
//                   </li>
//                 </ul>
//               </div>

//               <a
//                 className="btnPrimaryLarge"
//                 style={{ background: '#f00' }}
//                 href="https://vanburenurgentcarecenter.com/vbuc-checkin/"
//               >
//                 COVID-19 Testing Available!
//               </a>

//               <p className="checkInPara">
//                 Once you&#8217;re registered, you will be sent an email
//                 confirming your check in.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     )
//   }
// }

// export default SectionBanner
