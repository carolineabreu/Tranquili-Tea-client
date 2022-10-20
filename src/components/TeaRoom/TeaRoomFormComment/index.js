import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../../../api/api";
import "../../../pages/TeaRoom/TeaRoomHomePage/styles.css";

export function TeaRoomFormComment() {
  const { id } = useParams();
  const [commentForm, setCommentForm] = useState({
    comment: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post(`/tea-room/comment/${id}/create`, commentForm);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e) {
    setCommentForm({ ...commentForm, [e.target.name]: e.target.value });
  }

  return (
    <>
      <div className="card ">
        <div className="media-body ml">
          <form onSubmit={handleSubmit}>
            <div className="comment-container">
              <input
                className="form-comment"
                onChange={handleChange}
                id="formComment"
                type="text"
                value={commentForm.comment}
                name="comment"
              />
            </div>
          </form>

          <div className="flex-parent jc-center">
            <button
              onSubmit={handleSubmit}
              type="submit"
              className="button1 margin-right"
            >
              Comment
            </button>
            <Link to="/tea-room">
              <button type="submit" className="button2">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
