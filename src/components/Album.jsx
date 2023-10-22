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
        <div style={{marginTop:20}}>     
          <AlbumName albumname={albumname} 
                      albumlink={albumlink}/> 
        </div>
        <div style={{marginBottom:40}}> 
          <ArtistName artistinfo={artistinfo}/>
        </div>
        </div>
     </Col>  
  );
};
