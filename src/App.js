
import './App.css';

import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './components/Pages/Shop';
import ShopCategory from './components/Pages/ShopCategory';
import Product from './components/Pages/Product';
import Cart from './components/Pages/Cart';
import Register from './components/Pages/Register';
import Footer from './components/Footer/Footer';
import jewellery_banner from './components/Assests/banner_jewellry.jpg';
import crafts_banner from './components/Assests/banner_crafts.jpg';
import decoratives_banner from './components/Assests/banner_decoratives.jpg';
import clothes_banner from './components/Assests/banner_clothes.png';
import Login from './components/Pages/Login';



function App() {
  return (
    <div>
      <BrowserRouter>
      
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop></Shop>}/>
          <Route path='/jewellery' element={<ShopCategory banner={jewellery_banner} category="jewellery"></ShopCategory>}/>
          <Route path='/crafts' element={<ShopCategory banner={crafts_banner} category="crafts"></ShopCategory>}/>
          <Route path='/decoratives' element={<ShopCategory banner={decoratives_banner} category="decoratives"></ShopCategory>}/>
          <Route path='/clothes' element={<ShopCategory banner={clothes_banner} category="clothes"></ShopCategory>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/> 
          </Route>
          
          <Route path='/cart' element={<Cart></Cart>}/>
          <Route path='/becomeseller' element={<Register></Register>}/>
          <Route path='/login' element={<Login></Login>}/>

        </Routes>
        <Footer/>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
