import React from "react";


function Home() {
  let Category = localStorage.getItem("Category").replace(/"/g, "");
  if (Category === "Employer") {
    return (
      <>
        <button><a href="/jobposting">Create a Job</a></button>
        <button><a href="/joblisting">Available Jobs</a></button>
     
      </>
    );
  } else {
 
    return (
      <>
        <button><a href="/joblisting">Available Jobs</a></button>
    
     
      </>
    ); }
  }

  export default Home;
