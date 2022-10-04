import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { BsCardImage } from "react-icons/fa";

export function TeaRoomForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    body: "",
    image: "",
    tag: "",
  });

  const [img, setImg] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleImage(e) {
    setImg(e.target.files[0]);
  }

  async function handleUpload() {
    try {
      const uploadImage = new FormData();
      uploadImage.append("image", img);

      const response = await api.post("/upload-image", uploadImage);

      return response.data.url;
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const imgURL = await handleUpload();
      await api.post("/tea-room/post/new-post", { ...form, img: imgURL });

      //FIXME: /post => ver se ta certa e
      navigate("/post/:id");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="formTitle"></label>
      <input
        type="text"
        id="formTitle"
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
      />

      <label htmlFor="formBody"></label>
      <input
        type="textarea"
        id="formBody"
        name="body"
        value={form.body}
        onChange={handleChange}
        placeholder="Text"
      />

      <label htmlFor="formTag">Tags</label>
      <select id="formTag" name="tag" value={form.tag} onChange={handleChange}>
        <option value="Question">Question</option>
        <option value="Recommendation">Recommendation</option>
        <option value="Photo">Photo</option>
        <option value="Review">Review</option>
        <option value="Discussion">Discussion</option>
      </select>

      <label htmlFor="formImg"><BsCardImage /></label>
      <input
        type="file"
        id="formImg"
        onChange={handleImage}
      />

      <button type="submit">Post</button>
    </form>
  );
}
