import React from 'react'

const CuppingInfo = () => {
  return (
    <section className="cupping-info">
      <div className="text-center">
        <a href="tel:734-699-9888" className="btnPrimaryLarge">
          Call Now
          <img src="images/cupping-checkin.png" alt="" />
        </a>
        <p className="callNowBelowText">
          Book your appointment for better quality life
        </p>
      </div>
    </section>
  )
}

export default CuppingInfo

// class CuppingInfo extends React.Component {
//   render() {
//     return (
//       <section className="cupping-info">
//         <div className="text-center">
//           <a href="tel:734-699-9888" className="btnPrimaryLarge">
//             Call Now
//             <img src="images/cupping-checkin.png" alt="" />
//           </a>
//           <p className="callNowBelowText">
//             Book your appointment for better quality life
//           </p>
//         </div>
//       </section>
//     )
//   }
// }

// export default CuppingInfo
