
export const Header = () => {
    let imageObject = {

      imgAlt: "",
    };
  
    const header = "New Albums & Singles";
  
    return (
      <header>
        <img src={imageObject.imgUrl} alt={imageObject.imgAlt} />
        <p style={{ color: 'white', textAlign:"center" }} >{header}</p>
      </header>
    );
  };
  