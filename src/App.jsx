import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes";
import AuthDetails from "./components/AuthDetails";
import Header from "./components/Rep/Header";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <AppRoutes />
      </Router>
      <AuthDetails />
    </div>
  );
}

export default App;
