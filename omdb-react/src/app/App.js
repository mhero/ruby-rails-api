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
    <div>{title}</div>
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
    axios.get(`${process.env.REACT_APP_API_URL}/media?title=${search}`)
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
        <div className="results movies-panel">
          {error.message}
        </div> 
      }
    </div>
  );
}

export default App;
