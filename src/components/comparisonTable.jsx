import React from 'react'

const ComparisonTable = () => {
  return (
    <section className="sectionDetails comparisonTableSection">
      <div className="container">
        <div className="col-md-12">
          <div className="sectionHeading">
            <h2>When you add it up, the math is simple</h2>
            <span className="highlight2"></span>
          </div>

          <div className="sectionDetailsServices">
            <table className="table table-striped borderless">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Van Buren Urgent Care</th>
                  <th scope="col">Competitor Urgent Care</th>
                  <th scope="col">ER</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Price</th>
                  <td>
                    <span className="dot"></span>
                  </td>
                  <td>
                    <span className="dot"></span>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">Wait Time </th>
                  <td>
                    <span className="dot"></span>
                  </td>
                  <td>
                    <span className="dot"></span>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">Quality Medical Care</th>
                  <td>
                    <span className="dot"></span>
                  </td>
                  <td></td>
                  <td>
                    <span className="dot"></span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Cleanliness</th>
                  <td>
                    <span className="dot"></span>
                  </td>
                  <td></td>
                  <td>
                    <span className="dot"></span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Caring Medical Staff</th>
                  <td>
                    <span className="dot"></span>
                  </td>
                  <td></td>
                  <td>
                    <span className="dot"></span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Warm Environment</th>
                  <td>
                    <span className="dot"></span>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">Patient Centered Practice</th>
                  <td className="text-center">
                    <span className="dot"></span>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComparisonTable

// class ComparisonTable extends React.Component {
//   render() {
//     return (
//       <section className="sectionDetails comparisonTableSection">
//         <div className="container">
//           <div className="col-md-12">
//             <div className="sectionHeading">
//               <h2>When you add it up, the math is simple</h2>
//               <span className="highlight2"></span>
//             </div>

//             <div className="sectionDetailsServices">
//               <table className="table table-striped borderless">
//                 <thead>
//                   <tr>
//                     <th scope="col"></th>
//                     <th scope="col">Van Buren Urgent Care</th>
//                     <th scope="col">Competitor Urgent Care</th>
//                     <th scope="col">ER</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <th scope="row">Price</th>
//                     <td>
//                       <span className="dot"></span>
//                     </td>
//                     <td>
//                       <span className="dot"></span>
//                     </td>
//                     <td></td>
//                   </tr>
//                   <tr>
//                     <th scope="row">Wait Time </th>
//                     <td>
//                       <span className="dot"></span>
//                     </td>
//                     <td>
//                       <span className="dot"></span>
//                     </td>
//                     <td></td>
//                   </tr>
//                   <tr>
//                     <th scope="row">Quality Medical Care</th>
//                     <td>
//                       <span className="dot"></span>
//                     </td>
//                     <td></td>
//                     <td>
//                       <span className="dot"></span>
//                     </td>
//                   </tr>
//                   <tr>
//                     <th scope="row">Cleanliness</th>
//                     <td>
//                       <span className="dot"></span>
//                     </td>
//                     <td></td>
//                     <td>
//                       <span className="dot"></span>
//                     </td>
//                   </tr>
//                   <tr>
//                     <th scope="row">Caring Medical Staff</th>
//                     <td>
//                       <span className="dot"></span>
//                     </td>
//                     <td></td>
//                     <td>
//                       <span className="dot"></span>
//                     </td>
//                   </tr>
//                   <tr>
//                     <th scope="row">Warm Environment</th>
//                     <td>
//                       <span className="dot"></span>
//                     </td>
//                     <td></td>
//                     <td></td>
//                   </tr>
//                   <tr>
//                     <th scope="row">Patient Centered Practice</th>
//                     <td className="text-center">
//                       <span className="dot"></span>
//                     </td>
//                     <td></td>
//                     <td></td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </section>
//     )
//   }
// }

// export default ComparisonTable
