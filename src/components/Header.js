// 7 import link from router dom
import { Link } from "react-router-dom"

// 3) created the component and added simple boiler plates
function Header(props) {

  //8) simple inline style for the nav tag and we will use it below in step 9
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid black",
    padding: "8px",
    width: "90%",
    margin: "auto",
  }

  // 9 return statement that will render the links to the pages, we also added in the style from above in step 8
  return (
    <header>
      <h1>My Portfolio Page</h1>
      <nav style={navStyle}>
        <Link to="/">
          <div>HOME</div>
        </Link>
        <Link to="/about">
          <div>ABOUT</div>
        </Link>
        <Link to="/projects">
          <div>PROJECTS</div>
        </Link>
      </nav>
    </header>
  )
  }
  
  export default Header;