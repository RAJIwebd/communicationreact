import { useState } from "react"
import "./chat.css"
import EmojiPicker from "emoji-picker-react"

const Chat = () => {
    const [open,setOpen] = useState(false);
    const [text,setText] = useState("");

    const handleEmoji = e =>{
        setText((prev) => prev + e.emoji);
        setOpen(false)
    };
    
    return( 
        <div className='chat'>
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>Nithi</span>
                        <p>some random text messages</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>





            <div className="center">
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="text">
                        <p>The afternoon sun filtered through the trees, casting dappled shadows on the ground. A gentle breeze stirred the leaves, carrying with it the earthy scent of the forest. Birds chirped from the branches above, their songs mixing with the soft rustling of the wind. The path ahead was narrow but inviting, winding through a grove of tall, ancient oaks. Every step taken felt like a journey into  </p>
                        <span>1 min ago</span>
                    </div>
                </div>


                <div className="message own">
                    <div className="text">
                        <p>The afternoon sun filtered through the trees, casting dappled shadows on the ground. A gentle breeze stirred the leaves, carrying with it the earthy scent of the forest. Birds chirped from the branches above, their songs mixing with the soft rustling of the wind. The path ahead was narrow but inviting, winding through a grove of tall, ancient oaks. Every step taken felt like a journey into  </p>
                        <span>1 min ago</span>
                    </div>
                </div>


                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="text">
                        <p>some message contents some message contents some message contents some message contents  </p>
                        <span>1 min ago</span>
                    </div>
                </div>


                <div className="message own">
                    <div className="text">
                        <p>some message contents some message contents some message contents some message contents  </p>
                        <span>1 min ago</span>
                    </div>
                </div>


                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="text">
                        <p>some message contents some message contents some message contents some message contents  </p>
                        <span>1 min ago</span>
                    </div>
                </div>


                <div className="message own">
                    <div className="text">
                        <img src="./avatar.png" alt="" />
                        <p>some message contents some message contents some message contents some message contents  </p>
                        <span>1 min ago</span>
                    </div>
                </div>
            </div>
           
           
           
           
           
           
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input type="text" placeholder="Type a message..." 
                value={text}
                onChange={e=>setText(e.target.value)}/>
                <div className="emoji">
                    <img src="./emoji.png" alt="" onClick={() => setOpen((prev) => !prev)} />
                    <div className="picker">
                      <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                    </div>
                </div>
                <button className="sendButton">send</button>
            </div>
        </div>
    )
}
export default Chat