// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export  function Wishlist() {


    return (
      <div class="col-span-9 space-y-4">
      <div class="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
          <div class="w-28">
              <img src="https://www.justorganictea.com/wp-content/uploads/2021/02/chamomile-tea.jpg" alt="product 6" class="w-full"/>
          </div>
          <div class="w-1/3">
              <h2 class="text-gray-800 text-xl font-medium uppercase">Chamomile Tea</h2>
              <p class="text-gray-500 text-sm">Availability: <span class="text-green-600">In Stock</span></p>
          </div>
          <div class="text-primary text-lg font-semibold">C$ 9.98</div>
          <Link to="carrinho"
              class="px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">add
              to cart</Link>
          <div class="text-gray-600 cursor-pointer hover:text-primary">
              <i class="fa-solid fa-trash"></i>
          </div>
      </div>

      <div class="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
          <div class="w-28">
              <img src="../assets/images/products/product5.jpg" alt="product 6" class="w-full"/>
          </div>
          <div class="w-1/3">
              <h2 class="text-gray-800 text-xl font-medium uppercase">Kana Tea</h2>
              <p class="text-gray-500 text-sm">Availability: <span class="text-green-600">In Stock</span></p>
          </div>
          <div class="text-primary text-lg font-semibold">C$ 9.98</div>
          <Link to="shopping-cart"
              class="px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">add
              to cart</Link>

          <div class="text-gray-600 cursor-pointer hover:text-primary">
              <i class="fa-solid fa-trash"></i>
          </div>
      </div>

      <div class="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
          <div class="w-28">
              <img src="https://shopteagoetz.com/media/image/80/54/9a/6058-kraeutertee-hopfenglueck.jpg" alt="product 6" class="w-full"/>
          </div>
          <div class="w-1/3">
              <h2 class="text-gray-800 text-xl font-medium uppercase">Hop Tea</h2>
              <p class="text-gray-500 text-sm">Availability: <span class="text-red-600">Out of Stock</span></p>
          </div>
          <div class="text-primary text-lg font-semibold">C$ 9.98</div>
          <Link to="shopping-cart"
              class="cursor-not-allowed px-6 py-2 text-center text-sm text-white bg-red-400 border border-red-400 rounded transition uppercase font-roboto font-medium">add
              to cart</Link>
          <div class="text-gray-600 cursor-pointer hover:text-primary">
              <i class="fa-solid fa-trash"></i>
          </div>
      </div>
  </div>
    );
}


