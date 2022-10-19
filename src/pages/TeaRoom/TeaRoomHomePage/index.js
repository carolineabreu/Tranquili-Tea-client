import { useState, useEffect } from "react";
import { api } from "../../../api/api";
import differenceInDays from "date-fns/differenceInDays";
import { Link } from "react-router-dom";
import { NavbarForum } from "../../../components/NavbarForum/index";
import "./styles.css";

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
        return (
          <div>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css"
              integrity="sha256-46r060N2LrChLLb5zowXQ72/iKKNiw/lAmygmHExk/o="
              crossOrigin="anonymous"
            />
            <div className="container">
              <div className="main-body p-0">
                <div className="inner-wrapper">
                  <div className="inner-sidebar">
                    <div className="inner-sidebar-header justify-content-center">
                      <Link to="/tea-room/new-post">
                      <button
                        className="btn btn-primary has-icon btn-block"
                        type="button"
                        data-toggle="modal"
                        data-target="#threadModal"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-plus mr-2"
                        >
                          <line x1={12} y1={5} x2={12} y2={19} />
                          <line x1={5} y1={12} x2={19} y2={12} />
                        </svg>
                        NEW DISCUSSION
                      </button>
                      </Link>
                    </div>
                    <div className="inner-sidebar-body p-0">
                      <div className="p-3 h-100" data-simplebar="init">
                        <div
                          className="simplebar-wrapper"
                          style={{ margin: "-16px" }}
                        >
                          <div className="simplebar-height-auto-observer-wrapper">
                            <div className="simplebar-height-auto-observer" />
                          </div>
                          <div className="simplebar-mask">
                            <div
                              className="simplebar-offset"
                              style={{ right: "0px", bottom: "0px" }}
                            >
                              <div
                                className="simplebar-content-wrapper"
                                style={{
                                  height: "100%",
                                  overflow: "hidden scroll",
                                }}
                              >
                                <div
                                  className="simplebar-content"
                                  style={{ padding: "16px" }}
                                >
                                  <nav className="nav nav-pills nav-gap-y-1 flex-column">
                                  <Link
                                      to="javascript:void(0)"
                                      className="nav-link nav-link-faded has-icon active"
                                    >
                                    Tags
                                    </Link>
                                  <Link
                                      to="javascript:void(0)"
                                      className="nav-link nav-link-faded has-icon"
                                    >
                                     Question
                                    </Link>
                                    <Link
                                      to="javascript:void(0)"
                                      className="nav-link nav-link-faded has-icon"
                                    >
                                      Recommendation
                                    </Link>
                                    <Link
                                      to="javascript:void(0)"
                                      className="nav-link nav-link-faded has-icon"
                                    >
                                     Blog
                                    </Link>
                                    <Link
                                      to="javascript:void(0)"
                                      className="nav-link nav-link-faded has-icon"
                                    >
                                      Review
                                    </Link>
                                    <Link
                                      to="javascript:void(0)"
                                      className="nav-link nav-link-faded has-icon"
                                    >
                                      Discussion
                                    </Link>
                                  </nav>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="simplebar-placeholder"
                            style={{ width: "234px", height: "292px" }}
                          />
                        </div>
                        <div
                          className="simplebar-track simplebar-horizontal"
                          style={{ visibility: "hidden" }}
                        >
                          <div
                            className="simplebar-scrollbar"
                            style={{ width: "0px", display: "none" }}
                          />
                        </div>
                        <div
                          className="simplebar-track simplebar-vertical"
                          style={{ visibility: "visible" }}
                        >
                          <div
                            className="simplebar-scrollbar"
                            style={{
                              height: "151px",
                              display: "block",
                              transform: "translate3d(0px, 0px, 0px)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inner-main">
                    <div className="inner-main-header">
                      <select className="custom-select custom-select-sm w-auto mr-1">
                        <option selected>Tags</option>
                        <option value={1}>Question</option>
                        <option value={3}>Recommendation</option>
                        <option value={3}>Blog</option>
                        <option value={3}>Review</option>
                        <option value={3}>Discussion</option>
                      </select>
                      <span className="input-icon input-icon-sm ml-auto w-auto">
                        <input
                          type="text"
                          className="form-control form-control-sm bg-gray-200 border-gray-200 shadow-none mb-4 mt-4"
                          placeholder="Search forum"
                        />
                      </span>
                    </div>
                    <div className="inner-main-body p-2 p-sm-3 collapse forum-content show">
                      <div className="card mb-2">
                        <div className="card-body p-2 p-sm-3">
                          <div className="media forum-item">
                            <Link
                              to=""
                              data-toggle="collapse"
                              data-target=".forum-content"
                            >
                              <img
                                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                className="mr-3 rounded-circle"
                                width={50}
                                alt="User"
                              />
                            </Link>
                            <div className="media-body">
                              <h6>
                                <Link to={`/tea-room/post/${currentPost._id}`}>
                                  {currentPost.title}
                                </Link>
                              </h6>
                              <p className="text-gray-700 border rounded-2 bg-slate-50 h-20 pl-4 pt-2">
                                {currentPost.body}
                              </p>
                              <p className="text-muted">
                                <span>
                                  {currentPost.owner.username}
                                  {""}
                                </span>{" "}
                                replied{" "}
                                <span className="text-secondary font-weight-bold">
                                  {differenceInDays(
                                    new Date(Date.now()),
                                    new Date(currentPost.createdAt)
                                  )}{" "}
                                  days ago
                                </span>
                              </p>
                            </div>
                            <div className="text-muted small text-center align-self-center pt-0">
                              <span className="d-none d-sm-inline-block">
                              <Link to="#"><i class="fa fa-thumbs-up"></i> Like (22)</Link>
                              </span>
                              <Link to={`/tea-room/post/${currentPost._id}`}>
                              <span>
                                <i className="far fa-comment color-blue ml-2" /> 3
                              </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <ul className="pagination pagination-sm pagination-circle justify-content-center mb-0">
                        <li className="page-item disabled">
                          <span className="page-link has-icon">
                            <i className="material-icons">chevron_left</i>
                          </span>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" to="javascript:void(0)">
                            1
                          </Link>
                        </li>
                        <li className="page-item active">
                          <span className="page-link">2</span>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" to="javascript:void(0)">
                            3
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link
                            className="page-link has-icon"
                            to="javascript:void(0)"
                          >
                            <i className="material-icons">chevron_right</i>
                          </Link>
                        </li>
                      </ul> */}
                    </div>
                    {/* /Forum List */}
                    {/* Forum Detail */}
                    {/* <div className="inner-main-body p-2 p-sm-3 collapse forum-content">
                      <div className="card mb-2">
                        <div className="card-body">
                          <div className="media forum-item">
                            <a href="javascript:void(0)" className="card-link">
                              <img
                                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                className="rounded-circle"
                                width={50}
                                alt="User"
                              />
                              <small className="d-block text-center text-muted">
                                Newbie
                              </small>
                            </a>
                            <div className="media-body ml-3">
                              <a
                                href="javascript:void(0)"
                                className="text-secondary"
                              >
                                Mokrani
                              </a>
                              <small className="text-muted ml-2">
                                1 hour ago
                              </small>
                              <h5 className="mt-1">Realtime fetching data</h5>
                              <div className="mt-3 font-size-sm">
                                <p>Hellooo :)</p>
                                <p>
                                  I'm newbie with laravel and i want to fetch
                                  data from database in realtime for my
                                  dashboard anaytics and i found a solution with
                                  ajax but it dosen't work if any one have a
                                  simple solution it will be helpful
                                </p>
                                <p>Thank</p>
                              </div>
                            </div>
                            <div className="text-muted small text-center">
                              <span className="d-none d-sm-inline-block">
                                <i className="far fa-eye" /> 19
                              </span>
                              <span>
                                <i className="far fa-comment ml-2" /> 3
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* /Forum Detail */}
                    {/* /Inner main body */}
                  </div>
                  {/* /Inner main */}
                </div>
                {/* New Thread Modal */}
                {/* <div
                  className="modal fade"
                  id="threadModal"
                  tabIndex={-1}
                  role="dialog"
                  aria-labelledby="threadModalLabel"
                  aria-hidden="true"
                >
              
                </div> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
