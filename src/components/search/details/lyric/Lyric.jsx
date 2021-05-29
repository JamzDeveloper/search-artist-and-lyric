import React from "react";
import "./lyric.css"
const Lyric = ({ title, lyrics }) => {
  return (
    <div className="container--lyric">
      <h3 className="lyric--title"> {title}</h3>
      <div className="lyric--container--lyric">
        <blockquote className="lyric--lyric">{lyrics}</blockquote>
      </div>
    </div>
  );
};

export default Lyric;
