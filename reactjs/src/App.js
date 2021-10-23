import './App.css';
import {useEffect, useState} from "react";
import {GETBreedsImages} from "./services";
import Breeds from "./components/Breeds";

function App() {
  const [breeds, setBreeds] = useState([]);

  const getInitialData = async ()=> {
    const _breeds = await GETBreedsImages();
    setBreeds(_breeds);
  }

  useEffect(()=> {
    getInitialData();
  }, []);

  return (
    <div className="App">
      <Breeds breeds={breeds}/>
    </div>
  );
}

export default App;
