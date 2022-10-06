import { api } from "../../api/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../index.css";

export function TeaDetails() {
  const { id } = useParams();
  const [teaDetail, setTeaDetail] = useState({
    name: "",
    image: "",
    description: "",
    category: "",
    origin: "",
    brew: "",
    temperature: "",
    caffeine: "",
    flavour: "",
    ingredients: "",
    price: ""
  });

  useEffect(() => {
    async function fetchTeaDetail() {
      try {
<<<<<<< HEAD:src/pages/TeaDetails/index.js
        const response = await api.get(`/tea/teaDetail/${id}`);
        
=======
        const response = await api.get(`tea/${id}`);
>>>>>>> d6c4b6009b814dcae0ec538e80f37d7708439ced:src/pages/TeaDetail/index.js
        setTeaDetail(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTeaDetail();
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();
    window.location.reload(true);
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="..."
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={teaDetail.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              Name:{teaDetail.name}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-green-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-green-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-green-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-green-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-green-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
            </div>
            <p>Name</p>
            <p className="leading-relaxed">{teaDetail.description}</p>
            <p>Category: {teaDetail.category}</p>
            <p>Origin: {teaDetail.description}</p>
            <p>Brew: {teaDetail.origin}</p>
            <p>Temperature: {teaDetail.brew}</p>
            <p>Caffeine: {teaDetail.temperature}</p>
            <p>Flavour: {teaDetail.caffeine}</p>
            <p>Ingredients: {teaDetail.flavour}</p>
            <p>Price: {teaDetail.ingredients}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Caffeine Free</span>
                <button className="border-2 border-green-200  bg-green-300 rounded-full w-6 h-6 focus:outline-none"></button>
              </div>

              <div className="flex ml-6 items-center">
                <span className="mr-3">Quantity</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-base pl-3 pr-10">
                    <option>50 g</option>
                    <option>100 g</option>
                    <option>250 g </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex mt-6 items-center pb-5 ">
              <div className="flex">
                <p className="font-bold text-xl">{teaDetail.price}</p>
                <button
                  className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
                  onClick={handleSubmit}
                >
                  Add to cart
                </button>
              </div>
            </div>

            <div className="flex">
              <button className="flex ml-auto text-white bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">
                Button
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-purple-500 ml-4">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
