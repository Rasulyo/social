import React from 'react'
import DialogsItem from './DialogItem/DialogItem'
import classes from './Dialogs.module.css'

const Message = (props) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    const dialogElements = props.state.dialogsData.map(dialog => <DialogsItem author={dialog.author} id={dialog.id} />)
    const messageElements = props.state.messageData.map(elem => <Message message={elem.message} id={elem.id}
    // updateMessage={props.updateMessage}
    // addMessage={props.addMessage} 
    // messageText={props.messageText}
    />)

    let newMessageElement = React.createRef();

    let addNewMessage = () => {
        props.addMessage()
    }

    let onMessageChange = () => {
        let message = newMessageElement.current.value;
        props.updateMessage(message)
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems} activeClassName={classes.active}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
                <div>
                    <textarea onChange={onMessageChange} ref={newMessageElement} name="" id="" cols="30" rows="2" value={props.messageText} /> <br />
                </div>
                <div>
                    <button onClick={addNewMessage}>sent</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs