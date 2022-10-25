import React from 'react'
import Img from '../images/cupping-below.svg'

const CuppingImage = () => {
  return (
    <React.Fragment>
      <section className="parralax cupping">
        <div className="container-fluid">
          <div className="display-image-front-flex text-center">
            <h1 className="cuppingText">
              CUPPING
              <hr />
            </h1>
          </div>
        </div>
      </section>
      <img src={Img} alt="" className="below-cupping-image" />
    </React.Fragment>
  )
}

export default CuppingImage

// class CuppingImage extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <section className="parralax cupping">
//           <div className="container-fluid">
//             <div className="display-image-front-flex text-center">
//               <h1 className="cuppingText">
//                 CUPPING
//                 <hr />
//               </h1>
//             </div>
//           </div>
//         </section>
//         <img src={Img} alt="" className="below-cupping-image" />
//       </React.Fragment>
//     )
//   }
// }

// export default CuppingImage
