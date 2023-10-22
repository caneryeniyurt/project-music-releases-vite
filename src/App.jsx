import { Header } from "./components/Header";
import { Album } from "./components/Album";
import data from "./data.json";
import { BrowserRouter } from 'react-router-dom'
import "./index.css";



const App = () => {
  const albums = data.albums.items;
  /* NOT DESTRUCTURED */
  /* const renderPlanets = () => planets.map((planet) => {
      return <Planet
      key={planet.id}
      name={planet.name}
      diameter={planet.diameter}
      distanceFromTheSun={planet.distanceFromTheSun}
      moons={planet.moons}
      atmosphere={planet.atmosphere}
      description={planet.description}
    />;
}) */

  /* DESTRUCTURED */
  const renderAlbums = () =>

    albums.map(
      ({ id, name, external_urls,artists, images}) => (
        <Album
          key={id}
          coverimage={images}
          albumname={name}
          albumlink={external_urls["spotify"]}
          artistinfo={artists}

        />
        
      )
    );

  const renderContent = renderAlbums();

  return (
    <div className="App">
      <Header />
      <div className="row">{renderContent}</div>
      {/* <section className="albumOuter">{renderContent}</section> */}
    </div>
  );
};

export default App;

/*Extra!
Feel free to create more components, such as header/footer,
or why not include some more data from the array? */
