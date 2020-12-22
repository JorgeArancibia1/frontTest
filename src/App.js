import { Producto } from "./views/Producto";
import './assets/styles/main.scss';
require('dotenv').config()


function App() {
  return (
    <div className="App">
      <Producto />
    </div>
  );
}

export default App;
