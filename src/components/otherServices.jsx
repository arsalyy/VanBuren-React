import React from 'react'
import Img1 from '../images/infoblock1.png'
import Img2 from '../images/infoblock2.png'
import Img3 from '../images/infoblock3.png'
import Img4 from '../images/infoblock4.png'
import Img5 from '../images/infoblock5.png'
import Img6 from '../images/infoblock6.png'
import Img7 from '../images/infoblock7.png'
import Img8 from '../images/infoblock8.png'
import Img9 from '../images/infoblock9.png'
import Img10 from '../images/infoblock10.png'
import Img11 from '../images/infoblock11.png'
import Img12 from '../images/infoblock12.png'
import Img13 from '../images/infoblock13.png'

const OtherServices = () => {
  return (
    <section className="sectionServices">
      <div className="container servicesContainer">
        <div className="sectionHeading text-center">
          <h2 className="text-center">Other Services</h2>
        </div>

        <div className="sectionDetailsServices">
          <div className="row">
            <div
              id="otherServicesCol"
              className="col-md-4 col-sm-6 info-blocks"
            >
              <img src={Img1} alt="" className="icon-info-blocks" />
              <div className="info-blocks-in">
                <h3>Blood Pressure Check</h3>
                <p style={{ color: '#B3B1B1' }}>
                  Stay on top of your BP and get detailed advice for quality of
                  life
                </p>
              </div>
            </div>

            <div
              id="otherServicesCol"
              className="col-md-4 col-sm-6 info-blocks"
            >
              <img src={Img2} alt="" className="icon-info-blocks" />
              <div className="info-blocks-in">
                <h3>Suturing and Splinting for Injury</h3>
                <p style={{ color: '#B3B1B1' }}>
                  Get treated for your minor injuries
                </p>
              </div>
            </div>

            <div
              id="otherServicesCol"
              className="col-md-4 col-sm-6 info-blocks"
            >
              <img src={Img3} alt="" className="icon-info-blocks" />
              <div className="info-blocks-in">
                <h3>Wound Care</h3>
                <p style={{ color: '#B3B1B1' }}>
                  Get treated for any kind of wound
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div
              id="otherServicesCol"
              className="col-md-4 col-sm-6 info-blocks"
            >
              <img src={Img4} alt="" className="icon-info-blocks" />
              <div className="info-blocks-in">
                <h3>Drainage of Abscess</h3>
                <p style={{ color: '#B3B1B1' }}>
                  Receive quick and qualified treatment before symptoms get
                  worse
                </p>
              </div>
            </div>

            <div
              id="otherServicesCol"
              className="col-md-4 col-sm-6 info-blocks"
            >
              <img src={Img5} alt="" className="icon-info-blocks" />
              <div className="info-blocks-in">
                <h3>Breathing Treatment</h3>
                <p style={{ color: '#B3B1B1' }}>
                  Get breathing treatment for immediate releif
                </p>
              </div>
            </div>

            <div
              id="otherServicesCol"
              className="col-md-4 col-sm-6 info-blocks"
            >
              <img src={Img6} alt="" className="icon-info-blocks" />
              <div className="info-blocks-in">
                <h3>Accuchecks</h3>
                <p style={{ color: '#B3B1B1' }}>
                  Simple and reliable blood sugar testing
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div
              id="otherServicesCol"
              className="col-md-4 col-sm-6 info-blocks"
            >
              <img src={Img7} alt="" className="icon-info-blocks" />
              <div className="info-blocks-in">
                <h3>STD Testing</h3>
                <p style={{ color: '#B3B1B1' }}>
                  Discreet and quick results for potential STD
                </p>
              </div>
            </div>

            <div
              id="otherServicesCol"
              className="col-md-4 col-sm-6 info-blocks"
            >
              <img src={Img8} alt="" className="icon-info-blocks" />
              <div className="info-blocks-in">
                <h3>Urinalysis</h3>
                <p style={{ color: '#B3B1B1' }}>
                  Get tested for the presence of drugs, disease, etc...
                </p>
              </div>
            </div>

            <div
              id="otherServicesCol"
              className="col-md-4 col-sm-6 info-blocks"
            >
              <img src={Img9} alt="" className="icon-info-blocks" />
              <div className="info-blocks-in">
                <h3>Injection/TB/PPD Testing</h3>
                <p style={{ color: '#B3B1B1' }}>
                  Shots and testing for job requirements
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div
              id="otherServicesCol"
              className="col-md-4 col-sm-6 info-blocks"
            >
              <img src={Img10} alt="" className="icon-info-blocks" />
              <div className="info-blocks-in">
                <h3>Blood Draws</h3>
                <p style={{ color: '#B3B1B1' }}>
                  Get blood draws for drug, STD, infection, and much more...
                </p>
              </div>
            </div>

            <div
              id="otherServicesCol"
              className="col-md-4 col-sm-6 info-blocks"
            >
              <img src={Img11} alt="" className="icon-info-blocks" />
              <div className="info-blocks-in">
                <h3>Migraines and Headaches</h3>
                <p style={{ color: '#B3B1B1' }}>
                  Get instant releif for major head pains and discomfort
                </p>
              </div>
            </div>

            <div
              id="otherServicesCol"
              className="col-md-4 col-sm-6 info-blocks"
            >
              <img src={Img12} alt="" className="icon-info-blocks" />
              <div className="info-blocks-in">
                <h3>Infections</h3>
                <p style={{ color: '#B3B1B1' }}>
                  Get releif and treatment for common infections
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div
              id="otherServicesCol"
              className="col-md-4 col-sm-6 info-blocks"
            >
              <img src={Img13} alt="" className="icon-info-blocks" />
              <div className="info-blocks-in">
                <h3>Treatment for common Illness/Feeling Sick</h3>
                <p style={{ color: '#B3B1B1' }}>
                  Get fast releif for flu and cold
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OtherServices

// class OtherServices extends React.Component {
//   render() {
//     return (
//       <section className="sectionServices">
//         <div className="container servicesContainer">
//           <div className="sectionHeading text-center">
//             <h2 className="text-center">Other Services</h2>
//           </div>

//           <div className="sectionDetailsServices">
//             <div className="row">
//               <div
//                 id="otherServicesCol"
//                 className="col-md-4 col-sm-6 info-blocks"
//               >
//                 <img src={Img1} alt="" className="icon-info-blocks" />
//                 <div className="info-blocks-in">
//                   <h3>Blood Pressure Check</h3>
//                   <p style={{ color: '#B3B1B1' }}>
//                     Stay on top of your BP and get detailed advice for quality
//                     of life
//                   </p>
//                 </div>
//               </div>

//               <div
//                 id="otherServicesCol"
//                 className="col-md-4 col-sm-6 info-blocks"
//               >
//                 <img src={Img2} alt="" className="icon-info-blocks" />
//                 <div className="info-blocks-in">
//                   <h3>Suturing and Splinting for Injury</h3>
//                   <p style={{ color: '#B3B1B1' }}>
//                     Get treated for your minor injuries
//                   </p>
//                 </div>
//               </div>

//               <div
//                 id="otherServicesCol"
//                 className="col-md-4 col-sm-6 info-blocks"
//               >
//                 <img src={Img3} alt="" className="icon-info-blocks" />
//                 <div className="info-blocks-in">
//                   <h3>Wound Care</h3>
//                   <p style={{ color: '#B3B1B1' }}>
//                     Get treated for any kind of wound
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="row">
//               <div
//                 id="otherServicesCol"
//                 className="col-md-4 col-sm-6 info-blocks"
//               >
//                 <img src={Img4} alt="" className="icon-info-blocks" />
//                 <div className="info-blocks-in">
//                   <h3>Drainage of Abscess</h3>
//                   <p style={{ color: '#B3B1B1' }}>
//                     Receive quick and qualified treatment before symptoms get
//                     worse
//                   </p>
//                 </div>
//               </div>

//               <div
//                 id="otherServicesCol"
//                 className="col-md-4 col-sm-6 info-blocks"
//               >
//                 <img src={Img5} alt="" className="icon-info-blocks" />
//                 <div className="info-blocks-in">
//                   <h3>Breathing Treatment</h3>
//                   <p style={{ color: '#B3B1B1' }}>
//                     Get breathing treatment for immediate releif
//                   </p>
//                 </div>
//               </div>

//               <div
//                 id="otherServicesCol"
//                 className="col-md-4 col-sm-6 info-blocks"
//               >
//                 <img src={Img6} alt="" className="icon-info-blocks" />
//                 <div className="info-blocks-in">
//                   <h3>Accuchecks</h3>
//                   <p style={{ color: '#B3B1B1' }}>
//                     Simple and reliable blood sugar testing
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="row">
//               <div
//                 id="otherServicesCol"
//                 className="col-md-4 col-sm-6 info-blocks"
//               >
//                 <img src={Img7} alt="" className="icon-info-blocks" />
//                 <div className="info-blocks-in">
//                   <h3>STD Testing</h3>
//                   <p style={{ color: '#B3B1B1' }}>
//                     Discreet and quick results for potential STD
//                   </p>
//                 </div>
//               </div>

//               <div
//                 id="otherServicesCol"
//                 className="col-md-4 col-sm-6 info-blocks"
//               >
//                 <img src={Img8} alt="" className="icon-info-blocks" />
//                 <div className="info-blocks-in">
//                   <h3>Urinalysis</h3>
//                   <p style={{ color: '#B3B1B1' }}>
//                     Get tested for the presence of drugs, disease, etc...
//                   </p>
//                 </div>
//               </div>

//               <div
//                 id="otherServicesCol"
//                 className="col-md-4 col-sm-6 info-blocks"
//               >
//                 <img src={Img9} alt="" className="icon-info-blocks" />
//                 <div className="info-blocks-in">
//                   <h3>Injection/TB/PPD Testing</h3>
//                   <p style={{ color: '#B3B1B1' }}>
//                     Shots and testing for job requirements
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="row">
//               <div
//                 id="otherServicesCol"
//                 className="col-md-4 col-sm-6 info-blocks"
//               >
//                 <img src={Img10} alt="" className="icon-info-blocks" />
//                 <div className="info-blocks-in">
//                   <h3>Blood Draws</h3>
//                   <p style={{ color: '#B3B1B1' }}>
//                     Get blood draws for drug, STD, infection, and much more...
//                   </p>
//                 </div>
//               </div>

//               <div
//                 id="otherServicesCol"
//                 className="col-md-4 col-sm-6 info-blocks"
//               >
//                 <img src={Img11} alt="" className="icon-info-blocks" />
//                 <div className="info-blocks-in">
//                   <h3>Migraines and Headaches</h3>
//                   <p style={{ color: '#B3B1B1' }}>
//                     Get instant releif for major head pains and discomfort
//                   </p>
//                 </div>
//               </div>

//               <div
//                 id="otherServicesCol"
//                 className="col-md-4 col-sm-6 info-blocks"
//               >
//                 <img src={Img12} alt="" className="icon-info-blocks" />
//                 <div className="info-blocks-in">
//                   <h3>Infections</h3>
//                   <p style={{ color: '#B3B1B1' }}>
//                     Get releif and treatment for common infections
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="row justify-content-center">
//               <div
//                 id="otherServicesCol"
//                 className="col-md-4 col-sm-6 info-blocks"
//               >
//                 <img src={Img13} alt="" className="icon-info-blocks" />
//                 <div className="info-blocks-in">
//                   <h3>Treatment for common Illness/Feeling Sick</h3>
//                   <p style={{ color: '#B3B1B1' }}>
//                     Get fast releif for flu and cold
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

// export default OtherServices
