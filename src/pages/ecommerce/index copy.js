// import "../../index.css";
// import { useState, useEffect } from "react";
// //import { Cart } from "./cart.js";
// import { Link } from "react-router-dom";
// //import { searchBar } from "./searchBar.js";
// import axios from "axios";

// export function Teas() {
//   {
//     //const [search, setSearch] = useState("");
//     const [teas, setTeas] = useState([]);

//     useEffect(() => {
//       async function fetchTeas() {
//         try {
//           const response = await axios.get(
//             "https://ironrest.herokuapp.com/..."
//           );

//           setTeas([...response.data]);
//         } catch (err) {
//           console.log(err);
//         }
//       }
//       fetchTeas();
//     }, []);

//     function handleSubmit(e) {
//       e.preventDefault();
//       window.location.reload(true);
//     }

//     return (
//       <>

//     <div className="bg-white">
//       <div className="1">
//         <h2 className="2">
//           Shop
//         </h2>
//           {/* <searchBar teas={teas} search={search} setSearch={setSearch} /> */}
//           <div className="flex">
//             <div className="flex-item">
//               {Teas.map((currentTea) => {
//                 return (
//                   <div className="TeaEcommerce">
//                     <>
//                       <Link to={`/${currentTea._id}`}>
//                         <img
//                           src={currentTea.image}
//                           alt={currentTea.name}
//                           id="currentTea.image"
//                         />
//                         <h1>{currentTea.name}</h1>
//                       </Link>
//                     </>
//                     <button id="btn" onClick={handleSubmit}>
//                       Add to Cart
//                     </button>
//                   </div>
//                 );
//               })}
//             </div>
//             <div id="Cart">
//               {" "}
//               <Cart />
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// const products = [
//   {
//     id: 1,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
// ];

// export default function Example() {
//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
//         <h2 className="text-2xl font-bold tracking-tight text-gray-900">
//           Shop
//         </h2>

//         <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//           {teas.map((currentTea) => (
//             <div key={currentTea.id} className="group relative">
//               <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
//                 <img
//                   src={currentTea.image}
//                   alt={currentTea.name}
//                   className="h-full w-full object-cover object-center lg:h-full lg:w-full"
//                 />
//               </div>

//               <div className="mt-4 flex justify-between">
//                 <div>
//                   <h3 className="text-sm text-gray-700">
//                     <a href={currentTea.href}>
//                       <span aria-hidden="true" className="absolute inset-0" />
//                       {currentTea.name}
//                     </a>

//                 <p className="text-sm font-medium text-gray-900">
//                   {currentTea.price}
//                 </p><h3/>
//               </div></div>
//
//                   <p className="mt-1 text-sm text-gray-500">Add to Cart</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

{
  /* <div className="Ecommerce">
        <h1 id="Shop"> Shop </h1> */
}
{
  /* <searchBar teas={teas} search={search} setSearch={setSearch} /> */
}
{
  /* <div className="flex">
          <div className="flex-item"> */
}
