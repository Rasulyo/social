import React from 'react'
import classes from './Post.module.css'




function Post(props) {
  return (
      <div className={classes.item}>
        <img src="https://i2.wp.com/cdn2.iconfinder.com/data/icons/flatfaces-everyday-people-square/128/beard_male_man_face_avatar-512.png" alt="avatar" />
        {props.message}
        <div className={classes.span}>
        <span>{props.count}likes</span>
        <span>{props.comments}comments</span>
        </div>
      </div>
  )
}

export default Post