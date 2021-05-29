import React, { useState } from "react";
import "./from.css";
import Button from "./button/Button.jsx";
const initialForm = {
  autor: "",
  lyric: "",
};
const From = ({ handleSearch }) => {
  const [from, setFrom] = useState(initialForm);
  const handleChange = (e) => {
    setFrom({
      ...from,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!from.autor || !from.lyric) {
      alert("datos vacios");
      return;
    }
    handleSearch(from);
    setFrom(initialForm);
  };
  return (
    <div className="container--from">
      <form className="from" onSubmit={handleSubmit}>
        <input
          type="text"
          name="autor"
          placeholder="Nombre de Autor"
          onChange={handleChange}
          value={from.autor}
        />
        
        <input
          type="text"
          name="lyric"
          placeholder="Nombre de la cancion"
          onChange={handleChange}
          value={from.lyric}
        />
        <Button />
      </form>
    </div>
  );
};
export default From;
