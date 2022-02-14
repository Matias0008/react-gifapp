import React, { useEffect, useState } from "react";

import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);
  const [busco, setBusco] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("lastCategory")) {
      setCategories([localStorage.getItem("lastCategory")]);
      setBusco(true);
    }
  }, []);

  const handleReset = () => {
    const documentTitle = document.querySelector(".title");

    setCategories([]);
    documentTitle.classList.remove("padding-top");
    localStorage.removeItem("lastCategory");
    setBusco(false);
  };

  let palabra = "Limpiar busqueda";
  if (categories.length > 1)
    palabra = `Limpiar busquedas (${categories.length})`;

  const buttonClean = document.querySelector(".buttonLimpiar");
  if (buttonClean) {
    if (categories.length === 0) {
      buttonClean.classList.add("disabled");
    } else {
      buttonClean.classList.remove("disabled");
    }
  }

  return (
    <>
      <h2 className="title">Buscador de Gifs</h2>
      <AddCategory setCategories={setCategories} setBusco={setBusco} />
      <button onClick={handleReset} className="buttonLimpiar disabled">
        {palabra}
      </button>
      <hr />

      <ol>
        {busco && <h2 className="ultima-busqueda">Ultima busqueda</h2>}

        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
