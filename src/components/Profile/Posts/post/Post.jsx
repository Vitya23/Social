import s from './Post.module.css'
function Post(props) {
    return( 
      
        
            <div className={s.item}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Avatar_cat.png" />
              <span>{props.message}</span>
              <div>
                <span>Like {props.likescount}</span>
                
              </div>
              
            </div>
            
        
       
       
      )
       
    
    
}

export default Post;