import { useState } from "react";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Todo } from "./pages/Todo";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/toDo" element={<Todo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
