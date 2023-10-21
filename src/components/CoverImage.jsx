export const CoverImage = ({ coverimage }) => {
    return (
        <div>
        <img
          src= {coverimage[1].url}
          width={coverimage[1].width}
          height={coverimage[1].height}
        />
      </div>
    );
  };
  
  Image.defaultProps = {
    description: "Image is missing",
  };
  