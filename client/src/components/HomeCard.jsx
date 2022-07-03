import React from 'react'
import ct from '../images/undraw_under_construction_-46-pa.svg'
import { NavLink , useParams} from 'react-router-dom'
const HomeCard = () => {
    const {area} = useParams();
  return (
    <div class="card" style={{
        width:'18rem'
    }}>
        <img src={ct} class="card-img-top" alt="" style={{
            height : '100%',
            width:'100%'
        }}/>
        <div class="card-body">
            <h5 class="card-title">Home Name</h5>
            <h6>Home Address</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink to={`/home/${'12456'}`}  >More</NavLink>
        </div>
    </div>
  )
}

export default HomeCard