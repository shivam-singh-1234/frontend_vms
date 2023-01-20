import { BrowserRouter, Route,Routes} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Footer from "./components/Footer";
import Voucher from "./components/Voucher";
import './App.css';

function App() {

  return (
  <BrowserRouter>
    <Navbar/>
    {/* <Footer/> */}
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/voucher' element={<Voucher/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
