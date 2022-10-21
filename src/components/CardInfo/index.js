import "../../index.css";
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../api/api";


export function CardInfo() {
  const { id } = useParams();
  const [info, setInfo] = useState({
    id:"",
    name: "",
    image: "",
    category: "",
    price: 0,

  });

  useEffect(() => {
    async function fetchInfo() {
      try {
        const response = await api.get(`/tea/${id}`);

        setInfo(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchInfo();
  }, [id]);


        return(
      <div className="bg-gray-100">
        <div className="px-8 mx-auto  pt-8 sm:py-10 sm:px-6 lg:max-w-full lg:px-8">
          <h2 className="text-3xl font-bold pb-4 tracking-tight p  text-center text-black-600">YOU MIGHT ALSO ENJOY</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              <div  className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={info.image}
                    alt="teas"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to="/Teas">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {info.category}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500"></p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{info.price}</p>
                </div>
              </div>
          </div>
        </div>
      </div>
);
  }