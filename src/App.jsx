import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Service from "./Pages/Service";
import FAQs from "./Pages/FAQs";
import ContactUs from "./Pages/ContactUs";
import { useEffect } from "react";
import Lenis from "lenis";
import Eb1A from "./Pages/Eb1A";
import Eb2Nw from "./Pages/Eb2Nw";
import O1Visa from "./Pages/O1Visa";
import Blogs from "./Pages/Blogs";
import arrowUp from "./assets/Images/arrow-up.svg";
import { Helmet } from "react-helmet-async";


function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  return (
    <div className="relative">
      <Helmet>
        <title>Visarocraft | Extraordinary Immigration Success</title>
        <meta
          name="description"
          content="Visarocraft helps professionals, academics, and entrepreneurs succeed in EB1A, EB2 NIW, and O1 visa petitions with expert guidance and precision."
        />
        <meta
          name="keywords"
          content="EB1A, EB2 NIW, O1 visa, green card, extraordinary ability, immigration, Visarocraft, self petition, US visa"
        />
        <meta property="og:site_name" content="Visarocraft" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Visarocraft | Extraordinary Immigration Success" />
        <meta
          property="og:description"
          content="Visarocraft empowers professionals and entrepreneurs to achieve extraordinary immigration success through EB1A, EB2 NIW, and O1 visa petitions."
        />
        <meta property="og:image" content="/default-og-image.png" />
        <meta property="og:url" content="https://visarocraft.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Visarocraft | Extraordinary Immigration Success" />
        <meta
          name="twitter:description"
          content="Visarocraft helps extraordinary professionals and entrepreneurs achieve green card success with tailored EB1A, EB2 NIW, and O1 visa strategies."
        />
        <meta name="twitter:image" content="/default-og-image.png" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Language" content="en" />
        <link rel="canonical" href={`https://visarocraft.com${location.pathname}`} />
      </Helmet>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blogs/:id" element={<Blogs />} />
        <Route path="/service/eb-1a" element={<Eb1A />} />
        <Route path="/service/eb-2nw" element={<Eb2Nw />} />
        <Route path="/service/o1-visa" element={<O1Visa />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <div
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-8 right-8 cursor-pointer shadow-2xl bg-[#0d1035]/30 backdrop-blur-md flex items-center justify-center w-12 h-12 rounded-full text-white"
      >
        <img
          src={arrowUp}
          alt="Arrow to scroll to the top"
          style={{
            filter:
              "brightness(0) saturate(100%) invert(45%) sepia(93%) saturate(2062%) hue-rotate(347deg) brightness(96%) contrast(95%)",
          }}
        />
      </div>
    </div>
  );
}

export default App;
