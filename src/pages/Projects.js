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





    return <h1>Projects</h1>;
  }
  
  export default Projects;