import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../../data/db.json'
import './TourDetails.css'

function TourDetails() {
  const params = useParams();
  const details = data.filter(item => item.id === params.id)[0]
  const [showLines,setShowLines] = useState(false);
  function onClickBtn(){
    showLines ? setShowLines(false) : setShowLines(true)
  } 

  // condition ? return this statment if true : return this statment if false
  return (
    
    <>
     <h3 className='name'>{details.name}</h3>
     <p className='price'>Price:{details.price}</p>
    <img src={details.image} alt={details.name} className='img'></img>
    <div className='pragraph'>
    <p className={showLines ? '' :'showLess' }>{details.info}</p>
    <button onClick={onClickBtn} className='btn'>{showLines ? "Read less" : "Read more"}</button>
    </div>
    </>
    
  )
}

export default TourDetails;
