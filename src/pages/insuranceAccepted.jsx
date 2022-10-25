import React from 'react'
import Footer from '../components/footer'
import NavBar from '../components/navBar'
import SecondaryCatalog from '../components/secondaryCatalog'
import InsuranceCentres from './../components/insuranceCentres'

const InsuranceAccepted = () => {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <InsuranceCentres></InsuranceCentres>
      <SecondaryCatalog></SecondaryCatalog>
      <Footer></Footer>
    </React.Fragment>
  )
}

export default InsuranceAccepted

// class InsuranceAccepted extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <NavBar></NavBar>
//         <InsuranceCentres></InsuranceCentres>
//         <SecondaryCatalog></SecondaryCatalog>
//         <Footer></Footer>
//       </React.Fragment>
//     )
//   }
// }

// export default InsuranceAccepted
