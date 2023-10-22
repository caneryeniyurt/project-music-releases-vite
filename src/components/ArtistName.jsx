import { Link } from 'react-router-dom'
export const ArtistName = ({artistinfo}) => {

    return (
        <div>
          {artistinfo.map((object,id) =>(     
            <span style={{color:"grey"}} key={id}>
            {id>0 && " , "}
            <Link to={object.external_urls["spotify"]} target="_blank" className="artistlink" >{object.name} </Link>      
            </span>

            
          ))}
        </div>
           
    )
  }
  ArtistName.defaultProps={
      artistmname:"Components are missing",
  };
