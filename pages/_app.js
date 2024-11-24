import "@/styles/globals.css";
import Image from "next/image";

export default function App({ Component, pageProps }) {
  return (
    <>

<div className="fixed hover:cursor-pointer bottom-20 right-6 z-50">
        <a href="tel:+911122334455" target="_blank" rel="noopener noreferrer">
          <Image
            src={"/call-icon.png"}
            width={45}
            height={45}
            alt={"WhatsApp"}
            priority
          />
        </a>
      </div>
      {/* WhatsApp Button */}
      <div className="fixed hover:cursor-pointer bottom-5 right-5 z-50">
        <a href="https://wa.me/911122334455" target="_blank" rel="noopener noreferrer">
          <Image
            src={"/whatsapp.png"}
            width={50}
            height={50}
            alt={"WhatsApp"}
            priority
          />
        </a>
      </div>

      {/* Render the current page */}
      <Component {...pageProps} />
    </>
  );
}
