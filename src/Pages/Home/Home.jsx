import AboutUs from '../AboutUs/AboutUs';
import BuyPlants from '../BuyPlants/BuyPlants';
import Categories from '../Categories/Categories';
import Customer from '../Customer/Customer';
import Footer from '../Footer/Footer';
import Nb from '../Nb/Nb';
import Scroll from '../Scroll/Scroll';
import Selling from '../Selling/Selling';


const Home = () => {
  return (
    <>
    <div>
      <Scroll/>
   <Nb/>
<BuyPlants/>
<Selling/>
<AboutUs/>
<Categories/>
<Customer/>
<Footer/>
    </div>
    </>
  )
}

export default Home;