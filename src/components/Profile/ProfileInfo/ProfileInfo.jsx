import s from './ProfileInfo.module.css'
function ProfileInfo() {
    return( <div className="app-wrapper-content">
        <div>
          <img src="https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg"/>
          </div>
        <div className={s.descriptionBlock}>
          ava+description
        </div>
      
        
        </div>
      )
       
    
    
}

export default ProfileInfo;