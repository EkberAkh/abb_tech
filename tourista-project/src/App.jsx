import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Faq from "./Pages/Faq";
import Destinations from "./Pages/Destinations";
import DestinationsItaly from "./Pages/DestinationsItaly";
import Contact from "./Pages/Contact";
import FirstHeader from "./components/Global-Components/FirstHeader";
import MainHeader from "./components/Global-Components/MainHeader";
import Footer from "./components/Global-Components/Footer";
import "./App.css";
import SignInPage from "./components/SignIn/SignInPage";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/sign-in" && location.pathname !== "/forgot-password" && location.pathname !== "/create-acc"  && (
        <>
          <FirstHeader />
          <MainHeader />
        </>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/destinations-italy" element={<DestinationsItaly />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/forgot-password" element={<SignInPage/>}/>
        <Route path="/create-acc" element={<SignInPage/>}/>

      </Routes>
      {location.pathname !== "/sign-in" && location.pathname !== "/forgot-password" && location.pathname !== "/create-acc" && <Footer />}
    </>
  );
}

export default App;
