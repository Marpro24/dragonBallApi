import axios from "axios";

export async function getCharactesApi(){
  const apiUrl = "https://dragonball-api.com/api/characters";

  try {
    const response = await axios.get(apiUrl);
    return response.data.items
  } catch (error) {
    console.error("Error al importar los personajes", error)
    throw error
  }
}
