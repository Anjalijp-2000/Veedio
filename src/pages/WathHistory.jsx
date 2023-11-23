import React from 'react'
import { Link } from 'react-router-dom'

function WathHistory() {
  return (
    <>
    <div className="container d-flex justify-content-between p-5">
      <h3>Watch History</h3>
     <Link to={'/home'} style={{textDecoration:'none', marginLeft:'50%', padding:'2rem', color:'white'}}><i class="fa-solid fa-arrow-left fa-beat me-2"></i>Back to Home </Link>
    </div>
    <table className="table mt-5 mb-5 container">
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Time Stamp</th>
        </tr>
      </thead>
      <tbody>
       <tr>
          <th>1</th>
          <th>kanban</th>
          <th><a href="https://fontawesome.com/">https://fontawesome.com/</a></th>
          <th>04/03/23</th>
       </tr>
      </tbody>
    </table>
    
    </>
  )
}

export default WathHistory