// 16 import useState and useEffect from react 
import { useState, useEffect, useCallback } from "react";



// 3) created the component and added simple boiler plates
function Projects(props) {

    // 17) create state to hold projects 
    const [projects, setProjects] = useState(null)

    //18 create function to make api call to get the data
     // in order to work with netlify we use useCallback to prevent unnecessary re-renders of child components that depend on a function prop
    // this is based on the recommendation from netlify error message
    const getProjectsData = useCallback(async () => {
    //make api call and get response
        const response = await fetch(props.URL + "projects");
        // turn response into javascript object
        const data = await response.json();
        // set the projects state to the data
        setProjects(data)
        console.log(data)
  }, [props.URL])

    // 19 make an initial call for the data inside a useEffect, so it only happens once on component load
    // add a dependency array [getProjectstData]to fix the error we get from netlify. [getProjectsData] is not an actual array we defined, its just a dependency array of the useeffect

    
    useEffect(()=> {
        getProjectsData()
    }, [getProjectsData])
    

    // 20 define a loaded function that will return the JSX needed once we get the data
    const loaded = () => {
        return projects.map((project) => (
          <div className="card">
             
            <div className="projectContainer">
            <h1>{project.name}</h1>
            {/* 22 now we want to add in the link to the image because before it wasnt rendering */}
            <img className="projectImage" src={`${props.URL}/${project.image}`} alt={project.name} width="300" height="240"/>
                <br></br>
                  <a href={project.git}>
                    <button>Github</button>
                  </a>
                  <a href={project.live}>
                    <button>Live Site</button>
                  </a>
            </div>



          </div>
        ));
      }

    // 21 Ternitary operator that returns the loaded funciton if there is project data 
    return projects ? loaded() : <h1>Loading...</h1>
  }
  
  export default Projects;