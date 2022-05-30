import React from "react";
import dogeface from "../dogeface.jpg"


export default function Meme() {
    return (
        <main>
            <form className="form">
                <input type="text" placeholder="top text" className="forminput"/>
                <input type="text" placeholder="bottom text" className="forminput"/>
                <button className="formbutton">Get a new meme image 🖼</button>
            </form>
        </main>
    )
}