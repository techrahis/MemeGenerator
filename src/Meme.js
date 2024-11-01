import React from "react";
import "./Meme.css";
import memesData from "./memeData";

export default function Meme() {
  // const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/1c1uej.jpg")
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    url: "https://i.imgflip.com/1c1uej.jpg",
  });
  const [allMemeImage, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImage.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  return (
    <main>
      <div className="form">
        <input
          className="form--inputs"
          name="topText"
          placeholder="Top Text"
          type="text"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          className="form--inputs"
          name="bottomText"
          placeholder="Buttom Text"
          type="text"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form--button" onClick={getMemeImage}>
          {" "}
          Get a new meme image 😆{" "}
        </button>
        <div className="meme">
          <img src={meme.randomImage} className="meme--image" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </main>
  );
}
