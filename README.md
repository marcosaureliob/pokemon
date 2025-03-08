Pokedex
This is a simple Pokedex app built with React, TypeScript, Tailwind CSS, and utilizing the PokéAPI. The app displays a list of Pokémon along with their types and images, providing a colorful and interactive view of each Pokémon.

Features
Fetches data for the first 151 Pokémon from the PokéAPI.
Displays Pokémon name, image, and type(s).
Dynamic background colors based on Pokémon types using Tailwind CSS.
Supports multiple types per Pokémon, with color mapping for the first type.
Technologies Used
React: A JavaScript library for building user interfaces.
TypeScript: A statically typed superset of JavaScript.
Tailwind CSS: A utility-first CSS framework.
PokéAPI: A free API that provides Pokémon data.
Axios: A promise-based HTTP client for making API requests.
Installation
Clone the repository:

bash
Copiar
Editar
git clone https://github.com/your-username/pokedex.git
Navigate into the project directory:

bash
Copiar
Editar
cd pokedex
Install the dependencies:

bash
Copiar
Editar
npm install
Start the development server:

bash
Copiar
Editar
npm start
Open your browser and go to http://localhost:3000 to view the app.

Project Structure
src/App.tsx: Main application component where the logic to fetch Pokémon data and render the list is handled.
src/services/api.ts: API configuration and Axios instance.
src/styles/tailwind.config.js: Tailwind CSS configuration file.
How It Works
The app fetches data from the PokéAPI for the first 151 Pokémon.
For each Pokémon, the name, sprite (image), and type(s) are extracted.
The types are used to dynamically set the background color for each Pokémon card using the pokeTypes mapping.
The app is responsive, displaying Pokémon in a grid layout that adapts to different screen sizes.
Usage
Each Pokémon card displays its image, name, and type(s).
The colors of the cards are dynamically set based on the Pokémon's type(s), using the pokeTypes color mapping.
Hovering over a Pokémon card will slightly enlarge it, thanks to the Tailwind CSS transition effect.
Example

Contributing
Fork the repository.
Create your feature branch (git checkout -b feature/your-feature).
Commit your changes (git commit -am 'Add some feature').
Push to the branch (git push origin feature/your-feature).
Create a new Pull Request.
License
