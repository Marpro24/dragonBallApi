import { useState } from "react";

const SearchBar = ({onSearch}) => {
  const [name, setName] = useState("");
  const [minKi, setMinKi] = useState("");
  const [maxKi, setMaxKi] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({name, minKi, maxKi})
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Buscar por nombre
        </label>
        <input
          id="name"
          type="text"
          placeholder="Introduce un nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
        />

        <label htmlFor="minKi" className="form-label">
          Buscar por ki
        </label>
        <input
          id="minKi"
          type="number"
          placeholder="De"
          value={minKi}
          onChange={(e) => setMinKi(e.target.value)}
          className="form-control"
        />

        <label htmlFor="maxKi" className="form-label"></label>
        <input
          id="maxKi"
          type="number"
          placeholder="A"
          value={maxKi}
          onChange={(e) => setMaxKi(e.target.value)}
          className="form-control"
        />

        <button type="submit" className="btn btn-primary">
          Buscar
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
