import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../api/api";
import { NavbarForum } from "../../../components/NavbarForum";

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
    <>
      <NavbarForum />
      <div>
        <form onSubmit={handleSubmit}>
          <div className="heading text-center font-bold text-2xl m-5 text-gray-800">New Post</div>
          <style dangerouslySetInnerHTML={{ __html: "\n  body {background:white !important;}\n" }} />
          <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">

            <label htmlFor="formBody">About: </label>
            <textarea
              className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
              spellCheck="false"
              placeholder="A brief description of yourself shown on your profile."
              defaultValue={""}
              type="textarea"
              id="formBody"
              name="about"
              value={form.about}
              onChange={handleChange}
            />

            <div className="icons flex text-gray-500 m-2">
              <div className="count ml-auto text-gray-400 text-xs font-semibold">0/200</div>
            </div>
            {/* buttons */}
            <div className="buttons flex">
              <button type="submit" className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
