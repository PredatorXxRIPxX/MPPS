
import Navbar from "./_components/navbar";
import MainPage from "./_view/mainpage";
import Partenaire from "./_view/partenaire";
import Services from "./_view/services";
import ContactUs from "./_view/contactus";
import Footer from "./_components/footer";



export default function Home() {

  return (
    <>
      <Navbar />
      <div id="mainpage">
        <MainPage />
      </div>
      <div id="partenaire">
        <Partenaire />
      </div>
      <div id="service">
        <Services />
      </div>
      <div id="contactus">
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}
