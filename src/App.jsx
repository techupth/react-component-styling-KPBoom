import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button text="Primary"/>
        <Button text="Secondary"/>
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert type="error" text="error"/>
        <Alert type="warning" text="warning"/>
        <Alert type="info" text="info"/>
        <Alert type="success" text="success"/>
      </div>
    </div>
  );
}

export default App;
