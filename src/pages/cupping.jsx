import React from 'react'
import CuppingBenefits from '../components/cuppingBenefits'
import CuppingInfo from '../components/cuppingInfo'
import Footer from '../components/footer'
import NavBar from '../components/navBar'
import SecondaryCatalog from '../components/secondaryCatalog'
import CuppingImage from './../components/cuppingImage'
import CuppingCure from '../components/cuppingCure'

const Cupping = () => {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <CuppingImage></CuppingImage>
      <CuppingInfo></CuppingInfo>
      <CuppingBenefits></CuppingBenefits>
      <CuppingCure></CuppingCure>
      <SecondaryCatalog></SecondaryCatalog>
      <Footer></Footer>
    </React.Fragment>
  )
}

export default Cupping

// class Cupping extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <NavBar></NavBar>
//         <CuppingImage></CuppingImage>
//         <CuppingInfo></CuppingInfo>
//         <CuppingBenefits></CuppingBenefits>
//         <CuppingCure></CuppingCure>
//         <SecondaryCatalog></SecondaryCatalog>
//         <Footer></Footer>
//       </React.Fragment>
//     )
//   }
// }

// export default Cupping
