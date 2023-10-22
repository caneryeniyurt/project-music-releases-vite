
import { Link } from 'react-router-dom'
export const AlbumName = ({albumname, albumlink}) => {

    return (
    
           <Link to={albumlink} target="_blank" className="albumlink" >{albumname} </Link>
    )
  }
  AlbumName.defaultProps={
      albumname:"Components are missing",
  };