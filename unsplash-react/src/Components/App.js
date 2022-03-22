import React from 'react';
import './App.css';
import SearchPhotos from "../searchPhotos"
import InputComplete from "../Components/InputComplete"

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Photo Search App</h1>
        <SearchPhotos />
        <h1></h1>
        <h1>React Autocomplete Demo</h1>
        <h2>Start typing and experience React autocomplete!</h2>
      </div>
    </div>
  );
}

export default App;