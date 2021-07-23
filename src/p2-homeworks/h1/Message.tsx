import React from 'react'
import MessageModule from './Message.module.css'
import {messageDataPropType} from "./HW1";

const Message=(props: messageDataPropType)=> {
    return (

        <div className={MessageModule.list}>
            <div >
                <img className={MessageModule.avatar}
                     src={props.avatar} alt={'#'}/>
            </div>
            <div className={MessageModule.message}>
                <div className={MessageModule.name}>{props.name}</div>
                <div className={MessageModule.messageText}>{props.message}</div>
                <div className={MessageModule.timeDate}>{props.time}</div>
            </div>
        </div>
    )
}
export  default Message;

