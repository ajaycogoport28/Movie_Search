import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const [movies, setMovies] = useState();
  const [search, setSearch] = useState("avengers");
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=cbc779cc`)
    // http://www.omdbapi.com/?s=${search}&apikey=cbc779cc
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, [search]);

  function getDetails() {
    var searchedMovie = document.getElementById('search').value
    setSearch(searchedMovie);
    document.getElementById('search').value = ''
  };
  console.log(movies);
  return (
    <div>
      <div className="container-fluid navbar_container">
          <div className="row">
            <div className="col-sm-3 searchmovies">
                <h1>Search Movies</h1>
            </div>
              <div className="col-sm-4">
                 <div className="searchBar">
                   <input className="inputSearch" type="text" id="search"/>
                  </div>
              <div className="">
                 <button className="button1" onClick={getDetails} >Search</button>
              </div>
            </div>

           </div>
      </div>
      <div className="container-fluid container11">
        <div className="movie-list row">
        {
            movies && <> {movies.Search.map((movie) => (

                  <div className="col-sm-3 movie_" key={movie.imdbID}>
                    <Link  to={`/moviedetails/${movie.imdbID}`}><img className="imagestyle"  src={movie.Poster} /></Link>
                  {/* <img className="imagestyle"  src={movie.Poster} /> */}
                     <div className="">
                      <Link className="titlepara" to={`/moviedetails/${movie.imdbID}`}>{movie.Title}</Link>
                     </div>
                 </div> 

              ))}</>
            }
     
        </div>
        </div>
    </div>
    
  );
}
export default Home;
