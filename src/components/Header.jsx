export const Header = () => {
    let imageObject = {

      imgAlt: "",
    };
  
    const header = "New Albums & Singles";
  
    return (
      <header>
        <img src={imageObject.imgUrl} alt={imageObject.imgAlt} />
        <p>{header}</p>
      </header>
    );
  };
  