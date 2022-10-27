import { useEffect, useState } from "react";
<<<<<<< HEAD
import { useParams, Link, useNavigate } from "react-router-dom";
=======
import { useParams, Link } from "react-router-dom";
>>>>>>> 3e5eb94 (commit)
import { differenceInDays } from "date-fns";
import { api } from "../../../api/api";
import { NavbarForum } from "../../../components/NavbarForum/index";
import { TeaRoomFormComment } from "../../../components/TeaRoom/TeaRoomFormComment";
import { TeaRoomComment } from "../../../components/TeaRoom/TeaRoomComment";
<<<<<<< HEAD
import "../../../pages/TeaRoom/TeaRoomHomePage/styles.css";


export function TeaRoomPost() {
  const navigate = useNavigate();
=======
import "../../../pages/TeaRoom/TeaRoomHomePage/styles.css"


export function TeaRoomPost() {
>>>>>>> 3e5eb94 (commit)
  const { id } = useParams();
  const [post, setPost] = useState({
    owner: "",
    title: "",
    body: "",
    tag: "",
  });

<<<<<<< HEAD

  async function handleDelete() {
    try {
      await api.delete(`tea-room/post/delete/${id}`);
      navigate("/tea-room");
    } catch (error) {
      console.log(error);
    }
  }

=======
>>>>>>> 3e5eb94 (commit)
  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await api.get(`/tea-room/post/${id}`);

        setPost(response.data);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
    fetchPost();
  }, [id]);

  return (
    <div style={{ backgroundColor: "  #F5F5F5 ", height: "100vh" }}>
      <NavbarForum />
      <div >
<<<<<<< HEAD
        <div className="container-post">
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
                    <Link to={`/tea-room/post/${post._id}`}>
                      {post.title}
                    </Link>
                  </h6>
                  <p className="text-secondary">
                    {post.body}
                  </p>
                  <p className="text-muted">
                    <span>
                      {post.owner.username}
                      {""}
                    </span>{" "}
                    replied{" "}
                    <span className="text-secondary font-weight-bold">
                      {differenceInDays(
                        new Date(Date.now()),
                        new Date(post.createdAt)
                      )}{" "}
                      days ago
                    </span>
                  </p>
                </div>
                <div>
                  <button onClick={handleDelete} className="button3">Delete 🗑️</button>
                </div>
              </div>
            </div>
          </div>
          <TeaRoomFormComment />
          <TeaRoomComment />
        </div>
      </div>
    </div>


=======
      <div className="container-post">
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
                                <Link to={`/tea-room/post/${post._id}`}>
                                  {post.title}
                                </Link>
                              </h6>
                              <p className="text-secondary">
                                {post.body}
                              </p>
                              <p className="text-muted">
                                <span>
                                  {post.owner.username}
                                  {""}
                                </span>{" "}
                                replied{" "}
                                <span className="text-secondary font-weight-bold">
                                  {differenceInDays(
                                    new Date(Date.now()),
                                    new Date(post.createdAt)
                                  )}{" "}
                                  days ago
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
              <TeaRoomFormComment />
              <TeaRoomComment />
            </div>
            </div>
         </div>
          
    
>>>>>>> 3e5eb94 (commit)
  );
}
