import '../styles.css'
import memePhace from '../images/Troll Face.png'

export default function Header() {
  return (
    <header>
      <img src={memePhace} alt="troll face" className='troll-face'/>
      <span>Meme Generator</span>
      <p>React Course - Project 3</p>
    </header>
  )
}