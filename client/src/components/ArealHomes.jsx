import React from 'react'
import { useParams } from 'react-router-dom'
import HomeCard from './HomeCard';
const ArealHomes = () => {

    const {area} = useParams();

  return (
    <div style={{
        padding:'1rem'
    }}>
    <h2 > Homes according to {area}</h2>
    <div class="container">
        <div class="row">
          <div class="col-3" style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            padding:'.5rem'
          }}>
            <HomeCard />
          </div>
          <div class="col-3" style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            padding:'.5rem'
          }}>
            <HomeCard />
          </div>
          <div class="col-3" style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            padding:'.5rem'
          }}>
            <HomeCard />
          </div>
          <div class="col-3" style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            padding:'.5rem'
          }}>
            <HomeCard />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default ArealHomes