import { useEffect } from "react";

export function SearchBar() {
  useEffect(() => {});

  function showOptions_search_1(e) {
    const options_search_1 = document.getElementById("interaction_search_1");
    options_search_1.classList.toggle("hidden");
  }

  const plusme_search_1 = (el) => {
    let currentValue = parseInt(
      el.target.parentElement.parentElement.children[2].innerText
    );

    el.target.parentElement.parentElement.children[2].innerText =
      currentValue + 1000;
  };
  const minusme_search_1 = (el) => {
    let currentValue = parseInt(
      el.target.parentElement.parentElement.children[2].innerText
    );
    if (currentValue > 0) {
      el.target.parentElement.parentElement.children[2].innerText =
        currentValue - 1000;
    }
  };

  function showDropDownMenu_search_1(el) {
    el.target.parentElement.children[1].classList.toggle("hidden");
  }
  function swaptext_search_1(el) {
    const targetText = el.target.innerText;
    document.getElementById("drop-down-content-setter_search_1").innerText =
      targetText;
    document
      .getElementById("drop-down-div_search_1")
      .classList.toggle("hidden");
  }
  function showDropDownMenuOne_search_1(el) {
    el.target.parentElement.children[1].classList.toggle("hidden");
  }
  function swaptextone_search_1(el) {
    const targetText = el.target.innerText;
    document.getElementById("drop-down-content-setter-one_search_1").innerText =
      targetText;
    document
      .getElementById("drop-down-div-one_search_1")
      .classList.toggle("hidden");
  }
  function showDropDownMenutwo_search_1(el) {
    el.target.parentElement.children[1].classList.toggle("hidden");
  }
  function swaptexttwo_search_1(el) {
    const targetText = el.target.innerText;
    document.getElementById("drop-down-content-setter-two_search_1").innerText =
      targetText;
    document
      .getElementById("drop-down-div-two_search_1")
      .classList.toggle("hidden");
  }

  return (
    <>
      <div>
        <div className="relative h-full min-h-screen pb-40 bg-gray-100">
          <div className="py-4 px-7">
            <div className="mt-7  rounded-[4px]  bg-white max-w-[1124px] w-full mx-auto ">
              <div className="flex flex-wrap justify-between pb-2 lg:flex-nowrap">
                <div className="flex flex-col w-full gap-4 lg:flex-row md:flex-col p-7">
                  <div className="relative lg:max-w-[410px] w-full">
                    <input
                      placeholder="Search"
                      className="p-4 py-3 outline-none focus pr-10  bg-gray-100 border rounded border-gray-100 text-slate-600  lg:max-w-[410px] w-full leading-4"
                    />
                    <svg
                      className="absolute pointer-events-none top-3 right-5 "
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                        stroke="#4B5563"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 21L15 15"
                        stroke="#4B5563"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <button className="bg-indigo-700  text-white lg:max-w-[164px] font-medium px-6 py-4 w-full  rounded-[4px] leading-[14px] hover:bg-indigo-600">
                    Search
                  </button>
                </div>
                <button
                  onClick={showOptions_search_1}
                  className="text-indigo-700 hover:text-indigo-800 w-full lg:max-w-[200px] flex justify-end items-center gap-3  font-medium pr-7"
                >
                  Advanced Search{" "}
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.00011 2.06433L13.5608 7.62499L12.5001 8.68565L8.00011 4.18565L3.50011 8.68565L2.43945 7.62499L8.00011 2.06433Z"
                      fill="#4338CA"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.75 3V13.625H7.25V3H8.75Z"
                      fill="#4338CA"
                    />
                  </svg>
                </button>
              </div>
              <div className="py-8 mt-2 mb-2 bg-gray-100" />
              <div
                className="hidden pb-10 mt-12 px-7"
                id="interaction_search_1"
              >
                <div className="flex flex-wrap justify-between lg:flex-nowrap">
                  <div className="flex flex-wrap w-full gap-4 ">
                    <div className="relative lg:max-w-[410px] w-full">
                      <input
                        placeholder="Search"
                        className="p-4 py-3 outline-none focus pr-10  bg-gray-100 border rounded border-gray-100 text-slate-600  lg:max-w-[410px] w-full leading-4"
                      />
                      <svg
                        className="absolute pointer-events-none top-3 right-5"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                          stroke="#4B5563"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21 21L15 15"
                          stroke="#4B5563"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <button className="bg-indigo-700  text-white lg:max-w-[164px] font-medium px-6 py-4 w-full  rounded-[4px] leading-[14px] hover:bg-indigo-600">
                      Search
                    </button>
                  </div>
                  <button className="text-indigo-700 hover:text-indigo-800 w-full lg:max-w-[200px] flex justify-end items-center gap-3 lg:mt-0 md:mt-4 mt-4 font-medium">
                    Advanced Search{" "}
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.96967 7.84467C3.26256 7.55178 3.73744 7.55178 4.03033 7.84467L8 11.8143L11.9697 7.84467C12.2626 7.55178 12.7374 7.55178 13.0303 7.84467C13.3232 8.13756 13.3232 8.61244 13.0303 8.90533L8.53033 13.4053C8.23744 13.6982 7.76256 13.6982 7.46967 13.4053L2.96967 8.90533C2.67678 8.61244 2.67678 8.13756 2.96967 7.84467Z"
                        fill="#4338CA"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 2.375C8.41421 2.375 8.75 2.71079 8.75 3.125V12.25C8.75 12.6642 8.41421 13 8 13C7.58579 13 7.25 12.6642 7.25 12.25V3.125C7.25 2.71079 7.58579 2.375 8 2.375Z"
                        fill="#4338CA"
                      />
                    </svg>
                  </button>
                </div>
                <hr className="bg-[#F1F5F9] mt-6" />
                <div className="grid gap-10 mt-12 md:grid-cols-1 lg:grid-cols-2">
                  <div>
                    <p className="mb-3 text-sm font-medium leading-none text-left text-gray-800">
                      Team Name
                    </p>
                    <div className="flex items-center justify-start ">
                      <input
                        className="relative w-full h-12 px-4 py-3 text-sm leading-none text-left text-gray-600 border border-gray-300 rounded outline-none"
                        type="text"
                        placeholder="For example “Alpha”"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="mb-3 text-sm font-medium leading-none text-left text-gray-800">
                      Team Type
                    </p>
                    <div className="relative ">
                      <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                        <button
                          onClick={showDropDownMenu_search_1}
                          className="relative flex items-center justify-between w-full h-12 px-5 py-3 dropbtn-one"
                        >
                          <span
                            className="pr-4 text-sm font-medium text-gray-600"
                            id="drop-down-content-setter_search_1"
                          >
                            Beginner
                          </span>
                          <svg
                            id="rotate"
                            className="absolute z-10 cursor-pointer right-5"
                            width={10}
                            height={6}
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.5 0.75L5 5.25L9.5 0.75"
                              stroke="#4B5563"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                        <div
                          className="absolute right-0 hidden w-full px-1 py-2 bg-white border-t border-gray-200 rounded shadow top-12"
                          id="drop-down-div_search_1"
                        >
                          <a href="javascript:void(0)" className="hover">
                            <p
                              className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                              onClick={swaptext_search_1}
                            >
                              Beginner
                            </p>
                          </a>
                          <a href="javascript:void(0)">
                            <p
                              className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                              onClick={swaptext_search_1}
                            >
                              Intermediate
                            </p>
                          </a>
                          <a href="javascript:void(0)">
                            <p
                              className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                              onClick={swaptext_search_1}
                            >
                              Expert
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-8 lg:mt-0">
                    <p className="mb-3 text-sm font-medium leading-none text-left text-gray-800">
                      Team Size
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="sets_search_1 flex flex-wrap items-center justify-between w-full h-full px-3 py-4 border border-gray-300 rounded lg:h-12 md:h-12 md:flex-nowrap lg:flex-nowrap lg:gap-x-3  ">
                        <div className="flex p-2" id="rad">
                          <input
                            type="radio"
                            name="same"
                            className="mt-3 accent-indigo-700"
                          />
                          <label className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:text-indigo-700 hover:rounded">
                            1-5
                          </label>
                        </div>
                        <div className="flex p-2 lg:p-0 md:p-0">
                          <input
                            type="radio"
                            name="same"
                            className="mt-3 accent-indigo-700"
                          />
                          <label className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:text-indigo-700 hover:rounded">
                            5-10
                          </label>
                        </div>
                        <div className="flex p-2 lg:p-0 md:p-0 ">
                          <input
                            type="radio"
                            name="same"
                            className="mt-3 accent-indigo-700"
                          />
                          <label className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:text-indigo-700 hover:rounded">
                            10-15
                          </label>
                        </div>
                        <div className="flex p-2 lg:p-0 md:p-0 ">
                          <input
                            type="radio"
                            name="same"
                            className="mt-3 accent-indigo-700"
                          />
                          <label className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:text-indigo-700 hover:rounded">
                            15-20
                          </label>
                        </div>
                        <div className="flex p-2 lg:p-0 md:p-0 ">
                          <input
                            type="radio"
                            name="same"
                            className="mt-3 accent-indigo-700"
                          />
                          <label className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:text-indigo-700 hover:rounded">
                            20+
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className>
                    <p className="mb-3 text-sm font-medium leading-none text-left text-gray-800">
                      Amount
                    </p>
                    <div className="flex items-center h-12 px-4 py-3 mt-2 border rounded border-slate-300">
                      <div className="svg-container" onClick={minusme_search_1}>
                        <svg
                          className="rounded-full cursor-pointer hover:bg-gray-100"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21 12C21 7.03125 16.9688 3 12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12Z"
                            stroke="#475569"
                            strokeMiterlimit={10}
                          />
                          <path
                            d="M15.75 12H8.25"
                            stroke="#475569"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="pl-4 dollar-container">
                        <p className="pr-1 text-sm leading-none text-slate-600">
                          $
                        </p>
                      </div>
                      <div className="w-full text-sm leading-none text-container text-slate-600">
                        1000
                      </div>
                      <div className="svg-container" onClick={plusme_search_1}>
                        <svg
                          className="rounded-full cursor-pointer hover:bg-gray-100"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21 12C21 7.03125 16.9688 3 12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12Z"
                            stroke="#475569"
                            strokeMiterlimit={10}
                          />
                          <path
                            d="M12 8.25V15.75"
                            stroke="#475569"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15.75 12H8.25"
                            stroke="#475569"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className>
                    <p className="mb-3 text-sm font-medium leading-none text-left text-gray-800">
                      Category
                    </p>
                    <div className="relative ">
                      <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one ">
                        <button
                          onClick={showDropDownMenuOne_search_1}
                          className="relative flex items-center justify-between w-full h-12 px-5 py-3 dropbtn-one"
                        >
                          <span
                            className="pr-4 text-sm font-medium text-gray-600"
                            id="drop-down-content-setter-one_search_1"
                          >
                            Q/A
                          </span>
                          <svg
                            id="rotate1"
                            className="absolute z-10 cursor-pointer right-5"
                            width={10}
                            height={6}
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.5 0.75L5 5.25L9.5 0.75"
                              stroke="#4B5563"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                        <div
                          className="absolute right-0 z-20 hidden w-full px-1 py-2 overflow-y-auto bg-white border-t border-gray-200 rounded shadow top-12 lg:overflow-y-auto lg:h-[128px] "
                          id="drop-down-div-one_search_1"
                        >
                          <a href="javascript:void(0)" className="hover">
                            <p
                              className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                              onClick={swaptextone_search_1}
                            >
                              Q/A
                            </p>
                          </a>
                          <a href="javascript:void(0)">
                            <p
                              className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                              onClick={swaptextone_search_1}
                            >
                              Designing
                            </p>
                          </a>
                          <a href="javascript:void(0)">
                            <p
                              className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                              onClick={swaptextone_search_1}
                            >
                              Developement
                            </p>
                          </a>
                          <a href="javascript:void(0)">
                            <p
                              className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                              onClick={swaptextone_search_1}
                            >
                              Marketing
                            </p>
                          </a>
                          <a href="javascript:void(0)">
                            <p
                              className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                              onClick={swaptextone_search_1}
                            >
                              Business Developement
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className>
                    <p className="mb-3 text-sm font-medium leading-none text-left text-gray-800">
                      Group Type
                    </p>
                    <div className="relative ">
                      <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                        <button
                          onClick={showDropDownMenutwo_search_1}
                          className="relative flex items-center justify-between w-full h-12 px-5 py-3 dropbtn-one"
                        >
                          <span
                            className="pr-4 text-sm font-medium text-gray-600"
                            id="drop-down-content-setter-two_search_1"
                          >
                            All
                          </span>
                          <svg
                            id="rotate1"
                            className="absolute z-10 cursor-pointer right-5"
                            width={10}
                            height={6}
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.5 0.75L5 5.25L9.5 0.75"
                              stroke="#4B5563"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                        <div
                          className="absolute right-0 z-20 hidden w-full px-1 py-2 bg-white border-t border-gray-200 rounded shadow top-12"
                          id="drop-down-div-two_search_1"
                        >
                          <a href="javascript:void(0)" className="hover">
                            <p
                              className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                              onClick={swaptexttwo_search_1}
                            >
                              All
                            </p>
                          </a>
                          <a href="javascript:void(0)">
                            <p
                              className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                              onClick={swaptexttwo_search_1}
                            >
                              Users
                            </p>
                          </a>
                          <a href="javascript:void(0)">
                            <p
                              className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                              onClick={swaptexttwo_search_1}
                            >
                              Orders
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Interaction_search_1 */}
                </div>
                <div className="flex flex-col items-center justify-end w-full gap-4 mt-10 lg:flex-row">
                  <button className="bg-white  text-indigo-700 lg:max-w-[164px] font-medium px-6 py-4 w-full border border-indigo-700  rounded-[4px] leading-[14px] hover:bg-gray-50">
                    Cancel
                  </button>
                  <button className="bg-indigo-700  text-white lg:max-w-[164px] font-medium px-6 py-4 w-full  rounded-[4px] leading-[14px] hover:bg-indigo-600">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>
          {`
      input[type="radio"]:checked + label {

        color: rgb(67 56 202);
      
      }
      @media (max-width: 492px) {
        .sets_search_1{
          justify-content: start;
        }
        /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
    
      `}
        </style>
      </div>
    </>
  );
}


