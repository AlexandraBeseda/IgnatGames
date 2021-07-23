import React from 'react'
import Message from "./Message";


export type messageDataPropType = {
    avatar:string,
    name: string,
    message: string,
    time: string,
}

const messageData: messageDataPropType = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "test message name",
    message: "test message",
    time: "test message time"
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/
            }
            {/*<AlternativeMessage/>*/
            }
            <hr/>
        </div>
    )
}

export default HW1
