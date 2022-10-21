import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../api/api";
import { differenceInDays } from "date-fns";
import "../../../index.css";

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
            <div className="card">
              <div className="media-body ml">
                <div className="media-body ml" style={{ border: "1px solid #3367b5", borderRadius: "5px", backgroundColor: "#f8f1fd" }}>
                  <div className="px- py-4" style={{ padding: "20px" }}>
                    <span className="text-sm text-gray-600" style={{ paddingRight: "5px", fontSize: "1rem", color: "#c870ff" }}> {currentComment.name}
                      {currentComment.owner.username}
                    </span>
                    <span className="text-sm text-gray-600 "> - </span>
                    <span className="text-sm text-gray-600 " style={{ fontSize: "0.8rem", color: "#a493ae" }}>
                      {differenceInDays(
                        new Date(Date.now()),
                        new Date(currentComment.createdAt)
                      )}{" "}
                      days ago
                    </span>
                    <p className="text-gray-700 text-base">
                      {currentComment.comment}
                    </p>
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
