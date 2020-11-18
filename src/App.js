
import React, { useState } from "react";
import './App.css';
import MovieList from './MovieList';
import Recherche from './recherche';
import AddMovie from './AddMovie';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
 
  const [filter, setFilter] = useState({
    text: '', star: 0
  })
  const [movies, setMovies] = useState([
    {
      image: "https://popandup.fr/wp-content/uploads/2015/12/StarWars2HomePopUp.jpg",
      title: "Star Wars",
      description: "Composée de trois trilogies et de plusieurs films dérivés, la saga créée par George Lucas comprend à ce jour douze films sortis et plusieurs films en développement. ",
      rate: 2,
    },
    {
      image: "https://fr.web.img2.acsta.net/pictures/18/07/02/17/25/3643090.jpg",
      title: "Harry Potter à l'école des sorciers",
      description: "Cest un film fantastique britannico-américain réalisé par Chris Columbus, sorti en 2001.",
      rate: 4,
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/en/1/15/Casino_Royale_2_-_UK_cinema_poster.jpg",
      title: "Casino Royale",
      description: "le film a été tourné en direct dans les locaux de la chaîne de télévision.",
      rate: 5,
    },
    {
      image: "https://fr.web.img4.acsta.net/pictures/18/11/12/10/02/5168605.jpg",
      title: "Bumblebee",
      description: "est un film de science-fiction américain écrit par Christina Hodson et réalisé par Travis Knight, sorti en 2018.",
      rate: 3,
    },


  ])
  return (
    <div className="App">
      <h1>Movies</h1>
      <div className= "container">
        <Recherche setFilter={setFilter} filter={filter} />
      <AddMovie addFilm={setMovies} films={movies}/>
      </div>
      
      <MovieList movies={movies.filter((e) => 

        (e.title.toLowerCase().includes(filter.text.toLowerCase())) && e.rate >= filter.star
         

      )} />
      
      {console.log(filter)}
      
      
    </div>

  );
}

export default App;
