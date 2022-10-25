import React from 'react'
import image1 from '../images/logo.png'
import image2 from '../images/check-in.png'

const NavBar = () => {
  const handleDropDownToggle = () => {
    document.getElementById('myDropdown').classList.toggle('show')
  }

  return (
    <header className="fixed-header">
      <nav className="navbar navbar-default">
        <div className="container-fluid noPadding noMargin">
          <div className="navbar-header">
            <div className="dropdown ">
              <button className="dropbtn">
                <svg
                  onClick={handleDropDownToggle}
                  xmlns="http://www.w3.org/2000/svg"
                  className="custom-btn"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <div id="myDropdown" className="dropdown-content">
                <a href="/">Home</a>
                <a href="/services&pricing">Services & Pricing</a>
                <a href="/whychoosevbuc">Why Choose VBUC</a>
                <a href="/insuranceaccepted">Insurance Accepted</a>
                <a href="#">Blog</a>
                <a
                  href="https://mycw16.eclinicalweb.com/portal6762/jsp/100mp/login_otp.jsp"
                  target="_blank"
                  rel="noreferrer"
                >
                  Patient Portal
                </a>
                <a
                  href="https://mycw16.eclinicalweb.com/portal6762/jsp/100mp/login_otp.jsp"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pay My Bill
                </a>
                <a href="/cupping">Cupping</a>
              </div>
            </div>
            <span className="menuSpan">Menu</span>
            <a className="navbar-brand" href="index.html">
              {' '}
              <img src={image1} alt="VBUC Logo" />
            </a>
          </div>

          <ul className="nav navbar-right">
            <li className="callNowList px-2">
              <span>7 Days A Week</span>
              <h5>10 AM to 10 PM</h5>
            </li>

            <li className="callNowList">
              <div className="checkinButtonClass">
                <a
                  className="btnPrimaryLarge"
                  href={'https://vanburenurgentcarecenter.com/vbuc-checkin/'}
                >
                  <span>Check in Online</span>
                  <img src={image2} alt="" />
                </a>
              </div>
            </li>

            <li className="callNowList">
              <a
                className="btnCallNow btnDirection"
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/maps/dir//Van+Buren+Urgent+Care,+11650+Belleville+Rd.+Suite+101,+Belleville,+MI+48111/@42.2160535,-83.4891883,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x883b50989b086abb:0xb62b6f3c22f86d1d!2m2!1d-83.487026!2d42.216091"
              >
                <div className="callNowText">
                  <span>Get Directions</span>
                  <h5>11650 Belleville Rd Ste. 101</h5>
                </div>
              </a>
            </li>

            <li className="callNowList">
              <a className="btnCallNow" href="tel:734-699-9888">
                <div className="callNowText">
                  <span>Call Now</span>
                  <h5>734-699-9888</h5>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default NavBar

// class NavBar extends React.Component {
//   handleDropDownToggle() {
//     document.getElementById('myDropdown').classList.toggle('show')
//   }

//   render() {
//     return (
//       <header className="fixed-header">
//         <nav className="navbar navbar-default">
//           <div className="container-fluid noPadding noMargin">
//             <div className="navbar-header">
//               <div className="dropdown ">
//                 <button className="dropbtn">
//                   <svg
//                     onClick={this.handleDropDownToggle}
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="custom-btn"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 </button>
//                 <div id="myDropdown" className="dropdown-content">
//                   <a href="/">Home</a>
//                   <a href="/services&pricing">Services & Pricing</a>
//                   <a href="/whychoosevbuc">Why Choose VBUC</a>
//                   <a href="/insuranceaccepted">Insurance Accepted</a>
//                   <a href="#">Blog</a>
//                   <a
//                     href="https://mycw16.eclinicalweb.com/portal6762/jsp/100mp/login_otp.jsp"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     Patient Portal
//                   </a>
//                   <a
//                     href="https://mycw16.eclinicalweb.com/portal6762/jsp/100mp/login_otp.jsp"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     Pay My Bill
//                   </a>
//                   <a href="/cupping">Cupping</a>
//                 </div>
//               </div>
//               <span className="menuSpan">Menu</span>
//               <a className="navbar-brand" href="index.html">
//                 {' '}
//                 <img src={image1} alt="VBUC Logo" />
//               </a>
//             </div>

//             <ul className="nav navbar-right">
//               <li className="callNowList px-2">
//                 <span>7 Days A Week</span>
//                 <h5>10 AM to 10 PM</h5>
//               </li>

//               <li className="callNowList">
//                 <div className="checkinButtonClass">
//                   <a
//                     className="btnPrimaryLarge"
//                     href={'https://vanburenurgentcarecenter.com/vbuc-checkin/'}
//                   >
//                     <span>Check in Online</span>
//                     <img src={image2} alt="" />
//                   </a>
//                 </div>
//               </li>

//               <li className="callNowList">
//                 <a
//                   className="btnCallNow btnDirection"
//                   target="_blank"
//                   rel="noreferrer"
//                   href="https://www.google.com/maps/dir//Van+Buren+Urgent+Care,+11650+Belleville+Rd.+Suite+101,+Belleville,+MI+48111/@42.2160535,-83.4891883,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x883b50989b086abb:0xb62b6f3c22f86d1d!2m2!1d-83.487026!2d42.216091"
//                 >
//                   <div className="callNowText">
//                     <span>Get Directions</span>
//                     <h5>11650 Belleville Rd Ste. 101</h5>
//                   </div>
//                 </a>
//               </li>

//               <li className="callNowList">
//                 <a className="btnCallNow" href="tel:734-699-9888">
//                   <div className="callNowText">
//                     <span>Call Now</span>
//                     <h5>734-699-9888</h5>
//                   </div>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </header>
//     )
//   }
// }

// export default NavBar
