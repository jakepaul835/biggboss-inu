import React, { useEffect } from "react";
import "./App.css";
import 'aos/dist/aos.css';
import Header from "./component/header";
import Footer from "./component/footer";
import Banner from "./component/banner";
import LogoListing from "./component/logo-listing";
import Table from "./component/table";
// import Verified from "./component/verified";
import About from "./component/about";
import HowToBuy from "./component/how-to-buy";
import Marque from "./component/Marque";
import Roadmap from "./component/roadmap";
import ContactAddress from "./component/contract-address";
// import Countdown from "./component/Countdown";

function App() {
  useEffect(() => {
    // Add Google Analytics Script
    const script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-DE76RJECFR";
    script.async = true;
    document.head.appendChild(script);

    // Initialize Google Analytics once the script is loaded
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-DE76RJECFR');
    };

    // Cleanup: remove the script if the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <LogoListing />
      <Table />
      {/* <Verified/> */}
      <About />
      <HowToBuy />
      <ContactAddress />
      <Marque />
      <Roadmap />
      <Footer />
    </>
  );
}

export default App;
