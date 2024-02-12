import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { SingleView } from "./pages/SingleView/SingleView";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/singleview/:id" element={<SingleView />} />
      </Routes>
    </div>
  );
}

export default App;
