import React, { useEffect, useState } from "react";
import dogeface from "../dogeface.jpg"
import "../index.css"


export default function Meme() {

    
    // const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg"); 
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeImages(data.data.memes))


    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() *allMemeImages.length)
        
        const url = allMemeImages[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        })

        )
    
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value

        }) )
    }

    
    return (
        <main>
            <div className="form">
                <input type="text" placeholder="top text" className="forminput" name="topText" value={meme.topText} onChange={handleChange}/>
                <input type="text" placeholder="bottom text" className="forminput" name="bottomText" value={meme.bottomText} onChange={handleChange}/>
                <button 
                    onClick={getMemeImage}
                    className="formbutton">
                    Get a new meme image 🖼
                    </button>
            </div>
            <div className="meme">
                <img className="memeimage" src= {meme.randomImage}/>
                <h2 className="meme--text top" placeholder="top text">{meme.topText}</h2>
                <h2 className="meme--text bottom" placeholder="bottom text">{meme.bottomText}</h2>
            </div>
        </main>
    )
}