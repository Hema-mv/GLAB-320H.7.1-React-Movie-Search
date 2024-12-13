import {useState, useEffect} from "react";
//import logo from "./logo.svg";
import "./App.css";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  const apiKey = "86692ad0";

  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    try {
console.log(searchTerm)
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    const data = await response.json();
    console.log(data)
    setMovie(data);
  } catch(e) {
		console.error(e)
	}
  };

  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("Clueless");
  }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}