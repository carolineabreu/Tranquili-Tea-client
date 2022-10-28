import { Link } from "react-router-dom";
import images from "../../components/images/Design sem nome-3.png";
import images1 from "../../components/images/Carolproject3.jpg";
import images2 from "../../components/images/Lari.jpg";


export function OurTeam() {
  return (
   
<div class="p-4">
    <p class="text-center text-3xl font-bold text-gray-800 lg:text-center">
        Professional team
    </p>
    <p class="text-center mb-32 text-xl font-normal text-gray-500">
        Meat the best team in wolrd
    </p>
    <div class="flex items-center space-y-24 sm:space-y-0 md:space-y-0 flex-col md:flex-row justify-center">
        <div className="p-4 relative">
          <div className="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
            <Link to="#" className="block relative">
              <img
                alt="profile"
                src={images1}
                className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800"
              />
            </Link>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow px-8 py-4 pt-24">
            <div className="text-center">
              <p className="text-2xl text-gray-800 dark:text-white">
                Caroline Abreu
              </p>
              <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                Web Developer
              </p>
              <p className="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                Hi, my name is Caroline, I'm from Brazil and love to know
                different places and cultures. I made a trip in 2019 to Europe
                and I had a chance to visit many places I had had always wanted
                to see, it was amazing.
              </p>
            </div>
            <div className="pt-8 flex border-t border-gray-200 w-40 mx-auto text-gray-500 items-center justify-center">
              <Link  to="https://github.com/carolineabreu/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                </svg>
              </Link>
              <Link to="https://www.linkedin.com/in/caroline-santos-abreu/ "
              path='about-us'>
                <svg
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="p-4 relative">
          <div className="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
            <Link to="#" className="block relative">
              <img
                alt="profile"
                src={images}
                className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800"
              />
            </Link>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow px-8 py-4 pt-24">
            <div className="text-center">
              <p className="text-2xl text-gray-800 dark:text-white">Zimarlen Silva</p>
              <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                Web Developer
              </p>
              <p className="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
              Hi! My name is Zimarlen, a web developer who loves traveling,
                  trying different food and sipping tea throughtout the day. I
                  enjoy drinking tea from all over the world but my favorites
                  are: mate and chamomile tea.
              </p>
            </div>
            <div className="pt-8 flex border-t border-gray-200 w-40 mx-auto text-gray-500 items-center justify-center">
              <a href="https://github.com/ZihSilva/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                </svg>
              </a>
              <Link to="https://www.linkedin.com/in/zimarlen-silva-49a7a0238/">
                <svg
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="p-4 relative">
          <div className="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
            <Link href="#" className="block relative">
              <img
                alt="profile"
                src={images2}
                className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800"
              />
            </Link>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow px-8 py-4 pt-24">
            <div className="text-center">
              <p className="text-2xl text-gray-800 dark:text-white">
                Larissa Bueno
              </p>
              <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                Web Developer
              </p>
              <p className="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
              Hi! My name is Larissa. I'm a Brazilian, who enjoys reading
                  and learning new things. While studying I like to have coffee
                  or any stimulant tea. Also, I love fruity teas that can boost
                  my mood."
              </p>
            </div>
            <div className="pt-8 flex border-t border-gray-200 w-40 mx-auto text-gray-500 items-center justify-center">
            <Link  to="https://github.com/larissambn/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                </svg>
              </Link>
              <Link to="https://www.linkedin.com/in/larissa-bueno-a7a828214/">
                <svg
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div>
    //   <div className="w-full bg-white">
    //     <section className="max-w-xl mx-auto xsm:max-w-xsm sm:px-2 sm:max-w-xsm md:max-w-2xl lg:max-w-4xl">
    //       <div className="text-center pb-12 pt-4">
    //         <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-500">
    //        OUR TEAM MEMBERS
    //         </h1>
    //       </div>
    //       <div className="grid grid-cols-1  max-w-20 gap-6">
    //       <div className="w-full bg-gray-300 rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
    //         <div className="lg:w-80 xlg:w-40 md:w-40 md:h-full h-80">
    //             <img
    //               className="object-center object-cover w-full h-full"
    //               src={images1}
    //               alt="team"
    //             />
    //           </div>
    //           <div className="w-full md:w-3/5 text-left p-4 md:p-4 space-y-2">
    //             <p className="text-xl text-gray-600 font-bold">Carolina</p>
    //             <p className="text-base text-gray-600 font-normal">
    //               Web Developer
    //             </p>
    //             <p className="text-base leading-relaxed text-gray-600 font-normal">
    //               Hi, my name is Caroline, I'm from Brazil and love to know
    //               different places and cultures. I made a trip in 2019 to Europe
    //               and I had a chance to visit many places I had had always
    //               wanted to see. While studying web development at Ironhack, I'm
    //               already dreaming about places I want to go next.
    //             </p>
    //             <div className="flex justify-start space-x-2">
    //               <Link to="/" className="text-gray-500 hover:text-gray-600">
    //                 <svg
    //                   className="w-6 h-6 text-gray-500 fill-current"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   viewBox="0 0 448 512"
    //                 >
    //                   <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
    //                 </svg>
    //               </Link>
    //               <Link
    //                 to="//github.com/carolineabreu"
    //                 className="text-gray-500 hover:text-gray-600"
    //               >
    //                 <svg
    //                   className="w-6 h-6"
    //                   fill="currentColor"
    //                   viewBox="0 0 24 24"
    //                 >
    //                   <path
    //                     fillRule="evenodd"
    //                     d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    //                     clipRule="evenodd"
    //                   />
    //                 </svg>
    //               </Link>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="w-full bg-gray-300 rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
    //         <div className="lg:w-80 xlg:w-40 md:w-40 md:h-full h-80">
    //             <img
    //               className="object-center object-cover w-full h-full"
    //               src={images}
    //               alt="team"
    //             />
    //           </div>
    //           <div className="w-full md:w-3/5 text-left p-4 md:p-4 space-y-2">
    //             <p className="text-xl text-gray-500 font-bold">Zimarlen</p>
    //             <p className="text-base text-gray-500 font-normal">
    //               Web Developer
    //             </p>
    //             <p className="text-base leading-relaxed text-gray-500 font-normal">
    //               Hi! My name is Zimarlen, a web developer who loves traveling,
    //               trying different food and sipping tea throughtout the day. I
    //               enjoy drinking tea from all over the world but my favorites
    //               are: mate and chamomile tea.
    //             </p>
    //             <div className="flex justify-start space-x-2">
    //               <Link to="/" className="text-gray-500 hover:text-gray-600">
    //                 <svg
    //                   className="w-6 h-6 text-gray-500 fill-current"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   viewBox="0 0 448 512"
    //                 >
    //                   <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
    //                 </svg>
    //               </Link>
    //               <Link
    //                 to="//github.com/ZihSilva"
    //                 className="text-gray-500 hover:text-gray-600"
    //               >
    //                 <svg
    //                   className="w-6 h-6"
    //                   fill="currentColor"
    //                   viewBox="0 0 24 24"
    //                 >
    //                   <path
    //                     fillRule="evenodd"
    //                     d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    //                     clipRule="evenodd"
    //                   />
    //                 </svg>
    //               </Link>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="w-full bg-gray-300 rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
    //         <div className="lg:w-80 xlg:w-40 md:w-40 md:h-full h-80">
    //             <img
    //               className="object-center object-cover w-full h-full"
    //               src={images2}
    //               alt="team"
    //             />
    //           </div>
    //           <div className="w-full md:w-3/5 text-left p-4 md:p-4 space-y-2">
    //             <p className="text-xl text-gray-500 font-bold">Larissa</p>
    //             <p className="text-base text-gray-500 font-normal">
    //               Web Developer
    //             </p>
    //             <p className="text-base leading-relaxed text-gray-500 font-normal">
    //               Hi! My name is Larissa. I'm a Brazilian, who enjoys reading
    //               and learning new things. While studying I like to have coffee
    //               or any stimulant tea. Also, I love fruity teas that can boost
    //               my mood."
    //             </p>
    //             <div className="flex justify-start space-x-2">
    //               <svg
    //                 className="w-6 h-6 text-gray-500 fill-current"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 448 512"
    //               >
    //                 <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
    //               </svg>
    //               <Link
    //                 to="//github.com/larissambn"
    //                 className="text-gray-500 hover:text-gray-600"
    //               >
    //                 <svg
    //                   className="w-6 h-6"
    //                   fill="currentColor"
    //                   viewBox="0 0 24 24"
    //                 >
    //                   <path
    //                     fillRule="evenodd"
    //                     d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    //                     clipRule="evenodd"
    //                   />
    //                 </svg>
    //               </Link>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   </div>
    // </div>
  );
}
