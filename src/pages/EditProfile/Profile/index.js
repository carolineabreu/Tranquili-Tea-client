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
      <section onSubmit={handleSubmit}>
        <h1>Customize Profile</h1>
        <label htmlFor="formAbout">Address:</label>
        <br />
        <input
          id="formAddress"
          placeholder="Address"
          type="text"
          name="address"
          onChange={handleChange}
          value={form.address}
        />
        <br />
        <input
          id="formPhoneNumber"
          placeholder="Phone Number"
          type="number"
          name="phoneNumber"
          onChange={handleChange}
          value={form.phoneNumber}
        />
        <br />
        <button type="submit">Submit</button>
      </section>
    </div>
  );
}
