import favBtn from "./assets\icons\heart.svg"
import playBtn from "./assets\icons\play.svg"
import dotsBtn from "./assets\icons\dots.svg"

export const Buttons = () => {
  return (
    <div className="buttons-container"></div>
        <a id="favourite" className="fav-btn">
            <img className="fav-img" src={favBtn} alt="heart.svg" width="48px"/>
        </a>   
        <a id="favourite" className="play.svg">
        <img className="play.svg" src={playBtn} alt="play.svg" width="48px"/>
        </a>   
        <a id="favourite" className="dots.svg">
            <img className="dots.svg" src={dotsBtn} alt="dots.svg" width="48px"/>
        </a>   
  )
}
