import { useState, useEffect } from "react";
import { api } from "../../../api/api";
import differenceInDays from "date-fns/differenceInDays";
import { Link } from "react-router-dom";
import { NavbarForum } from "../../../components/NavbarForum/index";

export function TeaRoomHomePage() {
  const [allPosts, setAllPosts] = useState([]);
  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await api.get("/tea-room/post/all");
        setAllPosts(response.data);

        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUserData();
  }, []);

  return (
    <div>
      <NavbarForum />
      {allPosts.map((currentPost) => {
        console.log(currentPost);
        return (
          <div>
            <div class="min-h-20 py-6 w-full bg-gray-100 flex items-center justify-center" style={{ backgroundColor: "  #F5F5F5 " }}>

              <div class="bg-white max-w-xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500" >
                <div className="col-span-9 shadow rounded  px-10 pt-5 pb-7">
                  {/* FIXME: mostrar o username, não o id */}
                  <span className="text-sm text-gray-600 flex items-center">
                    {currentPost.owner.username}
                  </span>
                  <span className="text-sm text-gray-600 flex items-center">
                    {differenceInDays(
                      new Date(Date.now()),
                      new Date(currentPost.createdAt)
                    )}{" "}
                    days ago
                  </span>
                  <div className="font-bold text-xl mb-2">
                    <Link to={`/tea-room/post/${currentPost._id}`}>
                      {currentPost.title}
                    </Link>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {currentPost.tag}
                    </span>
                  </div>
                  <p className="text-gray-700 text-base">
                    {currentPost.body}
                  </p>
                  <Link to={`/tea-room/post/${currentPost._id}`}>
                    <button class="inline-flex items-center px-1 pt-2 ml-1 flex-column">
                      <svg
                        class="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900"
                        viewBox="0 0 95 78"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"
                          fill-rule="nonzero"
                        />
                      </svg>
                    </button>
                  </Link>
                  <button class="inline-flex items-center px-1 -ml-1 flex-column">
                    <svg
                      class="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      ></path>
                    </svg>
                  </button>
                  <div className="mt-4 flex items-center">
                    <div className="flex -space-x-2 mr-2">
                      <img
                        className="rounded-full w-6 h-6 border border-white"
                        src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                        alt=""
                      />
                      <img
                        className="rounded-full w-6 h-6 border border-white"
                        src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                        alt=""
                      />
                    </div>
                    <div className="text-sm text-gray-500 font-semibold">
                      5 Replies
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
