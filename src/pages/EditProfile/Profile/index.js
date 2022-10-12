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
    <div>
      <form onSubmit={handleSubmit}>
        <div className="contain py-16">
          <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
            <h4 className="text-lg font-medium capitalize mb-4">
              Edit Profile
            </h4>
            <div>
              <label htmlFor="phone">Phone number:</label>
              <input
                value={form.phoneNumber}
                onChange={handleChange}
                type="tel"
                name="phone"
                id="phone"
                className="input-box input-box input-box block w-full border mb-4 text-sm border-gray-300 px-4 py-3 text-gray-600 rounded focus:ring-0 focus:border-primary focus:bg-blue-100 placeholder-gray-400"
                placeholder="Fill in your phone number"
              />
            </div>
            <div>
              <label htmlFor="formAddress">Address:</label>
              <input
                value={form.address}
                onChange={handleChange}
                type="text"
                name="address"
                id="formAddress"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary focus:bg-blue-100 placeholder-gray-400"
              />
            </div>

            <button type="submit" className="w-1/2 py-2 text-center text-white bg-green-400 rounded uppercase font-roboto font-medium text-sm hover:bg-green-600">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
}
