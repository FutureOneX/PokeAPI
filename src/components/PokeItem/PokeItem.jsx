import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './PokeItem.css'

const PokeItem = (props) => {

  const [pokeDetails, setPokeDetails] = useState({});
  useEffect(() => {
    fetch(props.url)
    .then(res => res.json())
    .then(data => setPokeDetails(data))

  }, [])
  return ( 
    <article className="poke-item">
      <Link to={`/detail/${pokeDetails.id}`}>
            <img src={pokeDetails.sprites?.other["official-artwork"].front_default} alt="Pokemon Image" className="w-1 h-1"/>
            </Link>
      <div>
        <h1>{pokeDetails.name}</h1>
        <p>#{pokeDetails.id}</p>
      </div>
    </article>
  );
}

export default PokeItem ;