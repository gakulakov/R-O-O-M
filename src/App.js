import React from "react";
import './App.css';
import {Header} from "./components/Header/Header";
import {AboutUs} from "./components/AboutUs/AboutUs";
import {Products} from "./components/Products/Products";
import {Brands} from "./components/Brands/Brands";
import {Carousel} from "./components/Carousel/Carousel";
import {Principles} from "./components/ Principles/Principles";
import {Reviews} from "./components/Reviews/Reviews";
import {WeDo} from "./components/WeDo/WeDo";
import {ImageBlock} from "./components/ImageBlock/ImageBlock";
import {Refund} from "./components/Refund/Refund";
import {Footer} from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <Products />
      <Brands />
      <Carousel />
      <Principles />
      <Reviews />
      <WeDo />
      <ImageBlock />
      <Refund />
      <Footer />
    </div>
  );
}

export default App;
