import React from 'react'
import NavBar from '../components/navBar'
import SecondaryCatalog from '../components/secondaryCatalog'
import Footer from '../components/footer'
import SectionDetailsSandP from './../components/sectionDetailsSandP'
import Services from '../components/services'
import OtherServices from '../components/otherServices'

const ServicesAndPricing = () => {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <SectionDetailsSandP></SectionDetailsSandP>
      <Services></Services>
      <OtherServices></OtherServices>
      <SecondaryCatalog></SecondaryCatalog>
      <Footer></Footer>
    </React.Fragment>
  )
}

export default ServicesAndPricing

// class ServicesAndPricing extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <NavBar></NavBar>
//         <SectionDetailsSandP></SectionDetailsSandP>
//         <Services></Services>
//         <OtherServices></OtherServices>
//         <SecondaryCatalog></SecondaryCatalog>
//         <Footer></Footer>
//       </React.Fragment>
//     )
//   }
// }

// export default ServicesAndPricing
