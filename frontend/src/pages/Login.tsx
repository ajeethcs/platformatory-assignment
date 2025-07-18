import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Herosection";
import Footer from "../components/Footer";

export default function Login() {
  const { isAuthenticated } = useAuth0();
  console.log("isAuthenticated:", isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/profile", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <Navbar />
      <HeroSection />
      <Footer />
    </>
  );
}
