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
  return (
    <>
      <Header />
      <Banner/>      
      <LogoListing/>
      <Table/>      
      {/* <Verified/> */}
      <About/>      
      <HowToBuy/>   
      <ContactAddress/>   
      <Marque/>
      <Roadmap/>
      <Footer/>
    </>
  );
}

export default App;
