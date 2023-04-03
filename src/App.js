import logo from './logo.svg';
import './App.css';

// 4 Delete the original boiler plate and import the Components, pages and routes from router dom 
// IMPORT COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
// IMPORT PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";




function App() {
  // 5) URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
  const URL = "http://localhost:4000/"





  return (
    <div className="App">
      

    </div>
  );
}

export default App;
