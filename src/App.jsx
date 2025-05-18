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

  const handleSearch = () => {
    let searchResult = characters;
   
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
