import { useParams } from 'react-router-dom'
import Sidebar from '../layouts/Sidebar'
import '../styles/Details.css'
import useFetch from '../hooks/useFetch'
import playbutton from '../assets/Playbutton.svg'

const Details = () => {
  const {id} = useParams();
  console.log(id);
  const apikey = "705b3786dab5e0e206440b5d54b07d90";
  const API_URL = `https://api.themoviedb.org/3/movie/${id}`;
  console.log(API_URL);
  const{data,isLoading,error} = useFetch(`${API_URL}?api_key=${apikey}&language=en-US`)
  // const {genres} = data
  return (
    <div className='d-flex details-body'>
        <Sidebar/>
        <div className="container details-menu">
          <div className='loading-state'>
           {isLoading && <h2>loading.....</h2>}
           {error && <h2> {error.message} </h2>}
          </div>
          <div className='backdrop mt-3' style={{background: `url(https://image.tmdb.org/t/p/w1280/${data?.backdrop_path})`, opacity: '85%'}}>
            <div className='trailer-body'>
            <div className='playbutton-body'>
              <img src={playbutton} alt="" />
            </div>
            <h5 className='text-white'>Watch Trailer</h5>
            </div>
          </div>
          <div className='d-flex'>
            <div>
            <h1 className='movie-title' data-testid="movie-title">{data.title}</h1>
            <div className='d-flex gap-4'>
              {data.genres?.map((genre)=>{
                return(
                  <div key={genre.id} className='d-flex genres-main text-center'>
                    <p className='genres-body text-center'>{genre?.name}</p>
                  </div>
                )
              })}
            </div>
            <h5 data-testid="movie-release-date">{data.release_date}</h5>
            <h5 data-testid="movie-runtime">Runtime: {data.runtime}m</h5>
            <p data-testid="movie-overview">{data.overview}</p>
            </div>
            <div></div>
          </div>
        </div>
    </div>
  )
}

export default Details