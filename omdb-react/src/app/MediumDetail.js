import React from 'react';

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

export default MediumDetail;