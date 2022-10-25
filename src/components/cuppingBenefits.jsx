import React from 'react'
import Img1 from '../images/display-icon1.svg'
import Img2 from '../images/display-icon2.svg'
import Img3 from '../images/display-icon3.svg'
import Img4 from '../images/display-icon4.svg'

const CuppingBenefits = () => {
  return (
    <section className="cupping-benefits">
      <div className="cupping-benefits-div"></div>

      <div className="text-center margin-top-for-back-image">
        <h2 className="cupping-benefits-heading">Benfits of Cupping</h2>
      </div>
      <br />

      <p className="cupping-benefits-text">
        Cupping is a great way to loosen tight muscles, help with back pain,
        neck pain, shoulder pain, and leg pain, stop or reduce upper respiratory
        symptoms, colds, the flu, and boosts immunity.
      </p>

      <section className="fonts-sec">
        <div className="display-icons-flex">
          <div className="display-icon">
            <img
              className="display-icon-image"
              src={Img1}
              alt=""
              width="138px"
            />
            <h3 className="icons-text">Relax Muscles</h3>
          </div>

          <div className="display-icon">
            <img
              className="display-icon-image"
              src={Img2}
              alt=""
              width="138px"
            />
            <h3 className="icons-text">Improve Blood Circulation</h3>
          </div>

          <div className="display-icon">
            <img
              className="display-icon-image"
              src={Img3}
              alt=""
              width="138px"
            />
            <h3 className="icons-text">Active the Lymphatic System</h3>
          </div>

          <div className="display-icon">
            <img
              className="display-icon-image"
              src={Img4}
              alt=""
              width="138px"
            />
            <h3 className="icons-text">Calm the Nervous System</h3>
          </div>
        </div>

        <div className="fonts-sec-div"></div>
      </section>
    </section>
  )
}

export default CuppingBenefits

// class CuppingBenefits extends React.Component {
//   render() {
//     return (
//       <section className="cupping-benefits">
//         <div className="cupping-benefits-div"></div>

//         <div className="text-center margin-top-for-back-image">
//           <h2 className="cupping-benefits-heading">Benfits of Cupping</h2>
//         </div>
//         <br />

//         <p className="cupping-benefits-text">
//           Cupping is a great way to loosen tight muscles, help with back pain,
//           neck pain, shoulder pain, and leg pain, stop or reduce upper
//           respiratory symptoms, colds, the flu, and boosts immunity.
//         </p>

//         <section className="fonts-sec">
//           <div className="display-icons-flex">
//             <div className="display-icon">
//               <img
//                 className="display-icon-image"
//                 src={Img1}
//                 alt=""
//                 width="138px"
//               />
//               <h3 className="icons-text">Relax Muscles</h3>
//             </div>

//             <div className="display-icon">
//               <img
//                 className="display-icon-image"
//                 src={Img2}
//                 alt=""
//                 width="138px"
//               />
//               <h3 className="icons-text">Improve Blood Circulation</h3>
//             </div>

//             <div className="display-icon">
//               <img
//                 className="display-icon-image"
//                 src={Img3}
//                 alt=""
//                 width="138px"
//               />
//               <h3 className="icons-text">Active the Lymphatic System</h3>
//             </div>

//             <div className="display-icon">
//               <img
//                 className="display-icon-image"
//                 src={Img4}
//                 alt=""
//                 width="138px"
//               />
//               <h3 className="icons-text">Calm the Nervous System</h3>
//             </div>
//           </div>

//           <div className="fonts-sec-div"></div>
//         </section>
//       </section>
//     )
//   }
// }

// export default CuppingBenefits
