import { api } from "../../api/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../index.css";
// import { TeaReview } from "../../components/TeaReview";
// import { TeaReview } from "./review";


export function TeaDetails() {
  const { id } = useParams();
  console.log(id);
  const [teaDetail, setTeaDetail] = useState({
    name: "",
    image: "",
    description: "",
    category: "",
    origin: "",
    brew: "",
    temperature: "",
    flavour: "",
    ingredients: "",
    price: 0
  });


  // const [price, setPrice] = useState(0);
  // const [quantity, setQuantity] = useState(50);
  // const [subtotal, setSubtotal] = useState(0);
 


  useEffect(() => {
    async function fetchTeaDetail() {
      try {
        const response = await api.get(`/tea/${id}`);
        setTeaDetail(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTeaDetail();
  }, [id]);



  // useEffect(() => {
  //   function changePrice() {
  //     // resolucao DAN
  //     // setSubtotal((quantity / 50) * teaDetail.price);
      
  //   }
  //   changePrice();
  // }, [quantity]);
  // function handleChangePrice(e) {
  //   setQuantity(e.target.value);
  // }
  // const carrinho = useContext(CarrinhoContext);

  // function handleCart(tea) {
  //   //console.log(tea);
  //   carrinho.setTea([...carrinho.tea, { ...tea }]);
  //   console.log(carrinho);
  // }
  return (
    <>
  <section className="text-gray-700 body-font overflow-hidden bg-white">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-5/5 xlg:w-3/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={teaDetail.image}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 className="text-gray-900 text-3xl title-font font-bold mb-1">{teaDetail.name}</h1>
            <div className="pl-0">
              {/* resolucao Dan */}
              {/* <p className="font-bold text-xl">{Number(parseInt(teaDetail.price)).toFixed(2)}</p> */}
              <p className="font-bold text-2xl tracking-wider">C${teaDetail.price}</p>
            </div>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-green-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-green-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-green-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-green-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-green-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed font-extrabold">{teaDetail.description}</p>
            <p ><strong>Category: </strong>{teaDetail.category}</p>
            <p><strong>Origin:</strong> {teaDetail.origin}</p>
            <p><strong>Brew:</strong> {teaDetail.brew}</p>
            <p><strong>Temperature:</strong> {teaDetail.temperature}°C</p>
            <p><strong>Flavour:</strong> {teaDetail.flavour}</p>
            <p><strong>Ingredients:</strong> {teaDetail.ingredients}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Caffeine Free</span>
                <button className="border-2 border-green-300  bg-green-300 rounded-full w-6 h-6 focus:outline-none"></button>
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Quantity</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-blue-400 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-base pl-3 pr-10">
                   {/* arrumar */}
                    <option>50 g</option>
                    <option>100 g</option>
                    <option>250 g </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex mt-6 items-center pb-5 ">
              <div className="flex">
                <button
                  className="px-8 py-2  bg: blue-200 transition ease-in duration-200  text-blue-600 uppercase rounded-full hover:bg-blue-500 hover:text-white border-2 border-blue-400 focus:outline-none"
                >
                  {/* n esta funcionando */}
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          </div>
      </div>
    </section>
    {/* <TeaReview /> */}
     </>
  );
}
