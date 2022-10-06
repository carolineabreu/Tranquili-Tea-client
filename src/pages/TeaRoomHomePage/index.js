import { useState, useEffect } from "react";
import { api } from "../../api/api";

export function TeaRoomHomePage() {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await api.get("/tea-room/post/all");

        setAllPosts(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchPost();
  }, []);

  return (
    <div>
      {allPosts.map((currentPost) => {
        return (
          <div>

          </div>
        );
      })}
    </div>
  );
}
