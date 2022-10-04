import {Navbar} from "../../components/Navbar";
import {Footer} from "../../components/Footer";
import {Carousel} from "../../components/Carousel";
import { HomeCards } from "../../components/HomeCards";
import { Testimonials } from "../../components/Testimonials"


export function Home() {
  return (
<>
<Navbar />
<Carousel />
<Footer />
<HomeCards/>
<Testimonials />

</>

  );
}
