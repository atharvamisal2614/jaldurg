import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import IntroSection from "@/components/IntroSection";
import AccommodationSlider from "@/components/Accomodation";
import Events from "@/components/Events";
import Games from "@/components/Games";
import ContactUs from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Rooms from "@/components/Rooms";
import Testimonials from "@/components/Testimonials";
import NearbyPlaces from "@/components/NearByPlaces";
import Footer from "@/components/Footer";

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
<Rooms />
<IntroSection />
<AccommodationSlider />
<Events/>
<Games />
<Testimonials />
<NearbyPlaces />
<ContactUs />
<Gallery />
<Footer/>
{/* <Footer /> */}


</>
  );
}
