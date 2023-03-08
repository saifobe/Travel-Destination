import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Tours from '../tours/Tours'
const data = require("../../data/db.json")

function Home() {
  return (
    <div>
        <Header/>
        <Tours arrData={data}/>
        <Footer/>
    </div>
  )
}
export default Home;

