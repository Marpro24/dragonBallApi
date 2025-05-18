import { useEffect, useState } from "react";
import "./App.css";
import { getCharactersApi } from "./services/getCharactersApi";
import SearchBar from "./components/SearchBar/SearchBar";
import CharacterCard from "./components/CharacterCard/CharacterCard";

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchedCharacters, setSearchedCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await getCharactersApi();
        setCharacters(data);
        setSearchedCharacters(data);
      } catch (error) {
        console.error("Error al importar los personajes", error);
      }
    };
    fetchCharacters();
  }, []);

  const handleSearch = ({ name, minKi, maxKi }) => {
    let searchResult = characters;

    if (name) {
      searchResult = searchResult.filter((item) =>
        item.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    if (minKi && maxKi) {
      searchResult = searchResult.filter(
        (item) => item.ki >= parseInt(minKi) && item.ki <= parseInt(maxKi)
      );
    }
    setSearchedCharacters(searchResult);
  };

  return (
    <div className="container">
      <h1 className="main-page-title">Busca tu personaje favorito</h1>

      <SearchBar onSearch={handleSearch} />
      {searchedCharacters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default App;
