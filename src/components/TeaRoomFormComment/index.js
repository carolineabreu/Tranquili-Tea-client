import { useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api/api";


export function TeaRoomFormComment() {
  const { id } = useParams;
  const [comment, setComment] = useState({
    comment: ""
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post(`/tea-room/comment/${id}/create`, comment);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e) {
    setComment({ ...comment, [e.target.name]: e.target.value });
  }

  return (
    <>
      <form onSubmit={handleSubmit} class="w-full max-w-sm">
        <div class="flex items-center border-b border-teal-500 py-2">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text"
            aria-label="Full name"
            onChange={handleChange}
            value={comment.comment}
            name="comment"
          />
          <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
            Comment
          </button>
        </div>
      </form>
    </>
  );

}
