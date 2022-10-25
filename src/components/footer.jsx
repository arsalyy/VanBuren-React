import React from 'react'
import { Facebook, Twitter, Google } from 'react-bootstrap-icons'

const Footer = () => {
  return (
    <footer className="p-5 bg-white text-dark fixed-footer">
      <div className="container">
        <ul
          style={{ margin: 'auto' }}
          className="d-lg-flex footer-list justify-content-between align-items-center"
        >
          <li>
            <a className="footer-items text-dark" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="footer-items text-dark" href="/services&pricing">
              Services & Pricing
            </a>
          </li>
          <li>
            <a className="footer-items text-dark" href="/whychoosevbuc">
              Why Choose VBUC
            </a>
          </li>
          <li>
            <a className="footer-items text-dark" href="/insuranceaccepted">
              Insurance Accepted
            </a>
          </li>
          <li>
            <a className="footer-items text-dark" href="#">
              Blog
            </a>
          </li>
          <li>
            <a
              className="footer-items text-dark"
              href="https://mycw16.eclinicalweb.com/portal6762/jsp/100mp/login_otp.jsp"
              target="_blank"
              rel="noreferrer"
            >
              Patient Portal
            </a>
          </li>
          <li>
            <a
              className="footer-items text-dark"
              href="https://mycw16.eclinicalweb.com/portal6762/jsp/100mp/login_otp.jsp"
              target="_blank"
              rel="noreferrer"
            >
              Pay My Bill
            </a>
          </li>
          <li>
            <a className="footer-items text-dark" href="/cupping">
              Cupping
            </a>
          </li>

          <a
            className="h4 social-links"
            href="https://www.facebook.com/VanBurenUrgentCareCenter/?ref=br_rs"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-facebook text-dark mx-1">
              <Facebook></Facebook>
            </i>
          </a>
          <a
            className="h4 social-links"
            href="https://twitter.com/vanburenurgent"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-twitter text-dark mx-1">
              <Twitter></Twitter>
            </i>
          </a>
          <a
            className="h4 social-links"
            href="https://currents.google.com/105474163644435607060"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-google text-dark mx-1">
              <Google></Google>
            </i>
          </a>
        </ul>
      </div>
    </footer>
  )
}

export default Footer

// class Footer extends React.Component {
//   render() {
//     return (
//       <footer className="p-5 bg-white text-dark fixed-footer">
//         <div className="container">
//           <ul
//             style={{ margin: 'auto' }}
//             className="d-lg-flex footer-list justify-content-between align-items-center"
//           >
//             <li>
//               <a className="footer-items text-dark" href="/">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a className="footer-items text-dark" href="/services&pricing">
//                 Services & Pricing
//               </a>
//             </li>
//             <li>
//               <a className="footer-items text-dark" href="/whychoosevbuc">
//                 Why Choose VBUC
//               </a>
//             </li>
//             <li>
//               <a className="footer-items text-dark" href="/insuranceaccepted">
//                 Insurance Accepted
//               </a>
//             </li>
//             <li>
//               <a className="footer-items text-dark" href="#">
//                 Blog
//               </a>
//             </li>
//             <li>
//               <a
//                 className="footer-items text-dark"
//                 href="https://mycw16.eclinicalweb.com/portal6762/jsp/100mp/login_otp.jsp"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 Patient Portal
//               </a>
//             </li>
//             <li>
//               <a
//                 className="footer-items text-dark"
//                 href="https://mycw16.eclinicalweb.com/portal6762/jsp/100mp/login_otp.jsp"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 Pay My Bill
//               </a>
//             </li>
//             <li>
//               <a className="footer-items text-dark" href="/cupping">
//                 Cupping
//               </a>
//             </li>

//             <a
//               className="h4 social-links"
//               href="https://www.facebook.com/VanBurenUrgentCareCenter/?ref=br_rs"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <i className="bi bi-facebook text-dark mx-1">
//                 <Facebook></Facebook>
//               </i>
//             </a>
//             <a
//               className="h4 social-links"
//               href="https://twitter.com/vanburenurgent"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <i className="bi bi-twitter text-dark mx-1">
//                 <Twitter></Twitter>
//               </i>
//             </a>
//             <a
//               className="h4 social-links"
//               href="https://currents.google.com/105474163644435607060"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <i className="bi bi-google text-dark mx-1">
//                 <Google></Google>
//               </i>
//             </a>
//           </ul>
//         </div>
//       </footer>
//     )
//   }
// }

// export default Footer
