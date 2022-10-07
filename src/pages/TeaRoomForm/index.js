import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { NavbarForum } from "../../components/NavbarForum/index";
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
    <>
      <NavbarForum />
      <div>
        <div className="heading text-center font-bold text-2xl m-5 text-gray-800">New Post</div>
        <style dangerouslySetInnerHTML={{__html: "\n  body {background:white !important;}\n" }} />
        <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
        <label htmlFor="formTitle"></label>
        
        <input
    
          id="formTitle"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
        />
          <input onSubmit={handleSubmit} value={form.title} id="formTitle" className="title  bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellCheck="false" placeholder="Title" type="text" />
          <textarea className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" spellCheck="false" placeholder="Describe everything about this post here" defaultValue={""} />
          {/* icons */}
          <div className="icons flex text-gray-500 m-2">
            <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
            <div className="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
          </div>
          {/* buttons */}
          <div className="buttons flex">
            <div className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">Cancel</div>
            <div className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">Post</div>
          </div>
        </div>
      </div>
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
    </>
  );
}

