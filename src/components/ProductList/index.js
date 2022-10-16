import "../../index.css";
import { Link } from 'react-router-dom'

const products = [
    {
      id: 1,
      name: 'Organic Earl Grey Tea',
      href: '/carrinho',
      imageSrc: 'https://cdn.shopify.com/s/files/1/2256/0415/products/11018-LOOSE-ORGANIC_EARL_GREY_760x.jpg?v=1505847226%27',
      imageAlt: "Organic Earl Grey Tea.",
      qty: 'ounce loose',
      price: '$20.56',
    },
    {
      id: 2 ,
      name: 'Organic Yerba Mate',
      href: '/carrinho',
      imageSrc: 'https://i.etsystatic.com/17235473/r/il/b97bea/1825539315/il_1588xN.1825539315_9w4b.jpg',
      imageAlt: "Yerba Mate leaves",
      qty: 'ounce loose',
      price: '$22.85',
    },
    {
      id: 3 ,
      name: 'Roibos Tea',
      href: '/carrinho',
      imageSrc: 'https://cdn.shopify.com/s/files/1/2256/0415/products/69213-LOOSE-ORGANIC_AFRICAN_NECTAR.jpg?v=1509136959',
      imageAlt: "Rooibos loose leaves",
      qty: 'ounce loose',
      price: '$24.85',
    },
    {
      id: 4 ,
      name: 'Organic Green Tea',
      href: '/product-list',
      imageSrc: 'https://cdn.shopify.com/s/files/1/2256/0415/products/41040-LOOSE-ORGANIC_SENCHA_2000x2000.jpg?v=1593028494',
      imageAlt: "Organic Green Tea loose leaves",
      qty: 'ounce loose',
      price: '$26.85',
    },
  ]
  
  export function ProductList() {
    return (
      <div className="bg-gray-100">
        <div className="px-8 mx-auto  pt-8 sm:py-10 sm:px-6 lg:max-w-full lg:px-8">
          <h2 className="text-3xl font-bold pb-4 tracking-tight p  text-center text-black-600">YOU MIGHT ALSO ENJOY</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.qty}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }