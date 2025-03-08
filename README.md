<h1>Pokedex</h1>

<p>This is a simple <strong>Pokedex</strong> app built with <strong>React</strong>, <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>, and utilizing the <strong>PokéAPI</strong>. The app displays a list of Pokémon along with their types and images, providing a colorful and interactive view of each Pokémon.</p>

<h2>Features</h2>
<ul>
  <li>Fetches data for the first 151 Pokémon from the <strong>PokéAPI</strong>.</li>
  <li>Displays Pokémon name, image, and type(s).</li>
  <li>Dynamic background colors based on Pokémon types using <strong>Tailwind CSS</strong>.</li>
  <li>Supports multiple types per Pokémon, with color mapping for the first type.</li>
</ul>

<h2>Technologies Used</h2>
<ul>
  <li><strong>React</strong>: A JavaScript library for building user interfaces.</li>
  <li><strong>TypeScript</strong>: A statically typed superset of JavaScript.</li>
  <li><strong>Tailwind CSS</strong>: A utility-first CSS framework.</li>
  <li><strong>PokéAPI</strong>: A free API that provides Pokémon data.</li>
  <li><strong>Axios</strong>: A promise-based HTTP client for making API requests.</li>
</ul>

<h2>Installation</h2>
<pre>
<code>1. Clone the repository:

   git clone https://github.com/your-username/pokedex.git

2. Navigate into the project directory:

   cd pokedex

3. Install the dependencies:

   npm install

4. Start the development server:

   npm start

5. Open your browser and go to http://localhost:3000 to view the app.</code>
</pre>

<h2>Project Structure</h2>
<ul>
  <li><strong>src/App.tsx</strong>: Main application component where the logic to fetch Pokémon data and render the list is handled.</li>
  <li><strong>src/services/api.ts</strong>: API configuration and Axios instance.</li>
  <li><strong>src/styles/tailwind.config.js</strong>: Tailwind CSS configuration file.</li>
</ul>

<h2>How It Works</h2>
<ol>
  <li>The app fetches data from the <strong>PokéAPI</strong> for the first 151 Pokémon.</li>
  <li>For each Pokémon, the name, sprite (image), and type(s) are extracted.</li>
  <li>The types are used to dynamically set the background color for each Pokémon card using the <strong>pokeTypes</strong> mapping.</li>
  <li>The app is responsive, displaying Pokémon in a grid layout that adapts to different screen sizes.</li>
</ol>

<h2>Usage</h2>
<ul>
  <li>Each Pokémon card displays its image, name, and type(s).</li>
  <li>The colors of the cards are dynamically set based on the Pokémon's type(s), using the <strong>pokeTypes</strong> color mapping.</li>
  <li>Hovering over a Pokémon card will slightly enlarge it, thanks to the <strong>Tailwind CSS</strong> transition effect.</li>
</ul>


<h2>Contributing</h2>
<ol>
  <li>Fork the repository.</li>
  <li>Create your feature branch (<code>git checkout -b feature/your-feature</code>).</li>
  <li>Commit your changes (<code>git commit -am 'Add some feature'</code>).</li>
  <li>Push to the branch (<code>git push origin feature/your-feature</code>).</li>
  <li>Create a new Pull Request.</li>
</ol>


