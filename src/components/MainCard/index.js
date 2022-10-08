import "pure-react-carousel/dist/react-carousel.es.css";

export function MainCard() {
  return (
    <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-14 lg:px-8 lg:py-20 ">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl ">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-red-900 sm:text-4xl sm:leading-none">
              Feel good
              <br className="hidden md:block" />
              flavours to suit your{" "}
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative inline-block px-2 text-white bg-green-600 rounded dark:bg-green-400">
                  mood
                </span>
              </span>
            </h2>
          </div>
          <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
            <div className="bg-white border-l-2 shadow-sm border-deep-purple-accent-400">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5 text-purple-900">
                  Tea for every mood
                </h6>
                <p className="text-sm text-gray-900">
                  There’s tea for every mood! Isn’t that the best thing ever? We
                  know it is. So, if you have been struggling with sleep or
                  you’re feeling stressed at work, don’t worry. We have specific
                  kinds of tea that can help you. For some situations, green tea
                  may be ideal, while for others, chamomile tea works better.
                  Let us help you find the right blend for your current state of
                  mind.
                </p>
              </div>
            </div>
            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5 text-purple-900">
                  Qualiti-Tea in every sip
                </h6>
                <p className="text-sm text-gray-900">
                  We want only the best for our fellow tea-sippers, that's why
                  we sell our products in reusable, recyclable & compostable
                  packaging, significantly reducing industrial waste. Our
                  Philosophy is simple! We source ingredients from ethical,
                  organic, sustainable and like-minded suppliers who truly care
                  about how they treat people and the environment.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex pt-40 flex-col">
          <div className="max-w-xl h-50">
            <img
              className="object-cover w-full  rounded shadow-lg sm:h-96"
              src="https://images.unsplash.com/photo-1586600485773-c90ebcd53540?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHRlYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="tea leaves and a white cup"
            />
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
