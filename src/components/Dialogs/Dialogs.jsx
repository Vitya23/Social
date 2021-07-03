
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem'
import Message from './Message/Message'
import { createRef } from 'react';




function Dialogs(props) {

  

   
    
    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = props.state.messages.map ( m => <Message message={m.message} id={m.id} />) ;
    
    let newMessageElements = createRef();
    
    let newMessage = () => {
        let message = newMessageElements.current.value;
        alert(message)
    }
    

    

    

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea ref={newMessageElements}></textarea>
                <button onClick={newMessage}>Add post</button>
            </div>
        </div>


    )
}


export default Dialogs