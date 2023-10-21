import { Link } from 'react-router-dom'
export const ArtistName = ({artistinfo}) => {

    return (
        <div>
          {artistinfo.map((object,id) =>(
          <ul key={id}>
          {" "}
          <li key={id}><Link to={object.external_urls["spotify"]} target="_blank" >{object.name} </Link></li>
        </ul>
            
          ))}
        </div>
           
    )
  }
  ArtistName.defaultProps={
      artistmname:"Components are missing",
  };