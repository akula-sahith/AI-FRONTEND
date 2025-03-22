import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupPage from "./SignUpPage";
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard/Dashboard";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
      </Routes>
    </Router>
    </>
  );
}

export default App;
