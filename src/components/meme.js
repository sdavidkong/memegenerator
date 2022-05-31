import React, { useState } from "react";
import dogeface from "../dogeface.jpg"
import memesData from "./memeData"
import "../index.css"


export default function Meme() {

    let url
    const [memeImage, setMemeImage] = useState(""); 

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() *memesArray.length)
        
        url = memesArray[randomNumber].url
        setMemeImage(url)
    
    }

    
    return (
        <main>
            <p>{url}</p>
            <div className="form">
                <input type="text" placeholder="top text" className="forminput"/>
                <input type="text" placeholder="bottom text" className="forminput"/>
                <button 
                    onClick={getMemeImage}
                    className="formbutton">
                    Get a new meme image 🖼
                    </button>
            </div>
            <img className="memeimage" src= {memeImage}/>
        </main>
    )
}