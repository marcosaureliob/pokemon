import { useEffect, useState } from "react";
import axios from "axios";
import api from "./services/api";

type Pokemon = {
  name: string;
  sprite: string;
};

function App() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  const getPokemons = async () => {
    try {
      const endPoints = [];
      for (let i = 1; i <= 151; i++) {
        endPoints.push(api.get(`pokemon/${i}/`));
      }

      const responses = await axios.all(endPoints);
      const pokeList = responses.map((res) => ({
        name: res.data.name,
        sprite: res.data.sprites.front_default,
      }));

      setPokemon(pokeList);
    } catch (error) {
      console.error("Erro ao buscar Pokémon:", error);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Pokémon</h1>

      <div className="flex justify-center">
        <ul className="grid grid-cols-3 gap-8">
          {pokemon.map((poke, index) => (
            <li
              key={index}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center transform transition duration-300 hover:scale-105"
            >
              <img
                src={poke.sprite}
                alt={poke.name}
                className="w-24 h-24 mb-3"
              />
              <p className="text-lg font-semibold text-gray-700 capitalize">
                {poke.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
