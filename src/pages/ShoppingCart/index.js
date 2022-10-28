// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { api } from "../../api/api";
// import { useContext } from "react";
// import { ShoppingContext } from "../ShoppingCart/shoppingCart";

// export function Teas(props) {
//   const [tea, setTea] = useState([]);
//   const cart = useContext(ShoppingContext);

//   useEffect(() => {
//     async function fetchTea() {
//       try {
//         const response = await api.get("/tea/all");

//         setTea([...response.data]);
//       } catch (err) {
//         console.log(err);
//       }
//     }
//     fetchTea();
//   }, []);

//   function handleCarrinho() {
//     cart.setTea([...cart.tea, { ...props }]);
//   }
//   return (
//     <>
//       <div className="bg-white">
//         <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
//           <h2 className=" font-mono content-center items-center text-5xl flex justify-center mb-16 mt-3 font-bold tracking-tight text-gray-900">
//             TEA SELECTION
//           </h2>
//           <Link to="/shopping-cart">
//             <button
//               type="button"
//               className=" top-5 left-0 h-30 w-15 text-white bg-stone-700 hover:bg-stone-900 flex justify-end focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             >
//               <svg
//                 aria-hidden="true"
//                 className="mr-2 -ml-1 w-5 h-5"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
//               </svg>
//               Buy now
//             </button>
//           </Link>
//           <div className="mt-6 bg-white grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//             {tea.map((currentTea) => {
//               return (
//                 <div key={currentTea.id} className="">
//                   <div className="text-3xl mt-5 mb-6 font-mono font-400 flex justify-center">
//                     {" "}
//                     <span aria-hidden="true" className=" inset-0" />
//                     {currentTea.name}{" "}
//                   </div>{" "}
//                   <div className="min-h-60 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-60 lg:aspect-none lg:h-80">
//                     <img
//                       src={currentTea.image}
//                       alt={currentTea.name}
//                       className="h-full w-full object-cover object-center lg:h-full lg:w-full"
//                     />
//                   </div>
//                   <p className="text-xl font-medium font-mono font-style: italic text-gray-900 mt-4 mb-3">
//                     C$ {currentTea.price} per 50 grams
//                   </p>
//                   <></>
//                   <button
//                     onClick={handleCarrinho}
//                     className="rounded-lg px-4 py-2 bg-green-300 hover:bg-green-400 duration-300 mr-2.5"
//                   >
//                     {" "}
//                     Add to Cart{" "}
//                   </button>
//                   <Link to={`/teaDetail/${currentTea._id}`}>
//                     <button
//                       type="button"
//                       className="rounded-lg px-4 py-2 bg-purple-300 hover:bg-purple-400 duration-300"
//                     >
//                       {" "}
//                       View{" "}
//                     </button>
//                   </Link>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>{" "}
//       *
//     </>
//   );
// }