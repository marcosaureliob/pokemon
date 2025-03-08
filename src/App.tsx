import { useEffect, useState } from "react";
import axios from "axios";
import api from "./services/api";

type Pokemon = {
  name: string;
  sprite: string;
  type: string;
};

type PokeType = {
  type: {
    name: string;
  };
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
        type: res.data.types
          .map((type: PokeType) => type.type.name)
          .join(" | "),
      }));

      console.log(pokeList);

      setPokemon(pokeList);
    } catch (error) {
      console.error("Erro ao buscar Pokémon:", error);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const pokeTypes: Record<string, string> = {
    normal: "bg-gray-400",
    fire: "bg-red-500",
    water: "bg-blue-500",
    electric: "bg-yellow-500",
    grass: "bg-green-500",
    ice: "bg-blue-200",
    fighting: "bg-red-800",
    poison: "bg-purple-500",
    ground: "bg-yellow-800",
    flying: "bg-blue-300",
    psychic: "bg-pink-500",
    bug: "bg-green-600",
    rock: "bg-yellow-700",
    ghost: "bg-purple-700",
    dragon: "bg-indigo-700",
    dark: "bg-gray-800",
    steel: "bg-gray-500",
    fairy: "bg-pink-300",
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Pokédex</h1>

      <div className="flex justify-center">
        <ul className="grid grid-cols-3 gap-8">
          {pokemon.map((poke, index) => (
            <li
              key={index}
              className={`${
                pokeTypes[poke.type.split(" | ")[0]]
              } p-6 rounded-xl shadow-md flex flex-col transform transition duration-300 hover:scale-105`}
            >
              <img
                src={poke.sprite}
                alt={poke.name}
                className="w-24 h-24 mb-3"
              />
              <p className="text-lg text-center font-semibold text-white capitalize">
                {poke.name}
              </p>

              <p className="text-xs font-semibold text-white capitalize text-center">
                {poke.type}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
