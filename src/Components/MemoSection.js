import '../styles.css'
import { useState, useEffect } from 'react';

export default function MemoSection() {
  const [allMemes, setAllMemes] = useState({})

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(resData => setAllMemes(resData.data.memes))
  }, [])

  const [meme, setMeme] = useState({
    "topText": "",
    "bottomText": "",
    "randomImage": ""
  })

  function toggleRandomMeme() {
    const {url} = allMemes[Math.floor(Math.random() * allMemes.length)]
    setMeme(prevMeme => ({
      ...prevMeme,
      "randomImage": url
    }))
  }

  function handleChangeInput(e) {
    const {value, name} = e.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <section className="meme-section">
      <input 
        className="upper-phrase"  
        name="topText" 
        type="text"
        onChange={handleChangeInput}
        value={meme.topText} 
        placeholder="enter funny phrase at the top" 
      />
      <input 
        className="bottom-phrase" 
        name="bottomText" 
        type="text" 
        onChange={handleChangeInput}
        value={meme.bottomText}
        placeholder="enter funny phrase at the bottom" 
      />
      <button onClick={toggleRandomMeme}>Get a new meme image 🖼️</button>
      <div className="meme-content">
        <img className='meme-img' src={meme.randomImage || './images_public/memeimg.png'} alt="meme" />
        <h3 className='meme-content--text upper'>{meme.topText.toUpperCase() || 'REACT IS'}</h3>
        <h3 className='meme-content--text bottom'>{meme.bottomText.toUpperCase() || 'EXCITING'}</h3>
      </div>
    </section>
  )
}