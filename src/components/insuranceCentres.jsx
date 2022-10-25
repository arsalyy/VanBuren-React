import React from 'react'

class InsuranceCentres extends React.Component {
  state = {
    btnName: 'See More',
  }

  handleClick = () => {
    let { btnName } = this.state

    if (btnName === 'See More') {
      btnName = 'See Less'
      document.getElementById('additional').style.display = ''
    } else {
      btnName = 'See More'
      document.getElementById('additional').style.display = 'none'
    }

    this.setState({ btnName })
  }

  render() {
    return (
      <section className="sectionDetails pageFirstSection">
        <div className="container">
          <div className="sectionHeading">
            <h2>Insurance Accepted</h2>
            <span className="highlight1"></span>
            <p>Insurance accepted here at VBUC</p>
          </div>

          <div className="sectionDetailsSearchBar">
            <input
              id="insuranceSearchBar"
              type="text"
              className="form-control"
              placeholder="Search through our accepted Insurances"
              title="Search Accepted Insurances"
            />
          </div>

          <div className="sectionDetailsInsurance insuranceListParent">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="insuranceList">AARP</div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="insuranceList">AETNA</div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="insuranceList">ALLIANCE HEALTH AND LIFE</div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="insuranceList">ALLIED</div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="insuranceList">AMERIHEALTH</div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="insuranceList">AMERIPAN</div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="insuranceList">ASR</div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="insuranceList">ASSURANT HEALTH</div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="insuranceList">BANKERS FIDELITY</div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="insuranceList">
                  BENEFIT ADMINISTRATIVE SYSTEMS
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="insuranceList">BLUE CARE NETWORK</div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="insuranceList">BLUE CROSS BLUE SHIELD</div>
              </div>

              <div id="additional" style={{ display: 'none' }}>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="insuranceList">BLUE CROSS COMPLETE</div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="insuranceList">CHAMPVA</div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="insuranceList">CIGNA</div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="insuranceList">COFINITY</div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="insuranceList">CORESOURCE</div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="insuranceList">GEHA</div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="insuranceList">GOLDEN RULE</div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="insuranceList">HAP AND HAP MIDWEST</div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="insuranceList">
                      HARBOR CHOICE AND HEALTH
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="insuranceList">HEALTH PARTNERS</div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="insuranceList">HEALTH PLUS</div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="insuranceList">HUMANA</div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="insuranceList">KAISER</div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="insuranceList">
                      KEY BENEFIT ADMINISTRATORS
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="insuranceList">MCLAREN HEALTH</div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="insuranceList">MEDICAID OF MICHIGAN</div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="insuranceList">MEDICARE OF MICHIGAN</div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="insuranceList">MERIDIAN</div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="insuranceList">MERITAIN</div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="insuranceList">
                      MICHIGAN COMPLETE HEALTH
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="insuranceList">MOLINA</div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="insuranceList">NGS CORESOURCE</div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="insuranceList">NIPPON LIFE BENEITS</div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="insuranceList">PAI</div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="insuranceList">PHCS</div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="insuranceList">POMCO</div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="insuranceList">PRIORITY HEALTH</div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="insuranceList">PRAILROAD MEDICARE</div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="insuranceList">
                      REGENCY EMPLOYEE BENEFIT
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="insuranceList">SEDGWICK WORK COMP</div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="insuranceList">TOTAL HEALTH CARE</div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="insuranceList">TRANSAMERICA</div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="insuranceList">TRICARE</div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="insuranceList">UNITED HEALTH CARE</div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="insuranceList">UMR</div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="insuranceList">
                      UNITED AMERICAN INSURANCE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center col-md-12 sectionSeeMore">
            <a
              id="cmore"
              className="btnInsurance btnSeeMoreInsurances"
              style={{ textDecoration: 'none' }}
              onClick={this.handleClick}
            >
              {this.state.btnName}
            </a>
          </div>

          <div className="text-center">
            <p>
              <strong>Don't see your insurance?</strong>
            </p>
            <p>
              See our reasonable Prices and Services{' '}
              <a href="/services&pricing"> here</a>
            </p>
          </div>

          <hr className="full-width-no-margin"></hr>
        </div>
      </section>
    )
  }
}

export default InsuranceCentres
