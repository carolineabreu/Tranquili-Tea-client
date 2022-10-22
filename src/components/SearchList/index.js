import { Link } from "react-router-dom";
import { api } from "../../api/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function SearchList(props) {
  const { id } = useParams();
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
    price: 0,
  });

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

  return (
    <div className="mt-4 grid grid-cols-1 gap-px border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-3">
      {teaDetail.map((currentTea) => {
        return (
          <div className="relative block bg-white">
            <button
              type="button"
              className="absolute right-4 top-4 rounded-full bg-green-200 p-2 text-blue-600"
            >
              {/* criar wishlist?? */}
              <span className="sr-only">Wishlist</span>

              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
            <img
              alt={currentTea.id}
              src={currentTea.image}
              className="h-56 w-full object-contain lg:h-72"
            />
            <div className="p-6">
              <span className="inline-block bg-slate-200 px-3 py-1 text-xs font-medium">
                {/* arrumar  */}
                Caffeine Free
              </span>
              {/* está certo??? */}
              <div key={currentTea._id}></div>
              <h3 className="mt-4 text-xlg font-medium">{currentTea.name}</h3>
              <p className="mt-2 text-md font-bold text-gray-600">
                {currentTea.price}
              </p>
              <button
                // onClick={() => handleCart(currentTea)}
                className="rounded-lg px-2 py-2 bg-blue-200 hover:bg-blue-400 duration-300 mr-2.5"
              >
                Add to Cart
              </button>
              <Link
                to={`/teaDetail/${currentTea._id}`}
                type="button"
                className="rounded-lg px-4 py-2 bg-green-200 hover:bg-green-400 duration-300 "
              >
                <button>View</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// export function SearchList() {
//   const { id } = useParams();
//   console.log(id);
//   const [teaInfo, setTeaInfo] = useState({
//     name: "",
//     image: "",
//     description: "",
//     category: "",
//     origin: "",
//     brew: "",
//     temperature: "",
//     flavour: "",
//     ingredients: "",
//     price: 0
//   });

//   // const [price, setPrice] = useState(0);
//   // const [quantity, setQuantity] = useState(50);
//   // const [subtotal, setSubtotal] = useState(0);

//   useEffect(() => {
//     async function fetchTeaInfo() {
//       try {
//         const response = await api.get(`/tea/${id}`);
//         setTeaInfo(response.data);
//         console.log(response);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     fetchTeaInfo();
//   }, [id]);

// return (
//     <div className="mt-4 grid grid-cols-1 gap-px border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-3">
//                 {teaInfo.map((currentTea) => {

//                   return (
//                     <div className="relative block bg-white">
//                       <button
//                         type="button"
//                         className="absolute right-4 top-4 rounded-full bg-green-200 p-2 text-blue-600"
//                       >
//                         {/* criar wishlist?? */}
//                         <span className="sr-only">Wishlist</span>

//                         <svg
//                           className="h-4 w-4"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                           />
//                         </svg>
//                       </button>
//                       <img
//                         alt={currentTea.id}
//                         src={currentTea.image}
//                         className="h-56 w-full object-contain lg:h-72"
//                       />
//                       <div className="p-6">
//                         <span className="inline-block bg-slate-200 px-3 py-1 text-xs font-medium">
//                           {/* arrumar  */}
//                           Caffeine Free
//                         </span>
//                         {/* está certo??? */}
//                         <div key={currentTea._id}></div>
//                         <h3 className="mt-4 text-xlg font-medium">
//                           {currentTea.name}
//                         </h3>
//                         <p className="mt-2 text-md font-bold text-gray-600">
//                           {currentTea.price}
//                         </p>
//                         <button
//                           // onClick={() => handleCart(currentTea)}
//                           className="rounded-lg px-2 py-2 bg-blue-200 hover:bg-blue-400 duration-300 mr-2.5"
//                         >
//                           Add to Cart
//                         </button>
//                         <Link
//                           to={`/teaDetail/${currentTea._id}`}
//                           type="button"
//                           className="rounded-lg px-4 py-2 bg-green-200 hover:bg-green-400 duration-300 "
//                         >
//                           <button>View</button>
//                         </Link>
//                       </div>
//                     </div>

//                   );
//                 })}
//               </div>
// );
// }
