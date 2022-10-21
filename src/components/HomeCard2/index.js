import { Link } from "react-router-dom";
import "../../index.css";
import image6 from "../images/blacktea.jpeg";
import image7 from "../images/greentea.webp";
import image8 from "../images/Chamomile.webp";
import image9 from "../images/oolong.jpeg";

export function HomeCard2() {
  
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-4xl py-10 px-2 sm:py-10 sm:px-6 md:py-10 sm-px-6  lg:max-w-full lg:px-4">
        <h2 className="text-3xl font-bold pb-4 tracking-tight font-sans  text-center text-black-600">
          BEST SELLERS
        </h2>
        <div className="bg-gray-100 mx-auto  py-18 px-2 gap-4 flex-wrap flex justify-center items-center">
          <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <img
              className="h-40 object-cover pl-10 rounded-xl"
              src={image6}
              alt="Black Tea"
            />
            <div className="p-2">
              <h2 className="font-bold text-lg mb-2 ">Black Tea</h2>
              <p className="text-sm text-gray-600">
                Black tea contains caffeine and an amino acid called L-theanine,
                which can improve alertness and focus. L-theanine increases
                alpha activity in the brain, resulting in relaxation and better
                focus.
              </p>
            </div>

            <div className="m-2">
              <Link
                to="/Teas"
                className="text-black bg-blue-300 px-3 py-1 rounded-md hover:bg-blue-700"
              >
                Shop Now
              </Link>
            </div>
          </div>
          <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <img
              className="h-40 object-cover pl-10 rounded-xl"
              src={image7}
              alt=" green tea"
            />
            <div className="p-2">
              <h2 className="font-bold text-lg mb-2 ">Green Tea</h2>
              <p className="text-sm text-gray-600">
                Green tea is a staple in many cultures and may offer some
                important health benefits, like protecting our brain, heart, and
                bone health. Green tea comes in different forms, but it's best
                to drink it plain"
              </p>
            </div>
            <div className="m-2">
              <Link
                to="/Teas"
                className="text-black bg-blue-300 px-3 py-1 rounded-md hover:bg-blue-700"
              >
                Shop Now
              </Link>
            </div>
          </div>
          <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <img
              className="h-40 object-cover pl-10 rounded-xl"
              src={image8}
              alt="chamomile tea leaves"
            />
            <div className="p-2">
              <h2 className="font-bold text-lg mb-2 ">Chamomile Tea</h2>
              <p className="text-sm text-gray-600">
                Chamomile is widely recognized as Link mild tranquilizer and
                sleep-inducer. It is thought that chamomile may increase brain
                neurotransmitter activity and thereby have positive effects on
                mood and anxiety.{" "}
              </p>
            </div>
            <div className="m-2">
              <Link
                to="/Teas"
                className="text-black bg-blue-300 px-3 py-1 rounded-md hover:bg-blue-700"
              >
                Shop Now
              </Link>
            </div>
          </div>
          <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <img
              className="h-40 object-cover pl-10 rounded-xl"
              src={image9}
              alt="Oloong Tea"
            />
            <div className="p-2">
              <h2 className="font-bold text-lg mb-2 ">Oloong Tea</h2>
              <p className="text-sm text-gray-600">
                The blend of L-theanine found in oolong tea has been found to
                contribute to deeper, dreamier, longer-lasting sleep. While
                oolong tea isn’t caffeine-free, this beautiful brew can
                naturally enhance sleep."
              </p>
            </div>
            <div className="m-2">
              <Link
                to="/Teas"
                className="text-black bg-blue-300 px-3 py-1 rounded-md hover:bg-blue-700"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
