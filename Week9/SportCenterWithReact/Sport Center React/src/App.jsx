import "./App.css";
import Header from "./components/HeaderSection/Header";
import Home from "./components/HomeSection/Home";
import Classes from "./components/ClassesSection/Classes";
import Trainer from "./components/TrainerSection/Trainer";
import Review from "./components/ReviewSection/Review";
import Contact from "./components/ContactSection/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <body>
      <Header />
      <Home />
      <Classes />
      <Trainer />
      <Review />
      <Contact />
      <Footer />
    </body>
  );
}

export default App;
