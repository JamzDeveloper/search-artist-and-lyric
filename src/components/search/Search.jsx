import React, { useState, useEffect } from "react";
import Details from "./details/Details";
import From from "./from/From";
import Loader from "../loader/Loader";
import Arrow from "./arrow/Arrow";
import { helpHttp } from "../../helpers/helpHttp";
import "./search.css";
const Search = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);
  const [arrow,setArrow] = useState(false);

  useEffect(() => {
    if (search === null) return;
    const fetchData = async () => {
      const { autor, lyric } = search;

      let artistUrl = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${autor}`;
      let lyricUrl = `https://api.lyrics.ovh/v1/${autor}/${lyric}`;
      console.log(artistUrl);
      console.log(lyricUrl);
      setLoading(true);

      const [artistRes, lyricRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(lyricUrl),
      ]);

      console.log(artistRes, lyricRes);

      setBio(artistRes);
      setLyric(lyricRes);
      setLoading(false);
    };
    fetchData();
    setArrow(true)
  }, [search]);
  const handleSearch = (data) => {
    console.log(data);
    setSearch(data);
  };
  return (
    <div>

      <div className="container--search">
        <h1 className="web-title">Buscador de canciones</h1>
        <div>
    
        <From handleSearch={handleSearch} />
        {arrow && <Arrow />}
        </div>
      </div>
      {loading && <Loader />}
      {search && !loading && (
        <Details search={search} lyric={lyric} bio={bio} />
      )}
    </div>
  );
};
export default Search;
