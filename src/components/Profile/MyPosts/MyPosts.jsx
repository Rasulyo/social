import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'


function  MyPosts(props) {
  const postElements = props.postData.map(elem => <Post message={elem.message} count={elem.count} comments={elem.comments} />)
  
  let postAddelement = React.createRef();

  let addNewPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = postAddelement.current.value;
    props.updatePostText(text)
  }

  return (
    <div className={classes.posts}>
      <h2>My Posts</h2>
      <div>
        <div>
          <textarea ref={postAddelement} onChange={onPostChange} name="" id="" cols="30" rows="5" value={props.postText}/>
        </div>
        <div>
          <button onClick={ addNewPost }>add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postElements}
      </div>
    </div>

  )
}

export default MyPosts