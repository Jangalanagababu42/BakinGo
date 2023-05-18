import { Route, Routes } from "react-router-dom";
import "./App.css";
import MockAPI from "./components/Mockman";
import Home from "./pages/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mockman" element={<MockAPI />} />
      </Routes>
    </div>
  );
}

export default App;
