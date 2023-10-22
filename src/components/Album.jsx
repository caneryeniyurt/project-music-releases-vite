import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";
import { CoverImage } from "./CoverImage";


import "../index.css";
// import { Atmosphere } from "../Atmosphere";
// import { Description } from "../Description";

export const Album = ({
  coverimage,
  albumname,
  albumlink,
  artistinfo
  

}) => {
    
  return (    
    <div>
      
      <CoverImage coverimage={coverimage}/>
      <div> <p className="albumtext"> 
        <AlbumName albumname={albumname} 
                   albumlink={albumlink}/> 
      </p> </div>
      <div> <p className="artisttext">
        <ArtistName artistinfo={artistinfo}/>
      </p> </div>
    </div>
  );
};

// Album.defaultProps = {
//   name: "Name is missing",
//   distance: "Not available",
// };
