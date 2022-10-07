import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { differenceInDays } from "date-fns";
import { api } from "../../api/api";
import { NavbarForum } from "../../components/NavbarForum/index";
import { TeaRoomFormComment } from "../../components/TeaRoomFormComment";
import { TeaRoomComment } from "../../components/TeaRoomComment";


export function TeaRoomPost() {
  const { id } = useParams();
  const [post, setPost] = useState({
    owner: "",
    title: "",
    body: "",
    tag: ""
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
    <div>
      <NavbarForum />
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          {/* FIXME: mostrar o username, não o id */}
          <span className="text-sm text-gray-600 flex items-center">{post.owner}</span>
          <span className="text-sm text-gray-600 flex items-center">{differenceInDays(
            new Date(Date.now()),
            new Date(post.createdAt)
          )}{" "}
            days ago</span>
          <div className="font-bold text-xl mb-2">{post.title}</div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{post.tag}</span>
          </div>
          <p className="text-gray-700 text-base">
            {post.body}
          </p>
        </div>
      </div>;
      <TeaRoomFormComment />
      <TeaRoomComment />
    </div>
  );
}
