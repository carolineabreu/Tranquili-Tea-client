import { MainCard} from "../../components/MainCard";
import { HomeCards } from "../../components/HomeCards";
import { Testimonials } from "../../components/Testimonials";
import { ProductList } from "../../components/ProductList";

export function Home() {
  return (
    <>
      <MainCard />
      <HomeCards />
      <ProductList />
      <Testimonials />
    </>
  );
}
