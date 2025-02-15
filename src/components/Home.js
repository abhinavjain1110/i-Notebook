import React from "react";
import Notes from "./Notes";
//import AddNote from "./AddNote";

const Home = (props) => {
  const {showAlert}=props
  return (
    <div className="d-flex flex-column min-vh-100"> 
      
      <Notes showAlert={showAlert}/>
    </div>
  );
};

export default Home;
