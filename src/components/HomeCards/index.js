import "../../index.css";

export function HomeCards() {
  return (
    <div className="bg-gray-100">
        <div className="mx-auto max-w-2xl py-20 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold pb-4 tracking-tight font-sans  text-center text-yellow-600">Best Sellers</h2>
          <div className="bg-gray-100 mx-auto  py-18 px-4 gap-4 flex-wrap flex justify-center items-center">
          
{/* Card */}
<div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
  {/* Image */}
  <img
    className="h-40 object-cover rounded-xl"
    h-40
    object-cover
    rounded-xl
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZLVzBWRitCZP8x1f-VbmY6VibRa08fQKwIfyEhI5w-lw_yyKUsyUMMDzCrP-9t0s2Pnk&usqp=CAU"
    alt=""
  />
  <div className="p-2">
    {/* Heading */}
    <h2 className="font-bold text-lg mb-2 ">Black Tea</h2>
    {/* Description */}
    <p className="text-sm text-gray-600">
      Black tea contains caffeine and an amino acid called L-theanine,
      which can improve alertness and focus. L-theanine increases alpha
      activity in the brain, resulting in relaxation and better focus.
    </p>
  </div>
  {/* CTA */}
  <div className="m-2">
    <a
      role="button"
      href="#"
      className="text-black bg-purple-300 px-3 py-1 rounded-md hover:bg-purple-700"
    >
      Shop Now
    </a>
  </div>
</div>
{/* Card */}
<div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
  {/* Image */}
  <img
    className="h-40 object-cover rounded-xl"
    h-40
    object-cover
    rounded-xl
    src="https://images.unsplash.com/photo-1627894006066-b45786537103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdyZWVuJTIwdGVhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    alt=""
  />
  <div className="p-2">
    {/* Heading */}
    <h2 className="font-bold text-lg mb-2 ">Green Tea</h2>
    {/* Description */}
    <p className="text-sm text-gray-600">
    Green tea is a staple in many cultures and may offer some important health benefits, like protecting our brain, heart, and bone health. Green tea comes in different forms, but it's best to drink it plain"
    </p>
  </div>
  {/* CTA */}
  <div className="m-2">
    <a
      role="button"
      href="#"
      className="text-black bg-sky-300 px-3 py-1 rounded-md hover:bg-purple-700"
    >
      Shop Now
    </a>
  </div>
</div>
{/* Card */}
<div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
  {/* Image */}
  <img
    className="h-40 object-cover rounded-xl"
    h-40
    object-cover
    rounded-xl
    src="https://cdn.shopify.com/s/files/1/0559/8078/5828/products/Camomile_grande.jpg?v=1620954490"
    alt="chamomile tea leaves"
  />
  <div className="p-2">
    {/* Heading */}
    <h2 className="font-bold text-lg mb-2 ">Chamomile Tea</h2>
    {/* Description */}
    <p className="text-sm text-gray-600">
    Chamomile is widely recognized as a mild tranquilizer and sleep-inducer. It is thought that chamomile may increase brain neurotransmitter activity and thereby have positive effects on mood and anxiety. </p>
  </div>
  {/* CTA */}
  <div className="m-2">
    <a
      role="button"
      href="#"
      className="text-black bg-stone-200 px-3 py-1 rounded-md hover:bg-purple-700"
    >
      Shop Now
    </a>
  </div>
</div>
{/* Card */}
<div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
  {/* Image */}
  <img
    className="h-40 object-cover rounded-xl"
    h-40
    object-cover
    rounded-xl
    src="https://cdn.intelligencebank.com/au/share/NOrD/1VN0z/z0ZP6/preset=pB6BA/T105AE003_oolong_loose_leaf_hi-res"
    alt=""
  />
  <div className="p-2">
    {/* Heading */}
    <h2 className="font-bold text-lg mb-2 ">Oloong Tea</h2>
    {/* Description */}
    <p className="text-sm text-gray-600">
    The blend of L-theanine found in oolong tea has been found to contribute to deeper, dreamier, longer-lasting sleep. While oolong tea isn’t caffeine-free, this beautiful brew can naturally enhance sleep."
    </p>
  </div>
  {/* CTA */}
  <div className="m-2">
    <a
      role="button"
      href="#"
      className="text-black bg-yellow-200 px-3 py-1 rounded-md hover:bg-purple-700"
    >
     Shop Now
    </a>
  </div>
  </div>
  </div>
  </div>
  </div>
  );
}
