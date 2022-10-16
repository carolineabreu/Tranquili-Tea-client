import "../../index.css";
import { Link } from 'react-router-dom';

export function NavbarForum() {
  return (
    <div>
      <nav className=" bg-white w-full flex relative justify-between items-center mx-auto px-8 h-20 ">
        <div className="inline-flex">
          <Link to="/" className="_o6689fn" href="/"><div className="hidden md:block">
          </div>
            <div className="ml-4 flex lg:ml-0">
              <Link to="/tea-room" className="text-2xl ml-10 text-green-600 font-extrabold font-sans">Tea Room</Link>
            </div>
          </Link>
        </div>

        <div className="hidden md:block flex-shrink flex-grow-0 justify-start px-2">
          <div className="inline-block">
            <div className="inline-flex items-center max-w-full">
              <button className="flex items-center w-96 border rounded-full px-1  py-1" type="button">
                <div className="block flex-grow text-black-900 fill-current flex-shrink overflow-hidden">Search</div>
                <div className="flex items-center  text-green-400 fill-current justify-center relative  h-8 w-8 rounded-full">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentcolor', strokeWidth: '5.33333', overflow: 'visible' }}>
                    <g fill="none">
                      <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9" />
                    </g>
                  </svg>
                </div>
              </button>
              <div className="px-4">
                <Link to="/tea-room/new-post" className="inline-block px-1 py-2 bg-white w-50 hover:bg-blue-200 text-blue-500 font-semibold hover:border- rounded-full" >
                  <div className="flex items-center relative cursor-pointer  text-xl   whitespace-nowrap"> + </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-initial">
          <div className="flex justify-end items-center relative">
            <div className="mr-8 items-center hidden md:block flex-shrink flex-grow-1 justify-start px-2">
              <Link to="/" className="inline-block py-2  w-50 bg-white hover:bg-blue-100 text-blue-400  hover:text-white  border-blue-500" >
                <div className="flex  flex-shrink items-center relative cursor-pointer whitespace-nowrap text-xl text-blue-400  font-mono" >Tranquili-Tea</div>
              </Link>
            </div>
            <div className="block md:block ">
              <div className="inline relative">
                <Link to="/tea-room/profile">
                  <button type="button" className="inline-flex items-center relative border-black-900 px-2 border rounded-full hover:bg-blue-100">
                    <div className="pl-1 text-blue-400 fill-current">
                      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: 3, overflow: 'visible' }}>
                        <g fill="none" fillRule="nonzero">
                          <path d="m2 16h28" />
                          <path d="m2 24h28" />
                          <path d="m2 8h28" />
                        </g>
                      </svg>
                    </div>
                    <div className="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5  text-blue-400 fill-current ">
                      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentcolor' }}>
                        <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z" />
                      </svg>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
