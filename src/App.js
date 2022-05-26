import Imageslider from "./Imageslider";
import './App.css';
import {Sliderdata} from "./Sliderdata"

function App() {
  return (
    <div className="App">
     <h1>Zahra's Slider</h1>
<Imageslider slides={Sliderdata} />

    </div>
  );
}

export default App;
