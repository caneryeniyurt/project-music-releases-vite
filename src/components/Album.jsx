import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";
import { CoverImage } from "./CoverImage";
import {Container, Row, Col} from 'react-bootstrap'  


export const Album = ({
  coverimage,
  albumname,
  albumlink,
  artistinfo
  
}) => {
    
  return (    

       <Col col-12 col-md-4 col-lg-2> 
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
     </Col>  
  );
};
