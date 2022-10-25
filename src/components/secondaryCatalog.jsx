import React from 'react'
import tick from '../images/catalog-tick.png'
import checkIn from '../images/catalog-check-in.png'

const SecondaryCatalog = () => {
  return (
    <section className="secondaryCta">
      <div>
        <h2 className="text-center text-capitalize">
          Quality care without the wait
        </h2>
        <label className="text-center center-block bold">
          When a health need arises, get the convenience of non-scheduled
          walk-in medical care
        </label>

        <div>
          <ul>
            <li id="qualityListItem">
              <img src={tick} alt="-" />
              <span>Receive Expert Medical Service</span>
            </li>
            <li id="qualityListItem">
              <img src={tick} alt="-" />
              <span>Friendly and Caring Medical Staff</span>
            </li>
            <li id="qualityListItem">
              <img src={tick} alt="-" />
              <span>Warm and Inviting Environment</span>
            </li>
            <li id="qualityListItem">
              <img src={tick} alt="-" />
              <span>More affordable than other urgent cares</span>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <a
            style={{ textDecorationLine: 'none' }}
            className="btnSecondaryLarge btnCheckInOnline"
            href="https://vanburenurgentcarecenter.com/vbuc-checkin/"
          >
            Check in Online
            <img src={checkIn} alt="-" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default SecondaryCatalog

// class SecondaryCatalog extends React.Component {
//   render() {
//     return (
//       <section className="secondaryCta">
//         <div>
//           <h2 className="text-center text-capitalize">
//             Quality care without the wait
//           </h2>
//           <label className="text-center center-block bold">
//             When a health need arises, get the convenience of non-scheduled
//             walk-in medical care
//           </label>

//           <div>
//             <ul>
//               <li id="qualityListItem">
//                 <img src={tick} alt="-" />
//                 <span>Receive Expert Medical Service</span>
//               </li>
//               <li id="qualityListItem">
//                 <img src={tick} alt="-" />
//                 <span>Friendly and Caring Medical Staff</span>
//               </li>
//               <li id="qualityListItem">
//                 <img src={tick} alt="-" />
//                 <span>Warm and Inviting Environment</span>
//               </li>
//               <li id="qualityListItem">
//                 <img src={tick} alt="-" />
//                 <span>More affordable than other urgent cares</span>
//               </li>
//             </ul>
//           </div>

//           <div className="text-center">
//             <a
//               style={{ textDecorationLine: 'none' }}
//               className="btnSecondaryLarge btnCheckInOnline"
//               href="https://vanburenurgentcarecenter.com/vbuc-checkin/"
//             >
//               Check in Online
//               <img src={checkIn} alt="-" />
//             </a>
//           </div>
//         </div>
//       </section>
//     )
//   }
// }

// export default SecondaryCatalog
