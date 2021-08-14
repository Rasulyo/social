import React from 'react'
import classes from '../Dialogs.module.css'


const Message = (props) => {
    // let newMessageElement = React.createRef();

    // let addNewMessage = () => {
    //     props.addMessage()
    // }

    // let onMessageChange = () => {
    //     let message = newMessageElement.current.value;
    //     props.updateMessage(message)
    // }
    return (
            <div className={classes.message}>
                {props.message}
            </div>
           
    )
}


export default Message