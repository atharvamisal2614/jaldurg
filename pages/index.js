import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import IntroSection from "@/components/IntroSection";
import AccommodationSlider from "@/components/Accomodation";
import Events from "@/components/Events";
import ExiteSense from "@/components/ExciteSense";
import ContactUs from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
// import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
<Navbar />
<IntroSection />
<AccommodationSlider />
<Events/>
<ExiteSense/>
<ContactUs />
<Gallery />
<Footer/>
{/* <Footer /> */}


</>
  );
}
