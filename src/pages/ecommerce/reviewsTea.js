import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";

export function Comment() {
  const [form, setForm] = useState({
    Comment: "",
  });

  const navigate = useNavigate();

  const { setLoggedInUser } = useContext(AuthContext);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSumit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/user/login", form);
      setLoggedInUser({ ...response.data });

      localStorage.setItem("loggedInUser", JSON.stringify(response.data));

      navigate("/TeaPage:id");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSumit}>
      <label>Comment:</label>
      <input
        type="text"
        id="CommentTea"
        name="comment"
        value={form.Comment}
        onChange={handleChange}
      />
      <button type="submit">Send</button>
    </form>
  );
}
