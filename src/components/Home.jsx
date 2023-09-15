import Footer from '../layouts/Footer'
import FeaturedMvies from '../pages/FeaturedMvies'
import Hero from '../pages/Hero'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className=''>
        <Hero/>
        <FeaturedMvies/>
        <Footer/>
    </div>
  )
}

export default Home