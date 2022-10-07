import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api/api";
import { differenceInDays } from "date-fns";

export function TeaRoomComment() {
  const { id } = useParams();
  const [comment, setComment] = useState([]);

  useEffect(() => {
    async function fetchComment() {
      try {
        const response = await api.get(`/tea-room/comment/${id}/all`);
        console.log(response.data);
        setComment(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchComment();
  }, [id]);

  return (
    <div>
      {comment.map((currentComment) => {
        return (
          <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <span className="text-sm text-gray-600 flex items-center">{currentComment.owner.username}</span>
                <span className="text-sm text-gray-600 flex items-center">{differenceInDays(
                  new Date(Date.now()),
                  new Date(currentComment.createdAt)
                )}{" "}
                  days ago</span>
                <p className="text-gray-700 text-base">
                  {currentComment.comment}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
