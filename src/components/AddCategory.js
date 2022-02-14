import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories, setBusco }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2)
      setCategories((cats) => [inputValue, ...cats]);
    setInputValue("");
    localStorage.setItem("lastCategory", inputValue);
    setBusco(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Categoria a buscar..."
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
