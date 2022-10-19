import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { differenceInDays } from "date-fns";
import { api } from "../../../api/api";
import { NavbarForum } from "../../../components/NavbarForum/index";
import { TeaRoomFormComment } from "../../../components/TeaRoom/TeaRoomFormComment";
import { TeaRoomComment } from "../../../components/TeaRoom/TeaRoomComment";
import "../../../pages/TeaRoom/TeaRoomHomePage/styles.css"


export function TeaRoomPost() {
  const { id } = useParams();
  const [post, setPost] = useState({
    owner: "",
    title: "",
    body: "",
    tag: "",
  });

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
          
    
  );
}
