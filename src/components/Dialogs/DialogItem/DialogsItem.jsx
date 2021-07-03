import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'

function DialogItem(props) {
    let path = "/Dialogs/"+ props.id;
    return <div className={s.dialog + ' ' + s.active}>
                    <NavLink to={path}>{props.name}</NavLink>
                </div>
}






export default DialogItem;