import { useState, useEffect } from "react";
import { api } from "../../../api/api";
import differenceInDays from "date-fns/differenceInDays";
import style from "./style.module.css";

export function AllComments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await api.get("/tea-room/comment/all-comments");
        setComments(response.data);

        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUserData();
  }, []);

  return (
    <div className={style.container}>
      {comments.map((currentComment) => {
        return (
          <div className={style.container__card}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <span className="text-sm text-gray-600 flex items-center">{differenceInDays(
                  new Date(Date.now()),
                  new Date(currentComment.createdAt)
                )}{" "}
                  days ago</span>
                <div className="font-bold text-xl mb-2">
                  {currentComment.comment}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
