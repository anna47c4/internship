import FifthSection from "../components/FifthSection";
import FirstSection from "../components/firstSection";
import FourthSection from "../components/FourthSection";
import HeroSection from "../components/HeroSection";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>BrandMobile - Home</title>
        <meta name="description" content="BrandMobile ApS agency website" />
        <meta
          name="keywords"
          content="Webdesign, Platform, Concept, Development"
        />
      </Helmet>
      <main>
        <HeroSection></HeroSection>
        <FirstSection></FirstSection>
        <SecondSection></SecondSection>
        <ThirdSection></ThirdSection>
        <FourthSection></FourthSection>
        <FifthSection></FifthSection>
        <Footer></Footer>
      </main>
    </>
  );
}

export default Home;
