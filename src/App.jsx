// DEPENDENCIES
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// PAGES
import Edit from "./pages/Edit";
import FourOFour from "./pages/FourOFour";
import Home from "./pages/Home";
import Index from "./pages/Index";
import New from "./pages/New";
import Show from "./pages/Show";
import About from "./pages/About";
import "./App.css";

// COMPONENTS
import NavBar from "./components/NavBar";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/bagels" replace />} />
          <Route path="/bagels" element={<Index />} />
          <Route path="/bagels/new" element={<New />} />
          <Route path="/bagels/:id" element={<Show />} />
          <Route path="/bagels/:id/edit" element={<Edit />} />
          <Route path="/bagels/about" element={<About />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
