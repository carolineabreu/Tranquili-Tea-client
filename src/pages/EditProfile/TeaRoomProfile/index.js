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

      <div class="min-h-screen bg-gray-100 flex items-center justify-center">
        <form onSubmit={handleSubmit}>
          <div class="px-10">
            <div class="bg-white max-w-xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
              <div className="col-span-9 shadow rounded  bg-white px-6 pt-5 pb-7">
                <h4 className="text-lg font-bold capitalize mb-4">
                  Customize Profile
                </h4>
                <div className="space-y-10git">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label text-gray-600 mb-6 font-medium htmlFor="formAbout">About:</label>
                      <textarea
                        id="formAbout"
                        placeholder="About..."
                        type="textarea"
                        name="about"
                        onChange={handleChange}
                        value={form.about}
                        className="input-box"
                      />
                    </div>
                  </div>

                </div>
                <div className="mt-4">
                  <button type="submit" className="py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium">Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
