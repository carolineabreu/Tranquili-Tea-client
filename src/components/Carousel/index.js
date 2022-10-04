import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";


export  function Carousel() {
            return (
              
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
                <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                  <div className="flex flex-col justify-center">
                    <div className="max-w-xl mb-6">
                      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-red-900 sm:text-4xl sm:leading-none">
                        Feel good
                        <br className="hidden md:block" />
                        flavours to suit your{' '}
                        <span className="relative px-1">
                          <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                          <span className="relative inline-block text-green-700">
                            mood
                          </span>
                        </span>
                      </h2>
                      <p className="text-sm text-gray-700 md:text-base">
                      {/* We want only the best for our fellow tea-sippers, that's why we source the highest quality, natural plant ingredients from ethical farms, and manufacture our brews right here in Aus. Our tea bags are biodegradable and home compostable and once you've enjoyed brewing up your full tea box, don't forget to recycle it!. */}
                      </p>
                    </div>
                    <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                      <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                        <div className="h-full p-5 border border-l-0 rounded-r">
                          <h6 className="mb-2 font-semibold leading-5 text-purple-900">
                            Tea for every mood
                          </h6>
                          <p className="text-sm text-gray-900">
                          There’s tea for every mood! Isn’t that the best thing ever? We know it is. So, if you have been struggling with sleep or you’re feeling stressed at work, don’t worry. We have specific kinds of tea that can help you. For some situations, green tea may be ideal, while for others, chamomile tea works better. Let us help you find the right blend for your current state of mind. 
                          </p>
                        </div>
                      </div>
                      <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                        <div className="h-full p-5 border border-l-0 rounded-r">
                          <h6 className="mb-2 font-semibold leading-5 text-green-700">
                            Qualiti-Tea in every sip
                          </h6>
                          <p className="text-sm text-gray-900">
                          We want only the best for our fellow tea-sippers, that's why we source the highest quality and, natural plant ingredients from ethical farms.

                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                      src="https://images.unsplash.com/photo-1562547256-2c5ee93b60b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=00&q=60"
                      alt=""
                    />
                  </div>
                </div>
              </div>

    );
}
