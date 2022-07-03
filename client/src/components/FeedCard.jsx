import React from 'react'

const FeedCard = () => {
  return (
    <div class="card" style={{
        width:'18rem'
    }}>
    <div class="card-body">
        <h5 class="card-title">Home Name</h5>
        <h6 class="card-subtitle mb-2 text-muted">Home Address</h6>
        <h6>User Name</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="card-link">Home Link</a>
    </div>
    </div>
  )
}

export default FeedCard