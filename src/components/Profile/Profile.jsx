import MyPost from './Posts/MyPosts/MyPost'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
function Profile(props) {

    return(
      <div>
        <ProfileInfo />
        <MyPost posts={props.profilePage.posts}
                addPost={props.addPost}
                newPostText={props.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText}/>
                
        </div>
      )

    
    
}

export default Profile;