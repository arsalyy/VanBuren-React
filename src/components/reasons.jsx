import React from 'react'
import Img1 from '../images/why1.png'
import Img2 from '../images/why2.png'
import Img3 from '../images/why3.png'
import Img4 from '../images/why4.png'
import Img5 from '../images/why5.png'
import Img6 from '../images/why6.png'

const Reasons = () => {
  return (
    <section className="sectionDetails pb-0 pt-5">
      <div className="container">
        <div className="sectionHeading">
          <p>
            The real reason so many people are chossing the VBUC experience is
            because:
          </p>
        </div>

        <div className="sectionDeatilsServices pt-5">
          <div className="row">
            <div className="col-lg-6 info-blocks  autoHeight">
              <img src={Img1} alt="" className="icon-info-blocks" />
              <div className="info-blocks-in">
                <h3>Superior Medical Care</h3>
                <p style={{ color: '#B3B1B1' }}>
                  When it comes to your health you don&#8217;t just want
                  service, you want the BEST service. You want to make sure that
                  you get the professional, compassionate care you need when
                  getting better just can&#8217;t wait. That is why our patients
                  keep coming back to us.
                </p>
              </div>
            </div>

            <div className="col-lg-6 info-blocks autoHeight">
              <img src={Img2} alt="" className="icon-info-blocks" />
              <div className="info-blocks-in">
                <h3>Best Prices Around</h3>
                <p style={{ color: '#B3B1B1' }}>
                  When you don&#8217;t have insurance, getting the proper health
                  care can be stressful. We are all about providing the best
                  quality care before anything else. That is why our prices have
                  remained the same for nearly a decade, despite the rising cost
                  of medical fees and inflation that have caused other urgent
                  cares to raise prices.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 info-blocks  autoHeight">
              <img src={Img3} alt="" className="icon-info-blocks" />
              <div className="info-blocks-in">
                <h3>Low Wait Time</h3>
                <p style={{ color: '#B3B1B1' }}>
                  The average wait time for our patients is 15 minutes and can
                  range anywhere from 5 min to forty-five minutes. Our patients
                  tell us all the time how great our wait time is compared to
                  other places they have been, and that is just one of the
                  reasons they keep coming back to us.
                </p>
              </div>
            </div>

            <div className="col-lg-6 info-blocks autoHeight">
              <img src={Img4} alt="" className="icon-info-blocks" />
              <div className="info-blocks-in">
                <h3>No Appointment Needed</h3>
                <p style={{ color: '#B3B1B1' }}>
                  Our highly convenient hours of operation and walk in service
                  says to our patients, &#8220;If you need help now, get it
                  right now&#8221;. No person should have to wait to receive
                  medical care in their time of need. We are all about your
                  convenience.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 info-blocks autoHeight">
              <img src={Img5} alt="" className="icon-info-blocks" />
              <div className="info-blocks-in">
                <h3>Wide Range of Services</h3>
                <p style={{ color: '#B3B1B1' }}>
                  From geriatrics to pediatrics we do it all. If it is not
                  immediately life threatening but you can&#8217;t wait until
                  the next day to see your PCP or you simply don&#8217;t have
                  one, we will take care of you.
                </p>
              </div>
            </div>

            <div className="col-lg-6 info-blocks autoHeight">
              <img src={Img6} alt="" className="icon-info-blocks" />
              <div className="info-blocks-in">
                <h3>Simple and Easy</h3>
                <p style={{ color: '#B3B1B1' }}>
                  When you go to a medical clinic you don&#8217;t want a long
                  check in process that has you jumping through hoops. We work
                  with our patients to make this process as simple as possible.
                  See our online check-in option to make the process even more
                  convenient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reasons

// class Reasons extends React.Component {
//   render() {
//     return (
//       <section className="sectionDetails pb-0 pt-5">
//         <div className="container">
//           <div className="sectionHeading">
//             <p>
//               The real reason so many people are chossing the VBUC experience is
//               because:
//             </p>
//           </div>

//           <div className="sectionDeatilsServices pt-5">
//             <div className="row">
//               <div className="col-lg-6 info-blocks  autoHeight">
//                 <img src={Img1} alt="" className="icon-info-blocks" />
//                 <div className="info-blocks-in">
//                   <h3>Superior Medical Care</h3>
//                   <p style={{ color: '#B3B1B1' }}>
//                     When it comes to your health you don&#8217;t just want
//                     service, you want the BEST service. You want to make sure
//                     that you get the professional, compassionate care you need
//                     when getting better just can&#8217;t wait. That is why our
//                     patients keep coming back to us.
//                   </p>
//                 </div>
//               </div>

//               <div className="col-lg-6 info-blocks autoHeight">
//                 <img src={Img2} alt="" className="icon-info-blocks" />
//                 <div className="info-blocks-in">
//                   <h3>Best Prices Around</h3>
//                   <p style={{ color: '#B3B1B1' }}>
//                     When you don&#8217;t have insurance, getting the proper
//                     health care can be stressful. We are all about providing the
//                     best quality care before anything else. That is why our
//                     prices have remained the same for nearly a decade, despite
//                     the rising cost of medical fees and inflation that have
//                     caused other urgent cares to raise prices.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="row">
//               <div className="col-lg-6 info-blocks  autoHeight">
//                 <img src={Img3} alt="" className="icon-info-blocks" />
//                 <div className="info-blocks-in">
//                   <h3>Low Wait Time</h3>
//                   <p style={{ color: '#B3B1B1' }}>
//                     The average wait time for our patients is 15 minutes and can
//                     range anywhere from 5 min to forty-five minutes. Our
//                     patients tell us all the time how great our wait time is
//                     compared to other places they have been, and that is just
//                     one of the reasons they keep coming back to us.
//                   </p>
//                 </div>
//               </div>

//               <div className="col-lg-6 info-blocks autoHeight">
//                 <img src={Img4} alt="" className="icon-info-blocks" />
//                 <div className="info-blocks-in">
//                   <h3>No Appointment Needed</h3>
//                   <p style={{ color: '#B3B1B1' }}>
//                     Our highly convenient hours of operation and walk in service
//                     says to our patients, &#8220;If you need help now, get it
//                     right now&#8221;. No person should have to wait to receive
//                     medical care in their time of need. We are all about your
//                     convenience.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="row">
//               <div className="col-lg-6 info-blocks autoHeight">
//                 <img src={Img5} alt="" className="icon-info-blocks" />
//                 <div className="info-blocks-in">
//                   <h3>Wide Range of Services</h3>
//                   <p style={{ color: '#B3B1B1' }}>
//                     From geriatrics to pediatrics we do it all. If it is not
//                     immediately life threatening but you can&#8217;t wait until
//                     the next day to see your PCP or you simply don&#8217;t have
//                     one, we will take care of you.
//                   </p>
//                 </div>
//               </div>

//               <div className="col-lg-6 info-blocks autoHeight">
//                 <img src={Img6} alt="" className="icon-info-blocks" />
//                 <div className="info-blocks-in">
//                   <h3>Simple and Easy</h3>
//                   <p style={{ color: '#B3B1B1' }}>
//                     When you go to a medical clinic you don&#8217;t want a long
//                     check in process that has you jumping through hoops. We work
//                     with our patients to make this process as simple as
//                     possible. See our online check-in option to make the process
//                     even more convenient.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     )
//   }
// }

// export default Reasons
