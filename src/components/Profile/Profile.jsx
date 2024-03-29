import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'




const Profile = (props) => {
  return (
    <div>

      <ProfileInfo />
      <MyPosts
        postData={props.state.postData}
        postText={props.state.postText}
        addPost={props.addPost} 
        updatePostText={props.updatePostText} 
        />
    </div>
  )
}

export default Profile