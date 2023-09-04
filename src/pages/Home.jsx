import { Link } from "react-router-dom";
import PokeList from "../components/PokeList/PokeList";

const Home = () => {

  
  return ( 
    <>
    <article>
        <div>
          <img src="./assets/Images/Pokemon-Logo.png" alt="" />
          <PokeList />
        </div>
      </article>
    </>
  );
}

export default Home;