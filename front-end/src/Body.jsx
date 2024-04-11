import Nav from "./components/Nav.jsx";
import "./body.css";
import logo from "./assets/logo.svg";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home.jsx";
import NewSale from "./pages/NewSale.jsx";
import Restock from "./pages/Restock.jsx";


export default function Body(){

	return (
            <>
              <div className="logo-container">
                <img src={logo} alt="logo"/>
              </div>
	      <div className="body-container">
                <BrowserRouter>
                  <Nav/>
                  <div className="body-card">
                  <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/newsale" element={<NewSale/>}/>
                    <Route path="/restock" element={<Restock/>}/>
                  </Routes>
                  </div>
                </BrowserRouter>
	      </div>
            </>
	);
}
