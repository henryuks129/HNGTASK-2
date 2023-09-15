import { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";
import axios from "axios";
import "../styles/FeaturedMovies.css";
// import { API_KEY } from '../config/Config'
import rightarrow from "../assets/Chevron right.svg";
import imdb from "../assets/imdbimage.svg";
import rottentomato from "../assets/rottentomato.svg";
import heart1 from '../assets/Hearticon1.svg'
import heart2 from '../assets/Hearticon2.svg'

const FeaturedMvies = () => {
  // const {id} = useParams();
  const [data, setData] = useState([]);
  const apikey = "705b3786dab5e0e206440b5d54b07d90";
  const API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US`;
  const fetchedMovies = async () => {
    try {
      const fetchedUrl = await axios.get(API_URL);
      const myData = fetchedUrl.data.results;
      setData(myData);
      console.log(myData.slice(0, 10));
    } catch (error) {
      console.error("Error", error);
    }
  };
  useEffect(() => {
    fetchedMovies();
  }, []);
  const [clickimage, setClickImage] = useState(false);
  let clickbutton = ()=>{
      setClickImage(!clickimage)
  }
 
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h2>Featured Movie</h2>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <p>See more</p>
            <img src={rightarrow} alt="" />
          </div>
        </div>
        <div className="card-body">
          {data.slice(0, 10).map((datum) => {
            const {
              id,
              poster_path,
              title,
              release_date,
              vote_average,
              genre_ids,
            } = datum;
            return (
              <div
                key={id}
                className="relative poster-card-body"
                data-testid="poster-card"
              >
                <Link to={`/Details/${id}`} className="text-decoration-none">
                  <div className="poster-card text-dark">
                    <img
                      data-testid="movie-poster"
                      src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                      alt={title}
                    />
                    <p data-testid="movie-release-date">{release_date}</p>
                    <h3 data-testid="movie-title">{title}</h3>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex gap-3">
                        <img src={imdb} alt="" />
                        <p>{vote_average}/100</p>
                      </div>
                      <div className="d-flex gap-3">
                        <img src={rottentomato} alt="" />
                        <p>96.5%</p>
                      </div>
                    </div>
                    {/* <p>{genre_ids}</p> */}
                  </div>
                </Link>
                <div className="icon-body">
                  <div className="favourite-icon">
                    <img onClick={clickbutton} src={clickimage ? heart2 : heart1} alt="" className="d-flex justify-content-center align-items-center"/>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedMvies;
