import React, {useState} from 'react';
import './App.css';

const PosterCard = ({title, year, poster, selected}) => {
  return (
    <li className={`results-item ${selected ? "selected" : ""}`}>
      <div>
        <img className="movie-poster" src={poster} />
      </div>
      <div>{title}-{year}</div>
    </li>
  );
}

const MediumDetail = ({mediumDetails}) => {
  return(
    <div>Details Here</div>
  );
}

const App = () => {
  const [movies, setMovies] = useState(null);

  return (
    <div className="App">
      <div className="search">
        <input type="text" className= "search-input" id="name" name="name" placeholder="Search a Movie or Series title"/>
        <button type="button">Search!</button>
      </div>
      <div className="results">
        <div className="movies-panel">
          <ul>
            <PosterCard 
              title="hola Club" 
              year="1999" 
              poster="https://m.media-amazon.com/images/M/MV5BYTJlMmIwYjAtYWJmYy00YzE2LWE1OTYtZjIyMzg0YWUwOTg4XkEyXkFqcGdeQXVyMTA1NTM1NDI2._V1_SX300.jpg"
              selected={true}
            />
            <PosterCard 
              title="hola Club" 
              year="1999" 
              poster="https://m.media-amazon.com/images/M/MV5BYTJlMmIwYjAtYWJmYy00YzE2LWE1OTYtZjIyMzg0YWUwOTg4XkEyXkFqcGdeQXVyMTA1NTM1NDI2._V1_SX300.jpg"
            />
            <PosterCard 
              title="hola Club" 
              year="1999" 
              poster="https://m.media-amazon.com/images/M/MV5BYTJlMmIwYjAtYWJmYy00YzE2LWE1OTYtZjIyMzg0YWUwOTg4XkEyXkFqcGdeQXVyMTA1NTM1NDI2._V1_SX300.jpg"
            />
            <PosterCard 
              title="hola Club" 
              year="1999" 
              poster="https://m.media-amazon.com/images/M/MV5BYTJlMmIwYjAtYWJmYy00YzE2LWE1OTYtZjIyMzg0YWUwOTg4XkEyXkFqcGdeQXVyMTA1NTM1NDI2._V1_SX300.jpg"
            />
            <PosterCard 
              title="hola Club" 
              year="1999" 
              poster="https://m.media-amazon.com/images/M/MV5BYTJlMmIwYjAtYWJmYy00YzE2LWE1OTYtZjIyMzg0YWUwOTg4XkEyXkFqcGdeQXVyMTA1NTM1NDI2._V1_SX300.jpg"
            />
            <PosterCard 
              title="hola Club" 
              year="1999" 
              poster="https://m.media-amazon.com/images/M/MV5BYTJlMmIwYjAtYWJmYy00YzE2LWE1OTYtZjIyMzg0YWUwOTg4XkEyXkFqcGdeQXVyMTA1NTM1NDI2._V1_SX300.jpg"
            />
            <PosterCard 
              title="hola Club" 
              year="1999" 
              poster="https://m.media-amazon.com/images/M/MV5BYTJlMmIwYjAtYWJmYy00YzE2LWE1OTYtZjIyMzg0YWUwOTg4XkEyXkFqcGdeQXVyMTA1NTM1NDI2._V1_SX300.jpg"
            />
            <PosterCard 
              title="hola Club" 
              year="1999" 
              poster="https://m.media-amazon.com/images/M/MV5BYTJlMmIwYjAtYWJmYy00YzE2LWE1OTYtZjIyMzg0YWUwOTg4XkEyXkFqcGdeQXVyMTA1NTM1NDI2._V1_SX300.jpg"
            />
            <PosterCard 
              title="hola Club" 
              year="1999" 
              poster="https://m.media-amazon.com/images/M/MV5BYTJlMmIwYjAtYWJmYy00YzE2LWE1OTYtZjIyMzg0YWUwOTg4XkEyXkFqcGdeQXVyMTA1NTM1NDI2._V1_SX300.jpg"
            />
            <PosterCard 
              title="hola Club" 
              year="1999" 
              poster="https://m.media-amazon.com/images/M/MV5BYTJlMmIwYjAtYWJmYy00YzE2LWE1OTYtZjIyMzg0YWUwOTg4XkEyXkFqcGdeQXVyMTA1NTM1NDI2._V1_SX300.jpg"
            />
          </ul>
        </div>
        <div className="details-panel">
          <MediumDetail />
        </div>
      </div>
          
    </div>
  );
}

export default App;
