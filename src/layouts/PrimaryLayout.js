import React from 'react'
import Footer from "../components/Footer"
import Header from "../components/Header"

const PrimaryLayout =(props)=> (
  <div>
    <Header></Header>
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-xs-6">
          {props.children}
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
);

export default PrimaryLayout
