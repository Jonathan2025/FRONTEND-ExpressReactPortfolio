// 3) created the component and added simple boiler plates
// function Footer(props) {
//     return <h1>Footer</h1>;
//   }
  
//   export default Footer;


// import the icons from font awesome 
// import { faGithub, faLinkedin, faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState, useEffect } from "react";


function Footer(props) {
  // This is a more concise way of using the async functions and fetching the data from an API than what we did in class
  // https://dev.to/antdp425/react-fetch-data-from-api-with-useeffect-27le
  
  const [contactInfo, setContactInfo] = useState({});
  const URL = "http://localhost:4000/contact";

  //useEffect hook to make an API call using the fetch function
  useEffect(() => {
    // fetch the URL for where we want to fetch the data from
    fetch(URL)
      .then((response) => response.json()) // the first "then" method is used to take on a response object
      .then((data) => setContactInfo(data)); // the second "then" method takes the JSON data as an argument. 
      //It then sets the contactInfo state using the setContactInfo function which causes the component to re-render with the new data.
  }, []);

  return (
    <footer className="footer">
      <div className="contact">
        <p>Contact:</p>
        <br></br>
      </div>
      <div>
        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
        <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">{contactInfo.linkedin}</a>
        <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">{contactInfo.github}</a>
      </div>
    </footer>
  );
}

export default Footer;