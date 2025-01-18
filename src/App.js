import "./App.css";
import * as example from "./utils/Math";
function App() {
  return (
    <div className="App">
      <h1>rectangular perimeter: {example.rectangularPerimeter(12, 12)}</h1>
      <h1>circular circumference: {example.circularCircumference(2)}</h1>
      <h1>triangle perimeter: {example.rectangularPerimeter(10, 10, 10)}</h1>
    </div>
  );
}

export default App;
