import React from 'react'
import NavBar from '../components/navBar'
import Footer from '../components/footer'
import SectionBanner from '../components/sectionBanner'
import Testimonials from '../components/testimonials'
import SectionDetailsHome from '../components/sectionDetailsHome'
import SecondaryCatalog from '../components/secondaryCatalog'

const Home = () => {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <SectionBanner></SectionBanner>
      <Testimonials></Testimonials>
      <SectionDetailsHome></SectionDetailsHome>
      <SecondaryCatalog></SecondaryCatalog>
      <Footer></Footer>
    </React.Fragment>
  )
}

export default Home

// const Home = () => {
//   return (
//     <React.Fragment>
//       <NavBar></NavBar>
//       <SectionBanner></SectionBanner>
//       <Testimonials></Testimonials>
//       <SectionDetailsHome></SectionDetailsHome>

//       <SecondaryCatalog></SecondaryCatalog>
//       <Footer></Footer>
//     </React.Fragment>
//   )
// }

// export default Home
