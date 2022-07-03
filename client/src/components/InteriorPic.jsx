import React from 'react'

import ct from '../images/undraw_under_construction_-46-pa.svg'
import { NavLink , useParams} from 'react-router-dom'
const InteriorPic = () => {
  return (
    <div class="card" style={{
        width:'18rem'
    }}>
        <img src={ct} class="card-img-top" alt="" style={{
            height : '100%',
            width:'100%'
        }}/>
        <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
  )
}

export default InteriorPic