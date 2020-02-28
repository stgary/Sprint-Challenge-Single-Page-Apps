import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function CharacterList() {
  
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    Axios.get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/")
    .then(response => {
      console.log(response.data.results);
      const characters = response.data.results.filter(character => 
        character.name.toLowerCase().includes(query.toLowerCase()
        ));
        setData(characters);
    })
  }, [query]);

  const handleInputChange = e => {
    setQuery(e.target.value);
  }

  return (
    <section className="character-list">
      <form>
        <input 
          type="text"
          name="name"
          placeholder="search by name"
          value={query}
          onChange={handleInputChange}
        />
      </form>
      <div>
        {data.map(data => {
          return (
            <div key={data.id}>
              <h2>{data.name}</h2>
              <h3>Species: {data.species}</h3>
              <h3>Status: {data.status}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
