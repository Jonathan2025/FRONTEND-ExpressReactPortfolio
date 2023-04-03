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
    

    //6 added in the new boiler plate which has paths to the home, project and about page
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/projects" element={<Projects URL={URL}/>}/>
        <Route exact path="/about" element={<About URL={URL}/>}/>
      </Routes>
      <Footer />
    </div>
   
  );
}

export default App;
