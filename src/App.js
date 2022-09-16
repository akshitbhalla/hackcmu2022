import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("https://api.agify.io?name=michael")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Press <code>Ctrl+Shift+J</code> on Windows/Linux, or{" "}
          <code>Cmd+Opt+J</code> on macOS to view Console.
        </p>
      </header>
    </div>
  );
}

export default App;
