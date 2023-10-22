import favBtn from "../assets/icons/heart.svg"
import playBtn from "../assets/icons/play.svg"
import dotsBtn from "../assets/icons/dots.svg"

export const CoverImage = ({ coverimage }) => {
    return (
      <div className="CoverImage">
        <img
          src= {coverimage[1].url}
          width={coverimage[1].width}
          height={coverimage[1].height}
        />
          <div id="overlay">
            <img src={favBtn}
            //  id="heart-highlight"
            className="icons-highlight"></img>

            <img src={playBtn}
            //  id="play-highlight"
            className="icons-highlight"></img>

            <img src={dotsBtn}
            //  id="dots-highlight"
            className="icons-highlight"></img>

        </div>
      </div>
    );
  };
  
  Image.defaultProps = {
    description: "Image is missing",
  };
  
