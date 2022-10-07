import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
// import { Box, Text } from 'grommet';
// import { SelectMultiple } from "grommet";
// import { Grommet } from "grommet";
// import { TextArea } from 'grommet';

// const defaultOptions = [
//   'Question',
//   'Recommendation',
//   'Review',
//   'Photo',
//   'Discussion',
// ];

export function TeaRoomForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    body: "",
    tag: "",
  });

  // const [options, setOptions] = useState(defaultOptions);
  // const [valueMultiple, setValueMultiple] = useState([]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/tea-room/post/new-post", form);

      console.log(response);
      //FIXME: /post => ver se ta certa e
      navigate(`/tea-room/profile`);
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
      <textarea
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
        <option value="Blog">Blog</option>
        <option value="Review">Review</option>
        <option value="Discussion">Discussion</option>
      </select>

      {/* <Grommet >
        <Box fill align="center" pad="large" gap="large">
          <Text>SelectMultiple Default</Text>
          <SelectMultiple
            value={valueMultiple}
            placeholder="Select"
            options={options}
            onSearch={(text) => {
              const escapedText = text.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');

              const exp = new RegExp(escapedText, 'i');
              setOptions(defaultOptions.filter((o) => exp.test(o)));
            }}
            onClose={() => setOptions(defaultOptions)}
            onChange={({ value }) => {
              setValueMultiple(value);
            }}
          />
        </Box>
      </Grommet> */}

      <button type="submit">Post</button>
    </form>
  );
}

