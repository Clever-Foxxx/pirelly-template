import AIchatBot from "./components/AIchatBot";
import Header from "./components/Header";
import Nav from "./components/Nav";
import PirellyProducts from "./components/PirellyProducts";
import Virtual from "./components/Virtual";
import DigitalRetail from "./components/DigitalRetail";
import CustomerReview from "./components/CustomerReview";
import Comments from "./components/Comments";
import VideoSection from "./components/VideoSection";
import Questions from "./components/Questions";
import { BookDemo } from "./components/BookDemo";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Nav />
      <Header />
      <PirellyProducts />
      <Virtual />
      <AIchatBot />
      <DigitalRetail />
      <CustomerReview />
      <Comments />
      <VideoSection />
      <Questions />
      <BookDemo />
      <Footer />
    </main>
  );
}

export default App;
