import React from 'react'
import FeedCard from './FeedCard'
const Feedback = () => {
  return (
    <div style={{
      height:'100vh',
      width:'100%'
    }}>
      <div style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:'100%'
      }}>
        <div style={{width:'50%',
          border:'1px solid black',
          padding:'1rem',
          margin:'1rem',
          borderRadius:'10px'
        }}>
        <form style={{
          display:'flex',
          width:'100%',
          flexDirection:'column'
        }}>
          <h3>Feedback Form</h3>
          <div class="mb-3" style={{ width:'100%' }}>
            <label for="exampleInputEmail1" class="form-label">Home Name</label>
            <input type="text" name='home_name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            
          </div>
          <div class="mb-3" style={{ width:'100%' }}>
            <label for="exampleInputEmail1" class="form-label">Home Address</label>
            <input type="text" name='home_address' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div class="mb-3" style={{ width:'100%' }}>
            <label for="exampleInputEmail1" class="form-label">Password</label>
            <input type="password" name='password' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className='mb-3'>
          <label for="exampleInputEmail1" class="form-label">Description</label>
            <textarea name='description' class="form-control" placeholder="Leave a comment here" ></textarea>
          </div>
          
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-6" style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            padding:'.5rem'
          }}>
            <FeedCard />
          </div>
          <div class="col-6" style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            padding:'.5rem'
          }}>
            <FeedCard />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Feedback