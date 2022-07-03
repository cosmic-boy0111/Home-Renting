import React from 'react'
import { useParams } from 'react-router-dom'
import home from '../images/undraw_sweet_home_dkhr.svg'
import InteriorPic from './InteriorPic'
const HomeInfo = () => {

    const {id} = useParams();
  return (
    <div style={{
        display:'flex',
        width:'100%',
        height : '100vh',
        flexDirection:'column',
        padding:'1rem'
    }}>
        <div style={{
            display:'flex',
            justifyContent:'space-between',
        }}>
            <div style={{ 
                width:'50%'
             }}>
                <img src={home} alt="" srcset="" style={{
                    width:'80%'
                }}/>
            </div>
            <div style={{ 
                width:'50%',
                display:'flex',
                justifyContent:'center',
                // alignItems:'center',
                flexDirection:'column'
             }}>
                <h3>Home Name</h3>
                <h5>Home Address</h5>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident aspernatur nulla suscipit dolor architecto qui libero doloribus perferendis veniam atque corporis laborum blanditiis voluptate fugiat dicta dolore ducimus molestiae explicabo minima, magni assumenda ad! Iure repellat eligendi maxime recusandae quis sunt accusantium nulla est, quidem minima numquam ullam aliquid animi.
            </div>
        </div>

        <div class="container">
        <div class="row">
          <div class="col-3" style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            padding:'.5rem'
          }}>
            <InteriorPic />
          </div>
          <div class="col-3" style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            padding:'.5rem'
          }}>
            <InteriorPic />
          </div>
          <div class="col-3" style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            padding:'.5rem'
          }}>
            <InteriorPic />
          </div>
          <div class="col-3" style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            padding:'.5rem'
          }}>
            <InteriorPic />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default HomeInfo