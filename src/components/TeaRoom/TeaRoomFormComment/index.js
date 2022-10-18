import { useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../api/api";


export function TeaRoomFormComment() {
  const { id } = useParams();
  const [commentForm, setCommentForm] = useState({
    comment: ""
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
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <form onSubmit={handleSubmit} className="">
        <div className="flex items-center border-b border-gray-500  pl-40 py-4">
          <label htmlFor="formComment"></label>
          <input
            className="appearance-none p-10 bg-transparent border-none w-full text-gray-700 mr-10 py-10 px-2 leading-tight focus:outline-none"
            onChange={handleChange}
            id="formComment"
            type="text"
            value={commentForm.comment}
            name="comment"
          />
          <button className="flex-shrink-0 bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
            Comment
          </button>
        </div>
      </form>
      </div>
    </>
  );

}
