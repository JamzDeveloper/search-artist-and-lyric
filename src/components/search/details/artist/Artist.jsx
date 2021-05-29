import React from "react";
import "./artist.css";
const Artits = ({ artist }) => {
  return (
    <div className="container--artist">
      <div className="artist--container--img">
        <img src={artist.strArtistThumb} alt={artist.strArtist} />
      </div>
      <div className="artist--container--details">
        <h3 className="artist--details-name">{artist.strArtist}</h3>
        <div className="artist--details-yearandcontry">
        <p className="artist--details-year">Nacimiento: 
           {artist.intBornYear} - {artist.intDiedYear || "Present"}
        </p>
        <p className="artist--details-country">Contry: {artist.strCountry}</p>
        </div>
        <div className="artist--details-genreandwebsite">

        <p className="artist--details-genre">Genre: {artist.strGenre}</p>
        <a
          className="artist--details-website"
          href={`https://${artist.strWebsite}`}
          target="_blank"
          rel="noreferrer"
          >
          official Web site
        </a>
          </div>
        <div className="artist--container--biography">
          <h3 className="artist--biography-title">Biography</h3>
          <p className="artist-biography">{artist.strBiographyEN}</p>
        </div>
      </div>
    </div>
  );
};

export default Artits;
