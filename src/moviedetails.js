import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import { Outlet, Link } from "react-router-dom";

function Details() {
let params = useParams();
const [movie, setMovie] = useState();
useEffect(() => {
    fetch("http://www.omdbapi.com/?i="+params.movieid+"&apikey=cbc779cc")
    // http://www.omdbapi.com/?i=tt3896198&apikey=cbc779cc
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, []);
return(
    <div>
        

           {movie ? <>
           <div className="containe-fluid heading11">
            <div className="row">
            <div className="col-sm-11"><spam>Movie Details page</spam>
            </div>
            <div className="col-sm-1">
            <spam><Link className="back" to="/">Back</Link></spam>
            </div>
            </div>
           </div>
           
           <div>
           <div className="container container11"></div>
           <div className="row detailPageStyle">
               <div className="col-sm-3">
                    <img className="imageDetails" src={movie.Poster}/>
                    <p>{movie.Title}</p>
               </div>

               <div className="col-sm-8 textDeatials">
                   <p>Actors : {movie.Actors}</p>
                   <p>Released : {movie.Released}</p>
                   <p>IMDB Ratings : {movie.imdbRating}</p>
                   <p>Runtime : {movie.Runtime}</p>
                   <p>{movie.Plot}</p>
               </div> 
            </div>
           </div>
           
           </> : <h1>Loading</h1>}


    </div>
    
 );   
}

export default Details;


