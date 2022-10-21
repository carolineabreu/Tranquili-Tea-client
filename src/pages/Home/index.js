import { HomeCard1} from "../../components/HomeCard1";
import { HomeCard2 } from "../../components/HomeCard2";
import { CardInfo } from "../../components/CardInfo";
import { Testimonials } from "../../components/Testimonials";

export function Home() {
  return (
    <>
      <HomeCard1/>
      <HomeCard2 />
      <CardInfo />
      <Testimonials />
    </>
  );
}
