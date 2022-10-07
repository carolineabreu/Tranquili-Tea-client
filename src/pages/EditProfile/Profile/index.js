import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../api/api";

export function EditProfile() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    phoneNumber: 0,
    address: ""
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
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div class="min-h-screen bg-gray-100 flex items-center justify-center">
      <form onSubmit={handleSubmit}>
        <div class="px-10">
          <div class="bg-white max-w-xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
            <div className="col-span-9 shadow rounded  bg-white px-6 pt-5 pb-7">
              <h4 className="text-lg font-medium capitalize mb-4">
                Edit Profile
              </h4>
              <div className="space-y-10git">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label text-gray-600 mb-6 text-sm htmlFor="formAddress">Address:</label>
                    <input
                      id="formAddress"
                      placeholder="Address"
                      type="text"
                      name="address"
                      onChange={handleChange}
                      value={form.address}
                      className="input-box"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="formPhoneNumber">Phone Number:</label>
                    <input
                      id="formPhoneNumber"
                      placeholder="Phone Number"
                      type="number"
                      name="phoneNumber"
                      onChange={handleChange}
                      value={form.phoneNumber}
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
  );
}
