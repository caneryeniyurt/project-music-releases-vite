import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";
import { CoverImage } from "./CoverImage";
// import { Atmosphere } from "../Atmosphere";
// import { Description } from "../Description";

export const Album = ({
  albumname,
  albumlink,
  artistinfo,
  coverimage

}) => {
    
  return (
    <div>
      <AlbumName albumname={albumname} 
                 albumlink={albumlink}/>

      <ArtistName artistinfo={artistinfo} />
      <CoverImage coverimage={coverimage}  />
    </div>
  );
};

// Album.defaultProps = {
//   name: "Name is missing",
//   distance: "Not available",
// };
