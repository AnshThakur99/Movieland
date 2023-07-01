import { useState,useEffect } from 'react';
//Here is your key: 4b4a053aimport
import Moviecard from './MovieCard';
 import './App.css';
  import SearchIcon from './search.svg';
const API_URL = 'http://www.omdbapi.com?apikey=4b4a053a'
const movie1= {
    "Title": "Spiderman",
    "Year": "2010",
    "imdbID": "tt1785572",
    "Type": "movie",
    "Poster": "N/A"
}
const App = () => {
    const [movies, setMovies ] = useState([]);
    const [searchTerm,setSearchTerm] = useState('');
    const searchMovies = async (title) => {
     const response = await fetch(`${API_URL}&s=${title}`);
     const data = await response.json();

     setMovies(data.Search);
    }
    useEffect(() => {
          searchMovies('spiderman');
    },[]);

    return (
    <div className= "app">
        <h1> MovieLand</h1>

        <div className ="search"> 
        <input 
         placeholder="Search For Movies"
         value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)} 
        />
         < img
         src={SearchIcon}
         alt="search"
         onClick={() => searchMovies(searchTerm)}
         />
        </div>
        {
            movies?.length > 0
            ? (
                <div className="container">
                    {movies.map((movie) => (
                    <Moviecard  movie = {movie}/>
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2> No movies found</h2>
                </div>
            )
        }
       
    </div>
        );
}
export default App;