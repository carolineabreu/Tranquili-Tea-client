import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Carousel } from "../../components/Carousel";
import { HomeCards } from "../../components/HomeCards";
<<<<<<< HEAD

export function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Footer />
      <HomeCards />
    </>
=======
import { Testimonials } from "../../components/Testimonials"
import  {ProductList} from "../../components/ProductList"
import {NavbarForum} from "../../components/NavbarForum"


export function Home() {
  return (
<>
<Navbar />
<Carousel />
<HomeCards/>
<ProductList/>
<Testimonials />
<Footer />
<NavbarForum/>

</>

>>>>>>> bd77adbbaa32e5741d6aaf6e623aaa9b15da540d
  );
}
