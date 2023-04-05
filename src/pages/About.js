// 10) import useState and useEffect from react 
import { useState, useEffect, useCallback } from "react";



// 3) created the component and added simple boiler plates
function About(props) {

    // 11 create state to hold about data
    const [about, setAbout] = useState(null);

    // 12 create an asynchronous function to make an API call 
    // in order to work with netlify we use useCallback to prevent unnecessary re-renders of child components that depend on a function prop
    // this is based on the recommendation from netlify error message
    const getAboutData = useCallback(async () => {
        // make api call and get response
        const response = await fetch(props.URL + "about");
        // turn response into javascript object
        const data = await response.json();
        // set the about state to the data
        setAbout(data)
        console.log(data) // {name: 'Jonathan Liang', email: 'Jonathan.Liang75@outlook.com'...
      }, [props.URL])
    
    // 13  make an initial call for the data inside a useEffect, so it only happens once on component load
    // add a dependency array [getAboutData]to fix the error we get from netlify. [getAboutData] is not an actual array we defined, its just a dependency array of the useeffect
    useEffect(()=> {
        getAboutData()
    }, [getAboutData])
    

    // 14 define a loaded function that will return the JSX needed once we get the data
    const loaded = () => (
        <div className="aboutInfo">
          <h2>{about.name}</h2>
          <p id="aboutBio">{about.bio}</p>
          {/* 23 now we want to add in our headshot to our profile */}
          <img src={`${props.URL}/${about.headshot}`} alt={about.headshot} width="300" height="280"/>
        </div>
      )



    // return <h1>About</h1>;
    // 15 if data arrives return the result of loaded, if not, an h1 that says loading
    return about ? loaded() : <h1>Loading...</h1>
  }
  
  export default About;