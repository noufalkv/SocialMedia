import React from 'react'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import './Profile.css'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import PostSide from '../../components/PostSide/PostSide'
const Profile = () => {
  return (
      <div className="Profile">
          <ProfileLeft />
          <div className="Profile-center">
              <ProfileCard />
              <PostSide />
          </div>
      </div>
   )
}

export default Profile