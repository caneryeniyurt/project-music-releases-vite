export const Header = () => {
    let imageObject = {
      imgUrl: "./main-design.png",
      imgAlt: "An Image of the Solar System",
    };
  
    const header = "Planets go here";
  
    return (
      <header>
        <img src={imageObject.imgUrl} alt={imageObject.imgAlt} />
        <p>{header}</p>
      </header>
    );
  };
  