import React from 'react'
import ReactPlayer from 'react-player'
import './Videosection.scss'
const Videosection = () => {
  return (
 <div className='video-section'>
    <div className='video'>
    <h3>Pitch Video</h3>
    <p>Full Stack development from beginner to advanced.</p>
     <ReactPlayer className="playerstyle"
     controls
     width='100%'
     height='160px'
     url="https://youtu.be/hGO4FszWEr4" />
    </div>

<div className='video'>
<h3>Product Video</h3>
<p>How to record a presentation with Loom</p>
    <ReactPlayer className="playerstyle"
     controls
     width='100%'
     height='160px'
     url="https://youtu.be/jmcJEQVvcX0" />
</div>
 
 
 </div>
  )
}

export default Videosection