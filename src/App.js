import React from "react";
import NasaList from "./Components/NasaList";
import "./App.css";
import Carousels from "./Components/Carousels";

function App() {

  return (
    // <div>
    //   <Jumbotron>
    //     <Container>
    //       <h1>
            
    //       </h1>
    //     </Container>
    //   </Jumbotron>
    // </div>
    <div className="App">
      <h1>Learn Your Galaxy!</h1>
      <Carousels/>
      <NasaList/>
    </div>
  );
}

export default App;
