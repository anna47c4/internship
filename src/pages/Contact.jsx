import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
function Contact() {
  //so the page scrolls to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>BrandMobile - Contact</title>
        <meta name="description" content="BrandMobile contact" />
        <meta
          name="keywords"
          content="Webdesign, Platform, Concept, Development"
        />
      </Helmet>
      <section className="contactSection">
        <main>
          <div className="box">
            {/*    <img src={TestImg} alt="test" className="test-img"></img> */}
            <p className="p-top">Let's work together!</p>
            <p className="p-bottom">
              Let us amplify your campaigns and brand. Feel free to contact us
              on <span>+45 26 85 85 85</span> or just send in your queries in
              the form, and we will respond to you as soon as possible.
            </p>
          </div>
          <div className="form-wrapper">
            {" "}
            <ContactForm></ContactForm>
          </div>
        </main>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Contact;
