import React from 'react'
import { Col, Row ,Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigateByUrl = useNavigate()
  return (
    <>
    <Row className='mt-5 mb-5 align-items-center justify-content-between w-100'>
      <Col></Col>
      <Col lg={4}>
        <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cumque corporis quidem distinctio similique delectus nostrum pariatur veniam excepturi dolore? Voluptate animi rem ab non consequuntur cumque eum veniam itaque.</p>
        <button onClick={()=>navigateByUrl('/home')} className='mt-5 btn  btn-info'>Get Started <i className='fa-solid fa-arrow-right fa-beat ms-2'></i></button>
      </Col>
      <Col></Col>
      <Col lg={6}>
        <img className='img-fluid' src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="Landing" />
      </Col>
    </Row>

    <div className="container mt-5 mb-5 d-flex align-items-center justify-content-center flex-column">
      <h3>Features</h3>
<div className='cards mt-5 mb-5 d-flex align-items-center justify-content-between w-100'>
<Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://cdn.dribbble.com/users/125948/screenshots/4209133/music-note-icon-dribbble.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>   

    <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://hips.hearstapps.com/hmg-prod/images/romantic-love-songs-1545064762.gif?crop=0.5xw:1xh;center,top&resize=1200:*" />
      <Card.Body>
        <Card.Title>Categorise Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>   

    <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://media.tenor.com/bVk4KX5znbEAAAAC/graphics-equalizer-colors.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>     
  
</div>   
 </div>

 <div className="container border rounded p-5 border-secondary b-5 mt-5 d-flex justify-content-between align-item-center w-100">
<div className="col-lg-5 me-5">
  <h3 className='mb-5 text-warning'>Simple,Fast And Powerful</h3>
  <h6 className='mb-3'><span className='fs-5 fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla harum, eaque tenetur consectetur voluptates iste omnis magnam dicta animi. Voluptate delectus omnis nobis voluptates sed sunt dolore neque aperiam excepturi!</h6>

  <h6 className='mb-3'><span className='fs-5 fw-bolder'>Categorise Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla harum, eaque tenetur consectetur voluptates iste omnis magnam dicta animi. Voluptate delectus omnis nobis voluptates sed sunt dolore neque aperiam excepturi!</h6>

  <h6 className='mb-3'><span className='fs-5 fw-bolder'>Managing History</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla harum, eaque tenetur consectetur voluptates iste omnis magnam dicta animi. Voluptate delectus omnis nobis voluptates sed sunt dolore neque aperiam excepturi!</h6>
</div>
<div className="video ">
 <iframe width="616" height="403" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>" 
</div>

 </div>
    </>
  )
}

export default LandingPage