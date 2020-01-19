import React from 'react';

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

export default PosterCard;