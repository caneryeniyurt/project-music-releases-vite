import { Header } from "./components/Header";
import { Album } from "./components/Album";
import data from "./data.json";
import { BrowserRouter } from 'react-router-dom';
import {Container , Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

const App = () => {
  const albums = data.albums.items;

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
      <Container fluid><Row> {renderContent} </Row> </Container>
      
    
    </div>
  );
};

export default App;

/*Extra!
Feel free to create more components, such as header/footer,
or why not include some more data from the array? */
