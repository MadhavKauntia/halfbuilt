import { useState } from "react";
import "./App.css";
import Login from "./pages/Login/Login";
import Projects from "./pages/Projects/Projects";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App" id="app">
      {!loggedIn && <Login setLoggedIn={setLoggedIn} />}
      {loggedIn && <Projects />}
    </div>
  );
}

export default App;
