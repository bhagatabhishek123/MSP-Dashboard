import "./App.css";
import Iframe from "react-iframe";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import Looker from "./components/Looker";
import { Register } from "./components/Register";
import Dashboard from "./components/Dashboard";
import Freshdesk from "./components/Freshdesk";
// import Freshdesk from "./Solutions/Freshdesk";

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/looker" element={<Looker />} />
            <Route path="/freshdesk" element={<Freshdesk />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
