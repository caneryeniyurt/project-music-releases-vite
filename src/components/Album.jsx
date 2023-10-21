import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";
// import { Atmosphere } from "../Atmosphere";
// import { Description } from "../Description";

export const Album = ({
  albumname,
  albumlink,
  artistinfo

}) => {
    
  return (
    <div>
      <AlbumName albumname={albumname} 
                 albumlink={albumlink}/>

        <ArtistName artistinfo={artistinfo} />
    </div>
  );
};

// Album.defaultProps = {
//   name: "Name is missing",
//   distance: "Not available",
// };
