import "../../index.css"
import { Link } from "react-router-dom"; 

export function Testimonials() {
  return (
    <div>
      <div className="lg:px-20 md:px-6 px-4 py-12">
        <div className="flex flex-col items-center justify-center">
          <h1 className="lg:text-3xl tracking-tight font-sans font-bold text-center text-black-600">
            WHAT OUR COSTUMERS ARE SAYING
          </h1>
        </div>
        <div className="w-full lg:flex items-center gap-6 mt-10">
          <div className="lg:w-1/2">
            <div className="bg-white border rounded-md border-gray-200 relative sm:p-10 p-6">
              <div>
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg1.svg"
                  alt="commas"
                />
              </div>
              <p className="text-base leading-6 text-gray-600 mt-4">
                "I have been using Tranquil-Tea Store for about a year and have
                had all positive experiences. The website is easy to navigate.
                They always have my tea in stock and is delivered on time. I
                would and have recommended this to friends and family."
              </p>
              <div className="absolute bottom-0 -mb-4 ml-10">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg2.svg"
                  alt="sharp"
                />
              </div>
            </div>
            <div className="flex items-center mt-7">
              <div className="w-12 h-12 border border-indigo-700 rounded-full flex items-center justify-center">
                <img
                  src="https://i.ibb.co/R6WQhYj/Mask-Group.png"
                  className="w-10 h-10 rounded-full"
                  alt="profile"
                />
              </div>
              <div className="flex flex-col items-start ml-4">
                <p className="text-base font-semibold leading-4 text-gray-800">
                  Alisha Cooper
                </p>
                <p className="text-base leading-4 mt-2 text-center text-gray-600">
                  from Toronto
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:mt-0 mt-16">
            <div className="bg-white border rounded-md border-gray-200 relative sm:p-10 p-6">
              <div>
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg1.svg"
                  alt="commas"
                />
              </div>
              <p className="text-base leading-6 text-gray-600 mt-4">
             "I love the Tranquiti-Tea store, the varieties of tea available, the quick delivery of orders, and the packaging. Thank you for such fine products. The teas are wonderful, bright, brisk, flavorful, everything you would want out of <Link to="/" target="_blank" rel="noopener noreferrer"></Link> cup of tea." </p>
              <div className="absolute bottom-0 -mb-4 ml-10">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg2.svg"
                  alt="sharp"
                />
              </div>
            </div>
            <div className="flex items-center mt-7">
              <div className="w-12 h-12 border border-indigo-700 rounded-full flex items-center justify-center">
                <img
                  src="https://i.ibb.co/C6bwf12/Mask-Group.png"
                  className="w-10 h-10 rounded-full"
                  alt="profile"
                />
              </div>
              <div className="flex flex-col items-start ml-4">
                <p className="text-base font-semibold leading-4 text-gray-800">
                  Henry Jack
                </p>
                <p className="text-base leading-4 mt-2 text-center text-gray-600">
                  from New
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
