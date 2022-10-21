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
          <div className="comment-container">
            <form onSubmit={handleSubmit}>
              <input
                className="form-comment"
                onChange={handleChange}
                id="formComment"
                type="text"
                value={commentForm.comment}
                name="comment"
              />
              <button
                type="submit"
                className="button1 margin-right"
              >
                Comment
              </button>
            </form>
          </div>

          <div className="flex-parent jc-center">
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
