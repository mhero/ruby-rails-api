import React, {useState} from 'react';
import './App.css';
import MediumDetail from './MediumDetail';
import PosterCard from './PosterCard';
const axios = require('axios').default;

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
      setMedia(response.data);
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
        <>
          <div className="results error-panel">
            <p>Media found(click one to see more details)</p>
          </div>
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
        </>
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
