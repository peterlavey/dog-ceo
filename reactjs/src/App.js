import './App.css';
import SearchBreedsPresenter from "./presentation/views/SearchBreeds/searchBreedsPresenter";
import DI from "./presentation/di/di";


function App() {
  return (
    <div className="App">
      <SearchBreedsPresenter useCase={DI.BreedUseCase}/>
    </div>
  );
}

export default App;
