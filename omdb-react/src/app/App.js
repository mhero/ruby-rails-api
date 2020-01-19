import React, {useState} from 'react';
import './App.css';
const axios = require('axios').default;

const PosterCard = ({item, onClick}) => {
  const {title, year, poster, selected} = item;
  return (
    <li className={`results-item ${selected ? "selected" : ""}`} 
        onClick={onClick}>
      <div>
        <img className="movie-poster" src={poster} />
      </div>
      <div className="results-title">{title} ({year})</div>
    </li>
  );
}

const MediumDetail = ({details}) => {
  const {title, runtime, released, actors, plot, imdb_rating} = details;
  return(
    <>
      <h1 className="medium-details title">{title}</h1>
      <p>{plot}</p>
      <table>
      <thead>
        <tr>
            <th colspan="2">Stats</th>
        </tr>
    </thead>
        <tr>
          <th>IMDB Rating</th>
          <td>{imdb_rating}</td>
        </tr>
        <tr>
          <th>Date Released</th>
          <td>{released}</td>
        </tr>
        <tr>
          <th>Runtime</th>
          <td>{runtime}</td>
        </tr>
      </table>
      <h2>Actors:</h2>
      <ul className="medium-details actors-list">{
        actors.map(
          (actor) => {
            return <li>{actor}</li>
          }
        )}
      </ul>
    </>
  );
}

const App = () => {
  const [media, setMedia] = useState(null);
  const [details, setDetails] = useState(null);
  const [search, setSearch] = useState(null);
  const [error, setError] = useState(null);

  const clear = () => {
    setMedia(null);
    setDetails(null);
    setError(null);
  }

  const updateError = (error) => {
    clear();
    if (error.response != null && error.response.status === 404) {
      setError({status: 404, message: "No media found"});
    } else {
      setError({status: 500, message: "Error in server, please try again in some minutes"});
    }
  }

  const getMedia = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/media?title=${encodeURI(search)}`)
    .then((response) => {
      clear();
      setMedia(
        response.data.map(
          (obj,index)=> ({ ...obj, selected: index === 0 })
        )
      );
    })
    .catch((error) => {
      updateError(error);
    });
  }

  const getMediumDetails = (id) => {
    axios.get(`${process.env.REACT_APP_API_URL}/media/${id}`)
    .then((response) => {
      setDetails(response.data);
      setMedia(
        media.map(
          obj=> ({ ...obj, selected: obj.imdb_id === id})
        )
      );
    })
    .catch((error) => {
      updateError(error);
    });
  }

  return (
    <div className="App">
      <div className="search">
        <input type="text" className= "search-input" id="name" name="name" 
               placeholder="Search a Movie or Series title"
               onChange={(event) => setSearch(event.target.value) }/>
        <button type="button" onClick={getMedia}>Search!</button>
      </div>

      {media && 
        <div className="results">
          <div className="movies-panel">
            <ul>
              {media.map((item) => {
                return <PosterCard 
                  item = {item}
                  onClick = {()=> getMediumDetails(item.imdb_id)}
                />
              })}
            </ul>
          </div>
          <div className="details-panel">
            {details && <MediumDetail details={details}/>}
          </div>
        </div>
      }
      {error && 
        <div className="results error-panel">
          <p>{error.message}</p>
        </div> 
      }
    </div>
  );
}

export default App;
