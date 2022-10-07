import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../api/api";

export function EditTeaRoomProfile() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    about: ""
  });

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await api.get(`/user/profile`);
        setForm({ ...response.data });
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await api.patch(`/user/edit-profile`, {
        ...form,
      });

      console.log(response);
      navigate("/tea-room/profile");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Customize Profile</h1>
        <label htmlFor="formAbout">About:</label>
        <br />
        <textarea
          id="formAbout"
          placeholder="What do you have to say about yourself?"
          type="textarea"
          name="about"
          onChange={handleChange}
          value={form.about}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
