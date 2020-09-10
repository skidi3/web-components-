import React from "react";
import Header from "./components/Header";
import HeaderStyle from "./assets/header.css";
import SearchBarOptionsStyle from "./assets/searchoptions.css";
import SplitSlider from "./components/SplitSlider";
import SplitSliderStyle from "./assets/splitslider.css";
import FeatureCards from "./components/FeatureCards";
import FeatureCardsStyle from "./assets/featurecards.css";
import Testimonials from "./components/Testimonial";
import TestimonialsStyle from "./assets/testimonial.css";
import Footer from "./components/Footer";
import FooterStyle from "./assets/footer.css";

function App() {
  return (
    <div className="App">
      <Header style={{ HeaderStyle, SearchBarOptionsStyle }} />
      {/*<SplitSlider style={{ SplitSliderStyle }} />
      <FeatureCards style={{ FeatureCardsStyle }} />
  <Testimonials style={{ TestimonialsStyle }} />*/}
      <Footer style={{ FooterStyle }} />
    </div>
  );
}

export default App;
