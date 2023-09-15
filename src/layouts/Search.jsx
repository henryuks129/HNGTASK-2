import '../styles/Search.css'
import search from '../assets/Searchicon.svg'

const Search = () => {
  return (
    <div className='d-flex input-body'>
        <input type="search" placeholder='What do you want to watch?' className='nav-input d-none d-lg-block'/>
        {/* <img src={search} alt="" className='search-icon'/> */}
    </div>
  )
}

export default Search