import React from "react";
import dogeface from "../dogeface.jpg"


export default function Header() {
    return (
        <header className="header">
            <img src={dogeface} className="headerimg"></img>
            <h2  className="headertitle">crypto meme generator</h2>
            <h4  className="headerproject">poopy butts</h4>
            </header>
    )
}