// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Pages/Homepage";
import AboutUs from "./Components/Pages/About-us";
import Services from "./Components/Pages/Services";
import Login from "./Components/Pages/onboarding/Login";
import Register from "./Components/Pages/onboarding/Register";
import ForgotPassword from "./Components/Pages/onboarding/ForgotPassword";
import ForgotPasswordEmail from "./Components/Pages/onboarding/ForgotPasswordEmail";
import Otp from "./Components/Pages/onboarding/Otp";
import SuccessScreen from "./Components/Pages/onboarding/SuccessScreen";
import LandingPage from "./Components/Pages/onboarding/LandingPage";
import SProduct from "./Components/Pages/SProduct";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/home" element={<Homepage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/forget-password" element={<ForgotPassword />} />
          <Route
            exact
            path="/forget-password-email"
            element={<ForgotPasswordEmail />}
          />
          <Route exact path="/otp" element={<Otp />} />
          <Route exact path="/sProduct" element={<SProduct />} />
          <Route exact path="/success-screen" element={<SuccessScreen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
