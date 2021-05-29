import React from "react";
import Message from "../../loader/message/Message";
import Artist from "./artist/Artist";
import Lyric from "./lyric/Lyric";
const Details = ({ search, lyric, bio }) => {
  if (!lyric && !bio) return null;
  return (
    <div>
      {bio.artists ? (
        <Artist artist={bio.artists[0]} />
      ) : (
        <Message
          msg={`Error: no se encontro al artista ${search.autor}`}
          bgColor="#dc3545"
        />
      )}
      {lyric.error || lyric.err || lyric.name === "AbortError" ? (
        <Message
          msg={`Error: no se econtro la canción ${search.lyric}`}
          bgColor="#dc3545"
        />
      ) : (
        <Lyric title={search.lyric} lyrics={lyric.lyrics} />
      )}
    </div>
  );
};
export default Details;
