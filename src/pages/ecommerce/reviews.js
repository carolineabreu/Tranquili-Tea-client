import { useState } from "react";
import axios from "axios";

export function Reviews() {
  const [form, setForm] = useState({
    Reviews: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // try {
    //   const response = await axios.post(
    //     "https://ironrest.herokuapp.com/.../TeaPage/${id}/review/${id}",
    //     form
    //   );

    window.location.reload(true);

    //     console.log(response);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }

    return (
      <form onSubmit={handleSubmit}>
        <label>Reviews:</label>
        <input
          type="text"
          id="ReviewTea"
          name="review"
          value={form.Reviews}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>
    );
  };
}
