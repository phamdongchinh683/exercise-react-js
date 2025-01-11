import "./App.css";
import * as util from "./utils/index.js";
function App() {
  console.log(util.displayPrimeSmaller1000());
  return (
    <div className="App">
      <h1>squareArea: {util.squareArea(10)}</h1>
      <h1>circularArea: {util.squareArea(2)}</h1>
      <h1>rectangularArea: {util.squareArea(123)}</h1>
      <h1>factorial: {util.factorial(6)}</h1>
    </div>
  );
}

export default App;
