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
        setAbout(data)
        console.log(data) // {name: 'Jonathan Liang', email: 'Jonathan.Liang75@outlook.com'...
      }
    
    // 13  make an initial call for the data inside a useEffect, so it only happens once on component load
    useEffect(()=> {
        getAboutData()
    }, [])
    

    // 14 define a loaded function that will return the JSX needed once we get the data
    const loaded = () => (
        <div className="aboutInfo">
          <h2>{about.name}</h2>
          <h3>{about.email}</h3>
          <p>{about.bio}</p>
          {/* 23 now we want to add in our headshot to our profile */}
          <img src={`${props.URL}/${about.headshot}`} alt={about.headshot} width="300" height="280"/>
        </div>
      )



    // return <h1>About</h1>;
    // 15 if data arrives return the result of loaded, if not, an h1 that says loading
    return about ? loaded() : <h1>Loading...</h1>
  }
  
  export default About;