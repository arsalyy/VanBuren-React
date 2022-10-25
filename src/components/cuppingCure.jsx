import React from 'react'

const CuppingCure = () => {
  return (
    <section className="cupping-cure">
      <h2 className="cupping-cure-heading">
        Experience a Better Quality of Life with Cupping
      </h2>
      <br />
      <p className="cupping-cure-text">
        Cupping isn’t just for super athletes like Michael Phelps and
        celebrities like Kim Kardashian and Jennifer Aniston. Cupping is a
        practice that can help rejuvenate your entire body. It has been known to
        improve energy, remove pain, and even cause people to no longer have
        allergies. Having a cupping procedure done a few times a year can
        drastically change your overall well-being.
        <br />
        <br />
        How Does It Work: The procedure involves suctioning glass jars to the
        skin at certain trigger points or muscle in order to decrease muscle
        tension and increasing blood flow. This relaxing of muscle tension
        reduces pain while the increase blood flow allows for areas to get
        natural nutrients from the body more concentrated and quicker.
        <br />
        <br />
        Among others, cupping therapy may help with the following conditions:
      </p>

      <div className="cupping-cure-text-points">
        <ul className="cupping-cure-ul">
          <li>Back, Knee, and Joint Pain</li>
          <li>Injury Recover</li>
          <li>Increase Overall Well-Being and Quality of Life</li>
          <li>Gastrointestinal Issues</li>
          <li>Shingles</li>
          <li>Arthritis</li>
          <li>Facial Paralysis</li>
          <li>Cough and Dyspnea</li>
          <li>Acne</li>
          <li>Lumbar Disc Herniation</li>
          <li>Cervical Spondylosis</li>
        </ul>
      </div>

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

export default CuppingCure

// class CuppingCure extends React.Component {
//   render() {
//     return (
//       <section className="cupping-cure">
//         <h2 className="cupping-cure-heading">
//           Experience a Better Quality of Life with Cupping
//         </h2>
//         <br />
//         <p className="cupping-cure-text">
//           Cupping isn’t just for super athletes like Michael Phelps and
//           celebrities like Kim Kardashian and Jennifer Aniston. Cupping is a
//           practice that can help rejuvenate your entire body. It has been known
//           to improve energy, remove pain, and even cause people to no longer
//           have allergies. Having a cupping procedure done a few times a year can
//           drastically change your overall well-being.
//           <br />
//           <br />
//           How Does It Work: The procedure involves suctioning glass jars to the
//           skin at certain trigger points or muscle in order to decrease muscle
//           tension and increasing blood flow. This relaxing of muscle tension
//           reduces pain while the increase blood flow allows for areas to get
//           natural nutrients from the body more concentrated and quicker.
//           <br />
//           <br />
//           Among others, cupping therapy may help with the following conditions:
//         </p>

//         <div className="cupping-cure-text-points">
//           <ul className="cupping-cure-ul">
//             <li>Back, Knee, and Joint Pain</li>
//             <li>Injury Recover</li>
//             <li>Increase Overall Well-Being and Quality of Life</li>
//             <li>Gastrointestinal Issues</li>
//             <li>Shingles</li>
//             <li>Arthritis</li>
//             <li>Facial Paralysis</li>
//             <li>Cough and Dyspnea</li>
//             <li>Acne</li>
//             <li>Lumbar Disc Herniation</li>
//             <li>Cervical Spondylosis</li>
//           </ul>
//         </div>

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

// export default CuppingCure
