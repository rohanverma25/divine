import Image from "next/image";
import Header from '../app/components/Header';
import Slider from '../app/components/Slider';
import Footer from '../app/components/Footer';
import Expert from '../app/components/Expert';
import Info from '../app/components/Info';
import Instagram from '../app/components/Instagram';
import Outside from '../app/components/Outside';
import Blogs from '../app/components/Blogs';
import Videos from '../app/components/Videos';
import About from '../app/components/About';
import Procedure from '../app/components/Procedure';
import News from '../app/components/News';
import Reviews from '../app/components/Reviews';
export default function Home() {
  return (
    <>
    <Header />
    <Slider />
    <Procedure />
    <About />
    <Outside />
    <Reviews />
    <News />
    <Blogs />
    <Instagram />
    <Info />
    <Expert />
    <Footer />
    </>
  );
}
