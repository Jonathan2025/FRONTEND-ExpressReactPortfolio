// 16 import useState and useEffect from react 
import { useState, useEffect } from "react";



// 3) created the component and added simple boiler plates
function Projects(props) {

    // 17) create state to hold projects 
    const [projects, setProjects] = useState(null)

    //18 create function to make api call to get the data
    const getProjectsData = async () => {
    //make api call and get response
    const response = await fetch(props.URL + "projects");
    // turn response into javascript object
    const data = await response.json();
    // set the projects state to the data
    setProjects(data)
    console.log(data)
  }

    // 19 make an initial call for the data inside a useEffect, so it only happens once on component load
    useEffect(()=> {
        getProjectsData()
    }, [])

    // 20 define a loaded function that will return the JSX needed once we get the data
    const loaded = () => {
        return projects.map((project) => (
          <div>
            <h1>{project.name}</h1>
            <img src={project.image} />
            <a href={project.git}>
              <button>Github</button>
            </a>
            <a href={project.live}>
              <button>live site</button>
            </a>
          </div>
        ));
      }

    // 21 Ternitary operator that returns the loaded funciton if there is project data 
    return projects ? loaded() : <h1>Loading...</h1>
  }
  
  export default Projects;