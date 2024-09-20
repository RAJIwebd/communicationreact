import { useState } from "react"
import "./chatList.css"

const ChatList = () => {
    const [addMode,setAddMode]=useState(false)
    return(
        <div className='chatList'>
            <div className="search">
               <div className="searchBar">
                     <img src="./search.png" alt="" />
                     <input type="text" placeholder="search" />
               </div>
               <img src={ addMode ? "./minus.png" : "./plus.png"} alt="" className="add" onClick={() => setAddMode((prev) => !prev)}/>
            </div>
            <div className="scrollContainer">
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>employee1</span>
                    <p>hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>employee2</span>
                    <p>hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>employee3</span>
                    <p>hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>employee4</span>
                    <p>hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>employee4</span>
                    <p>hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>employee4</span>
                    <p>hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>employee4</span>
                    <p>hello</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ChatList