import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from './componentes/navbar/NavBar'
import Inicio from './componentes/paginas/Inicio' 
import ItemDetail from './componentes/navbar/ItemDetail';
import SwapiContainer from './componentes/swapi/SwapiContainer';
import ItemListContainer from './componentes/navbar/ItemListContainer'
import CartWidget from './componentes/navbar/CartWidget';
import { CartContextProvider } from './componentes/Context/CartContext';
import CartDetail from './componentes/Cart/Cart'
import ProductsContainter from './componentes/firebase/ProductsContainter';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcB840Fef_I0HeDLDmRYb0lms3rWr_EQ4",
  authDomain: "react-5c2dc.firebaseapp.com",
  projectId: "react-5c2dc",
  storageBucket: "react-5c2dc.appspot.com",
  messagingSenderId: "555446388211",
  appId: "1:555446388211:web:32621d0b385546ab953e86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



function App() {
  //DOM
  return (
    <div className="App">
      <CartContextProvider>
      <Router>
          <NavBar/>
          <Routes>
          <Route exact path="/" element={<Inicio/>}/>
            <Route  path='/:id' element={<ItemDetail/>}/>
            <Route exact path="ItemListContainer" element={<ItemListContainer/>}/>
            <Route  path="/SwapiContainer" element={<SwapiContainer/>}/>
            <Route  path="/ProductsContainer" element={<ProductsContainter/>}/>
            <Route  path='Cart' element={<CartDetail/>}/>
            <Route  path="/CartWidget" element={<CartWidget/>}/>
          </Routes>
       </Router>
       </CartContextProvider>
    </div>
  );
}

export default App;
