import React from 'react'
import ProfileSide from '../../components/Profile/ProfileSide'
import './Home.css'
const Home = () => {
  return (
    <div className="Home">
      <ProfileSide />
        <div className="postSide">Profile</div>
        <div className="RightSide">Right</div>
    </div>
  )
}

export default Home