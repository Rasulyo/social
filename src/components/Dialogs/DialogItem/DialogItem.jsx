import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './DialogItem.module.css'
import logo from '../../../logo.svg';

const DialogsItem = (props) => {
    let path = "/dialogs/1" + props.id
    return (
        <div
        // className={classes.dialog + ' ' + classes.active}
        >
            <NavLink to={path} activeClassName={classes.active}>
                <div>
                    <img src={logo} alt="" className={classes.imgAvatar} />
                    <span>
                        {props.author}
                    </span>
                </div>
            </NavLink>
        </div>
    )
}

export default DialogsItem