import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './pages/home'
import ServicesAndPricing from './pages/servicesAndPricing'
import WhyChooseVBUC from './pages/whyChooseVBUC'
import InsuranceAccepted from './pages/insuranceAccepted'
import Cupping from './pages/cupping'
import './App.css'
import './style.css'

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/services&pricing" exact component={ServicesAndPricing} />
        <Route path="/whychoosevbuc" exact component={WhyChooseVBUC} />
        <Route path="/insuranceaccepted" exact component={InsuranceAccepted} />
        <Route path="/cupping" exact component={Cupping} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    </React.Fragment>
  )
}

export default App
