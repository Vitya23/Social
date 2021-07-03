import s from './MyPost.module.css'
import Post from '../post/Post'
import { createRef } from 'react';
function MyPost(props) {


let postsElements = 
    props.posts.map ((p) => <Post message={p.message} likescount={p.likescount}/>);

  let newPostElement = createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text)
    
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  }

    return( 
      
        <div className={s.postsBlock}>
          <h2>My posts</h2>
          <div> 
            <div className={s.textBlock}>
              <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
            </div>
            <div>
              <button onClick={addPost}>Add post</button>
            </div>
            
            
          </div>
          <div className={s.posts}></div>
          
          {postsElements}
          
        </div>
       
       
      )
       
    
    
}

export default MyPost;