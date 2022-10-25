import React from 'react'
import ComparisonTable from '../components/comparisonTable'
import Footer from '../components/footer'
import NavBar from '../components/navBar'
import Reasons from '../components/reasons'
import SecondaryCatalog from '../components/secondaryCatalog'
import SectionDetailsWhyChooseVBUC from '../components/sectionDetailsWhyChooseVBUC'
import Testimonials from '../components/testimonials'

const WhyChooseVBUC = () => {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <SectionDetailsWhyChooseVBUC></SectionDetailsWhyChooseVBUC>
      <ComparisonTable></ComparisonTable>
      <Reasons></Reasons>
      <Testimonials></Testimonials>
      <SecondaryCatalog></SecondaryCatalog>
      <Footer></Footer>
    </React.Fragment>
  )
}

export default WhyChooseVBUC

// class WhyChooseVBUC extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <NavBar></NavBar>
//         <SectionDetailsWhyChooseVBUC></SectionDetailsWhyChooseVBUC>
//         <ComparisonTable></ComparisonTable>
//         <Reasons></Reasons>
//         <Testimonials></Testimonials>
//         <SecondaryCatalog></SecondaryCatalog>
//         <Footer></Footer>
//       </React.Fragment>
//     )
//   }
// }

// export default WhyChooseVBUC
