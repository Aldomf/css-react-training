import "./App.css";

import CarouselImages from "./components/CarouselImages";
import ScaleUpOnScroll from "./components/ScaleUpOnScroll";
import SlideUpOnScroll from "./components/SlideUpOnScroll";
import SlideInFromLeft from "./components/SlideInFromLeft";

function App() {
  return (
    <>
      <CarouselImages />
      <SlideUpOnScroll />
      <ScaleUpOnScroll />
      <SlideInFromLeft />
    </>
  );
}

export default App;

