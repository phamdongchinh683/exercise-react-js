import "./App.css";
import * as util from "./utils/index.js";
function App() {
  console.log(util.displayPrimeSmaller10000());
  return (
    <div className="App">
      <h1>squareArea: {util.squareArea(10)}</h1>
      <h1>circularArea: {util.circularArea(2)}</h1>
      <h1>rectangularArea: {util.rectangularArea(10, 10)}</h1>
      <h1>factorial: {util.factorial(5)}</h1>
    </div>
  );
}

export default App;
