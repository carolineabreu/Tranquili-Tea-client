import { Link } from "react-router-dom";
import images from "../../components/images/Design sem nome-3.png";
import images1 from "../../components/images/PHOTO-2022-10-08-18-06-04.jpg";
import images2 from "../../components/images/Lari.jpg";

export function OurTeam() {
  return (
    <div>
      <div className="w-full bg-white">
        <section className="max-w-xl mx-auto xsm:max-w-xsm sm:px-2 sm:max-w-xsm md:max-w-2xl lg:max-w-7xl">
          <div className="text-center pb-12">
            <h2 className="text-base font-bold text-gray-600"></h2>
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-500">
           OUR TEAM MEMBERS
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="w-full bg-gray-300 rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
              <div className="w-full md:w-40 md:h-full h-80">
                <img
                  className="object-center object-cover w-full h-full"
                  src={images1}
                  alt="team"
                />
              </div>
              <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
                <p className="text-xl text-gray-600 font-bold">Carolina</p>
                <p className="text-base text-gray-600 font-normal">
                  Web Developer
                </p>
                <p className="text-base leading-relaxed text-gray-600 font-normal">
                  Hi, my name is Caroline, I'm from Brazil and love to know
                  different places and cultures. I made a trip in 2019 to Europe
                  and I had a chance to visit many places I had had always
                  wanted to see. While studying web development at Ironhack, I'm
                  already dreaming about places I want to go next.
                </p>
                <div className="flex justify-start space-x-2">
                  <Link to="/" className="text-gray-500 hover:text-gray-600">
                    <svg
                      class="w-6 h-6 text-gray-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                    </svg>
                  </Link>
                  <Link
                    to="//github.com/carolineabreu"
                    className="text-gray-500 hover:text-gray-600"
                  >
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-300 rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-40 md:h-full h-80">
                <img
                  className="object-center object-cover w-full h-full"
                  src={images}
                  alt="team"
                />
              </div>
              <div className="w-full md:w-3/5 text-left p-4 md:p-4 space-y-2">
                <p className="text-xl text-gray-500 font-bold">Zimarlen</p>
                <p className="text-base text-gray-500 font-normal">
                  Web Developer
                </p>
                <p className="text-base leading-relaxed text-gray-500 font-normal">
                  Hi! My name is Zimarlen, a web developer who loves traveling,
                  trying different food and sipping tea throughtout the day. I
                  enjoy drinking tea from all over the world but my favorites
                  are: mate and chamomile tea.
                </p>
                <div className="flex justify-start space-x-2">
                  <Link to="/" className="text-gray-500 hover:text-gray-600">
                    <svg
                      class="w-6 h-6 text-gray-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                    </svg>
                  </Link>
                  <Link
                    to="//github.com/ZihSilva"
                    className="text-gray-500 hover:text-gray-600"
                  >
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-300 rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-40 md:h-full h-80">
                <img
                  className="object-center object-cover w-full h-full"
                  src={images2}
                  alt="team"
                />
              </div>
              <div className="w-full md:w-3/5 text-left p-4 md:p-4 space-y-2">
                <p className="text-xl text-gray-500 font-bold">Larissa</p>
                <p className="text-base text-gray-500 font-normal">
                  Web Developer
                </p>
                <p className="text-base leading-relaxed text-gray-500 font-normal">
                  Hi! My name is Larissa. I'm a Brazilian, who enjoys reading
                  and learning new things. While studying I like to have coffee
                  or any stimulant tea. Also, I love fruity teas that can boost
                  my mood."
                </p>
                <div className="flex justify-start space-x-2">
                  <svg
                    class="w-6 h-6 text-gray-500 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                  <Link
                    to="//github.com/larissambn"
                    className="text-gray-500 hover:text-gray-600"
                  >
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
