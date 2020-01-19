import React, {useState} from 'react';
import './App.css';
const axios = require('axios').default;

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
  const [media, setMedia] = useState(null);
  const [search, setSearch] = useState(null);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(0);

  const updateError = (error) => {
    if (error.response != null && error.response.status === 404) {
      setError({status: 404, message: "No media found"});
    } else {
      setError({status: 500, message: "Error in server, please try again in some minutes"});
    }
  }

  const getMedia = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/media?title=${search}`)
    .then((response) => {
      setMedia(response.data);
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
              {media.map((item, index) => {
                const {title, year, poster} = item;
                return <PosterCard 
                  title={title}
                  year={year}
                  poster={poster}                
                  selected={index == selected}
                />
              })}
            </ul>
          </div>
          <div className="details-panel">
            <MediumDetail />
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
