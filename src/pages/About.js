// 10) import useState and useEffect from react 
import { useState, useEffect } from "react";



// 3) created the component and added simple boiler plates
function About(props) {

    // 11 create state to hold about data
    const [about, setAbout] = useState(null);

    // 12 create an asynchronous function to make an API call 
    const getAboutData = async () => {
        // make api call and get response
        const response = await fetch(props.URL + "about");
        // turn response into javascript object
        const data = await response.json();
        // set the about state to the data
        setAbout(data);
      }
    
    // 13  make an initial call for the data inside a useEffect, so it only happens once on component load
    useEffect(() => getAboutData(), [])
    


    return <h1>About</h1>;
  }
  
  export default About;