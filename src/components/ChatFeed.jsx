import { MessageForm } from "./MessageForm"
import { MyMessage } from "./MyMessage"
import { TheirMessage } from "./TheirMessage"


const ChatFeed = (props)=>{
    let {chats,activeChat, userName, messages} = props
    let chat = chats&& chats[activeChat]
    let renderMessages = ()=>{
        let keys = Object.keys(messages)
        console.log(keys)
    }
    return (
        <>
        Hi
        </>
    )
}

export default ChatFeed