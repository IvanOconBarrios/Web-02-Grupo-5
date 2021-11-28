import React from "react";
import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";
import Carousel from "../../components/carousel/carousel";
import Cards from "../../components/cards/cards";

function Home(params) {
  return (
    <>
      <Nav />
      <Carousel />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
