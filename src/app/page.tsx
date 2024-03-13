import Navigation from "@/Components/Navigation";
import Image from "next/image";
import mainImage from "../../public/images/transformer-768x796.jpg"
export default function Home() {
  return (
    <>
    
    <main >
      <div className="w-full h-3/5 relative">
    <div className="w-full h-screen bg-overlay transform transition duration-75 absolute z-2 animate-over-relay "></div>
    <div className="w-full h-screen z-1 object-fit">
      <Image src={mainImage} alt={"COVER"} className="h-full"/> 
    </div>
    <div className="lg:w-1/2 xs:w-full  flex  flex-col absolute top-40 lg:left-1/2 overflow-hidden xs:justify-center xs:left-0">
      <h1 className="text-primary w-1/4 font-bold text-6xl fadeInText transform transition duration-60 animate-heading-anim">Bhendogu</h1>
      <h3 className="text-primary text-4xl pt-2 transform transition duration-80 animate-heading-anim fadeInText transform transition duration-60 animate-heading-anim scroll-none">Technologies (Pty) Ltd</h3>
      <p className="leading-normal  pt-3  pl-1 max-w-md-s md:max-w-md-s xs:max-w-prose fadeInText transform transition duration-60 animate-paragraph-anim text-paragraph">We offer wide range of services that meet your expectations. We are always availible upon your request. Services include but not limited to, Switchgear Installation, Switchgear Commissioning, Relay Logics, Power Transformer testing and many more...</p>
      <button className="bg-btn-primary w-1/4 h-8 rounded flex justify-center items-center mt-2 fadeInText transform transition duration-60 animate-paragraph-anim">Contact Us</button>
    </div>
    </div>
    </main>
    
    </>
  );
}
